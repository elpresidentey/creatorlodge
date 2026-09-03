import pg from "pg";
const cs = "postgresql://postgres.qupykncakpthuofrvvgf:6rrMnavZncYiXhoa@aws-0-eu-west-2.pooler.supabase.com:6543/postgres?pgbouncer=true";
const p = new pg.Pool({ connectionString: cs, ssl: { rejectUnauthorized: false } });
await p.query(`create unique index if not exists bookings_unique_slot on bookings (outlet_slug, space_id, date, coalesce(time,''));`);
console.log("unique index ok");
const r = await p.query(`select indexname from pg_indexes where tablename='bookings'`);
console.log(r.rows);
await p.end();
