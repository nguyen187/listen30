-- Listen 30 & Talk Shop: per-user progress storage (own table, separate from any other app's tables).
-- Run once in Supabase: Dashboard → SQL Editor → New query → paste → Run.

create table if not exists public.english_progress (
  user_id    uuid primary key references auth.users (id) on delete cascade,
  listen30   jsonb,
  talkshop   jsonb,
  profile    jsonb,
  updated_at timestamptz not null default now()
);

alter table public.english_progress enable row level security;

-- Each signed-in user can only see and change their own row.
drop policy if exists "own row select" on public.english_progress;
drop policy if exists "own row insert" on public.english_progress;
drop policy if exists "own row update" on public.english_progress;
drop policy if exists "own row delete" on public.english_progress;

create policy "own row select" on public.english_progress for select using (auth.uid() = user_id);
create policy "own row insert" on public.english_progress for insert with check (auth.uid() = user_id);
create policy "own row update" on public.english_progress for update using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "own row delete" on public.english_progress for delete using (auth.uid() = user_id);
