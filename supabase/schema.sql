-- Ace-portfolio — Supabase schema
-- Run this once in: Supabase Dashboard → SQL Editor → New query → paste → Run.
-- Safe to re-run: every statement is idempotent (IF NOT EXISTS / DROP ... IF EXISTS / WHERE NOT EXISTS).

create extension if not exists pgcrypto;

-- ============================================================
-- Tables
-- ============================================================

create table if not exists site_settings (
    id uuid primary key default gen_random_uuid(),
    owner_name text not null default 'Sabih Iriho',
    contact_email text not null default 'sabihlv76@gmail.com',
    phone_number text,
    instagram_url text,
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now()
);

create table if not exists hero_content (
    id uuid primary key default gen_random_uuid(),
    headline text not null default 'Hi, I''m Sabih Iriho',
    subtitle text not null default 'Software Developer & Creative Digital Professional',
    cta_text text not null default 'Hire Me',
    students_count text default '4+',
    role_title text default 'Full-Stack Developer',
    role_subtitle text default 'Kigali, Rwanda',
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now()
);

create table if not exists about_content (
    id uuid primary key default gen_random_uuid(),
    intro_line text not null default 'Hey, I''m Sabih',
    headline text not null default 'Software Developer, Creative Designer, and Digital Problem Solver',
    description text not null default '',
    cta_text text not null default 'Hire Me',
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now()
);

create table if not exists "values" (
    id uuid primary key default gen_random_uuid(),
    title text not null,
    description text not null,
    "order" integer not null default 0,
    created_at timestamptz not null default now()
);

create table if not exists blog_posts (
    id uuid primary key default gen_random_uuid(),
    title text not null,
    content text not null,
    image_url text,
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now()
);

create table if not exists podcast_episodes (
    id uuid primary key default gen_random_uuid(),
    title text not null,
    description text not null,
    audio_url text not null,
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now()
);

-- Admin login for /admin. No seed row here on purpose — see the follow-up
-- snippet you'll be given to insert your own email + password hash.
create table if not exists admins (
    id uuid primary key default gen_random_uuid(),
    email text not null unique,
    password text not null, -- bcrypt hash, never plaintext
    name text not null,
    created_at timestamptz not null default now()
);

-- ============================================================
-- updated_at auto-touch trigger
-- ============================================================

create or replace function set_updated_at()
returns trigger as $$
begin
    new.updated_at = now();
    return new;
end;
$$ language plpgsql;

drop trigger if exists set_updated_at on site_settings;
create trigger set_updated_at before update on site_settings
    for each row execute function set_updated_at();

drop trigger if exists set_updated_at on hero_content;
create trigger set_updated_at before update on hero_content
    for each row execute function set_updated_at();

drop trigger if exists set_updated_at on about_content;
create trigger set_updated_at before update on about_content
    for each row execute function set_updated_at();

drop trigger if exists set_updated_at on blog_posts;
create trigger set_updated_at before update on blog_posts
    for each row execute function set_updated_at();

drop trigger if exists set_updated_at on podcast_episodes;
create trigger set_updated_at before update on podcast_episodes
    for each row execute function set_updated_at();

-- ============================================================
-- Row Level Security
-- The app only ever talks to Supabase with the service role key
-- (which bypasses RLS), so these policies matter only if a public/anon
-- key is ever used directly from the browser later. Content tables get
-- public read access; `admins` stays fully locked down.
-- ============================================================

alter table site_settings enable row level security;
alter table hero_content enable row level security;
alter table about_content enable row level security;
alter table "values" enable row level security;
alter table blog_posts enable row level security;
alter table podcast_episodes enable row level security;
alter table admins enable row level security;

drop policy if exists "Public read access" on site_settings;
create policy "Public read access" on site_settings for select using (true);

drop policy if exists "Public read access" on hero_content;
create policy "Public read access" on hero_content for select using (true);

drop policy if exists "Public read access" on about_content;
create policy "Public read access" on about_content for select using (true);

drop policy if exists "Public read access" on "values";
create policy "Public read access" on "values" for select using (true);

drop policy if exists "Public read access" on blog_posts;
create policy "Public read access" on blog_posts for select using (true);

drop policy if exists "Public read access" on podcast_episodes;
create policy "Public read access" on podcast_episodes for select using (true);

-- No policy on `admins` at all: only the service role (which bypasses RLS) can touch it.

-- ============================================================
-- Seed data — matches the content already hardcoded in the site today,
-- so nothing visually changes; it just becomes editable from /admin.
-- Each insert is a no-op if the table already has a row.
-- ============================================================

insert into site_settings (owner_name, contact_email, phone_number, instagram_url)
select 'Sabih Iriho', 'sabihlv76@gmail.com', '+250 792 459 837', ''
where not exists (select 1 from site_settings);

insert into hero_content (headline, subtitle, cta_text, students_count, role_title, role_subtitle)
select
    'Hi, I''m Sabih Iriho',
    'Software Developer & Creative Digital Professional',
    'Hire Me',
    '4+',
    'Full-Stack Developer',
    'Kigali, Rwanda'
where not exists (select 1 from hero_content);

insert into about_content (intro_line, headline, description, cta_text)
select
    'Hey, I''m Sabih',
    'Software Developer, Creative Designer, and Digital Problem Solver',
    $desc$I am a multidisciplinary digital professional who enjoys working at the intersection of technology, creativity, and business. My journey started with software development studies at Saint Kizito TSS, where I developed a strong interest in programming, problem-solving, and modern web technologies.

Over the years, I expanded my skills beyond software engineering into sales management, graphic design, and digital media production. This combination allows me to not only build software but also understand branding, user engagement, communication, and business growth strategies.

I am passionate about building high-performance applications, improving user experiences, and helping businesses establish strong digital identities. I also enjoy exploring Linux environments, open-source software, and continuously learning new tools and technologies.$desc$,
    'Hire Me'
where not exists (select 1 from about_content);

insert into "values" (title, description, "order")
select * from (
    values
        ('Continuous Learning', 'Technology evolves every day and I evolve with it. I am committed to constantly learning new tools, frameworks, and best practices to stay ahead and deliver cutting-edge solutions.', 0),
        ('Creativity & Innovation', 'Great products are born from creative thinking. I approach every problem — whether in code, design, or business — with fresh perspectives and innovative solutions that stand out.', 1),
        ('Discipline & Resilience', 'Building meaningful things takes persistence. I embrace challenges as opportunities, stay focused under pressure, and consistently deliver quality work regardless of difficulty.', 2),
        ('Growth Mindset', 'I believe that skills, intelligence, and capabilities are developed through dedication and hard work. Every project is an opportunity to grow — technically, creatively, and professionally.', 3)
) as v(title, description, "order")
where not exists (select 1 from "values");

-- Admin login seed lives in supabase/seed-admin.local.sql (gitignored) —
-- it contains a real password hash, so it's kept out of this shared/committed file.
-- Run that file's contents in the SQL Editor too (same paste-and-run process).
