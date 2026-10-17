create table if not exists public.waitlist_signups (
  id         bigint generated always as identity primary key,
  email      text not null unique
             check (email = lower(email) and char_length(email) <= 254 and email ~ '^[^\s@]+@[^\s@]+\.[^\s@]+$'),
  created_at timestamptz not null default now()
);

alter table public.waitlist_signups enable row level security;

create policy "Anyone can join the waitlist"
  on public.waitlist_signups
  for insert
  to anon
  with check (true);
