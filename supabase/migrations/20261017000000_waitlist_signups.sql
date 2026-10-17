create table if not exists public.waitlist_signups (
  id         bigint generated always as identity primary key,
  email      text not null unique,
  created_at timestamptz not null default now()
);

alter table public.waitlist_signups enable row level security;
