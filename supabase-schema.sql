-- Run in Supabase SQL Editor (https://supabase.com/dashboard/project/qupykncakpthuofrvvgf/sql)
-- If direct db host is IPv6-only, use Session Pooler connection instead:
-- postgresql://postgres.qupykncakpthuofrvvgf:6ts9itimhbPjHhxX@aws-0-eu-central-1.pooler.supabase.com:6543/postgres

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

-- optional: contact messages
create table if not exists contacts (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  message text not null,
  created_at timestamptz default now()
);

create index if not exists idx_bookings_outlet_date on bookings(outlet_slug, date);
create index if not exists idx_bookings_email on bookings(email);
