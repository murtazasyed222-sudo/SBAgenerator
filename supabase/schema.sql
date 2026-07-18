create table if not exists public.user_question_progress (
  user_id uuid not null references auth.users(id) on delete cascade,
  question_set_id text not null,
  answered integer not null default 0,
  correct integer not null default 0,
  total integer not null default 0,
  completed_at timestamptz,
  updated_at timestamptz not null default now(),
  primary key (user_id, question_set_id)
);

create table if not exists public.user_question_answers (
  user_id uuid not null references auth.users(id) on delete cascade,
  question_set_id text not null,
  selected_answers jsonb not null default '{}'::jsonb,
  saved_at timestamptz,
  updated_at timestamptz not null default now(),
  primary key (user_id, question_set_id)
);

alter table public.user_question_progress enable row level security;
alter table public.user_question_answers enable row level security;

drop policy if exists "Users can read their own question progress"
  on public.user_question_progress;
drop policy if exists "Users can insert their own question progress"
  on public.user_question_progress;
drop policy if exists "Users can update their own question progress"
  on public.user_question_progress;
drop policy if exists "Users can delete their own question progress"
  on public.user_question_progress;
drop policy if exists "Users can read their own saved answers"
  on public.user_question_answers;
drop policy if exists "Users can insert their own saved answers"
  on public.user_question_answers;
drop policy if exists "Users can update their own saved answers"
  on public.user_question_answers;
drop policy if exists "Users can delete their own saved answers"
  on public.user_question_answers;

create policy "Users can read their own question progress"
  on public.user_question_progress
  for select
  using (auth.uid() = user_id);

create policy "Users can insert their own question progress"
  on public.user_question_progress
  for insert
  with check (auth.uid() = user_id);

create policy "Users can update their own question progress"
  on public.user_question_progress
  for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create policy "Users can delete their own question progress"
  on public.user_question_progress
  for delete
  using (auth.uid() = user_id);

create policy "Users can read their own saved answers"
  on public.user_question_answers
  for select
  using (auth.uid() = user_id);

create policy "Users can insert their own saved answers"
  on public.user_question_answers
  for insert
  with check (auth.uid() = user_id);

create policy "Users can update their own saved answers"
  on public.user_question_answers
  for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create policy "Users can delete their own saved answers"
  on public.user_question_answers
  for delete
  using (auth.uid() = user_id);
