# SBAgen

Question bank and single-best answer question generator for medical study.

## Run Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Supabase Login Setup

SBAgen can run without Supabase, but progress will only be saved in the
browser on that device. To enable user accounts and cloud progress sync:

1. Create a Supabase project.
2. In the Supabase SQL editor, run [`supabase/schema.sql`](supabase/schema.sql).
3. Copy `.env.local.example` to `.env.local`.
4. Fill in:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your-supabase-publishable-key
```

The Supabase publishable key is safe to use in the browser because database
access is protected by the Row Level Security policies in `supabase/schema.sql`.
Each saved row is tied to the signed-in user's Supabase auth id.

## Supabase Email Confirmation

In Supabase, go to **Authentication** > **Email Templates** > **Confirm signup**.
Set the confirmation link to:

```html
{{ .RedirectTo }}?token_hash={{ .TokenHash }}&type=email
```

Then go to **Authentication** > **URL Configuration**:

- Set **Site URL** to the production website URL.
- Add the production website and `http://localhost:3000/**` to **Redirect URLs**.
