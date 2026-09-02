import pg from "pg";
const ref="qupykncakpthuofrvvgf";
const pwd="6rrMnavZncYiXhoa";
const regions=["eu-west-2"];
for (const r of regions) {
  for (const user of [`postgres.${ref}`, `postgres`]) {
    const cs=`postgresql://${user}:${pwd}@aws-0-${r}.pooler.supabase.com:6543/postgres?pgbouncer=true`;
    const p=new pg.Pool({connectionString:cs,ssl:{rejectUnauthorized:false},connectionTimeoutMillis:4000});
    try {
      const res=await p.query("select 1 as ok");
      console.log(`OK ${r} user=${user} ->`,res.rows[0]);
      // run RLS tweak
      await p.query(`create table if not exists bookings (id text primary key, outlet_slug text not null, space_id text not null, date text not null, time text, guests text, name text not null, email text not null, notes text, created_at timestamptz default now());`);
      await p.query(`alter table bookings enable row level security;`);
      await p.query(`do $$ begin if not exists (select 1 from pg_policies where tablename='bookings' and policyname='service_role_all') then create policy service_role_all on bookings for all to service_role using (true) with check (true); end if; if not exists (select 1 from pg_policies where tablename='bookings' and policyname='deny_anon') then create policy deny_anon on bookings for all to anon using (false) with check (false); end if; end $$;`);
      await p.query(`alter table bookings add column if not exists paid boolean default false;`);
      await p.query(`alter table bookings add column if not exists amount integer;`);
      const pol=await p.query(`select policyname,roles from pg_policies where tablename='bookings'`);
      console.log("policies",pol.rows);
      await p.end();
      process.exit(0);
    } catch(e) { console.log(`FAIL ${r} user=${user} :`,e.message); await p.end().catch(()=>{}); }
  }
}
console.log("all failed");
