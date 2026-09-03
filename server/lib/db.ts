import pg from "pg";

function getConnectionString(): string {
  const raw = process.env.DATABASE_URL || process.env.SUPABASE_DB_URL || "";
  if (!raw) return "";
  // Auto-fix: Supabase direct 5432 is IPv6-only on many hosts (Vercel, local IPv4).
  // If 5432 and host is db.<ref>.supabase.co, advise pooler 6543. Try to auto-convert if POOLER url not set.
  // Prefer explicit POOLER if provided.
  const pooler = process.env.DATABASE_POOLER_URL || process.env.SUPABASE_POOLER_URL;
  if (pooler) return pooler;
  if (raw.includes(":5432/") && raw.includes("db.") && raw.includes(".supabase.co")) {
    // Convert to transaction pooler (works with pgbouncer). User must set correct region host; we keep original host + 6543 + pgbouncer flag as fallback.
    try {
      const u = new URL(raw);
      u.port = "6543";
      u.searchParams.set("pgbouncer", "true");
      return u.toString();
    } catch { return raw; }
  }
  return raw;
}

let pool: pg.Pool | null = null;
let poolFailed = false;

export function getPool(): pg.Pool | null {
  const cs = getConnectionString();
  if (!cs || poolFailed) return null;
  if (pool) return pool;
  try {
    const isPooler = cs.includes("6543") || cs.includes("pgbouncer");
    pool = new pg.Pool({
      connectionString: cs,
      ssl: { rejectUnauthorized: false },
      max: isPooler ? 10 : 5,
      connectionTimeoutMillis: 6000,
      idleTimeoutMillis: 10000,
      keepAlive: true,
    });
    pool.on("error", (err) => {
      console.error("PG pool error", err.message);
      poolFailed = true;
    });
    return pool;
  } catch (e) {
    console.error("getPool failed", e);
    poolFailed = true;
    return null;
  }
}

let ensured = false;
export async function ensureBookingsTable(): Promise<boolean> {
  if (ensured) return !poolFailed;
  const p = getPool();
  if (!p) return false;
  try {
    await p.query(`
      create table if not exists bookings (
        id text primary key,
        outlet_slug text not null,
        space_id text not null,
        date text not null,
        time text,
        guests text,
        name text not null,
        email text not null,
        notes text,
        created_at timestamptz default now()
      );
    `);
    // Security: enable RLS and deny anon (service_role only via pg pool)
    await p.query(`alter table bookings enable row level security;`);
    await p.query(`do $$ begin
      if not exists (select 1 from pg_policies where tablename='bookings' and policyname='service_role_all') then
        create policy service_role_all on bookings for all to service_role using (true) with check (true);
      end if;
      if not exists (select 1 from pg_policies where tablename='bookings' and policyname='deny_anon') then
        create policy deny_anon on bookings for all to anon using (false) with check (false);
      end if;
    end $$;`);
    // Add paid column if not exists
    await p.query(`alter table bookings add column if not exists paid boolean default false;`);
    await p.query(`alter table bookings add column if not exists amount integer;`);
    // Availability: prevent double-book same space/outlet/date/time
    await p.query(`create unique index if not exists bookings_unique_slot on bookings (outlet_slug, space_id, date, coalesce(time,''));`);
    ensured = true;
    return true;
  } catch (e: any) {
    console.error("ensureBookingsTable failed:", e.message, e.code);
    // DB host may be IPv6-only (Supabase direct). Mark failed to fallback to memory.
    poolFailed = true;
    return false;
  }
}
