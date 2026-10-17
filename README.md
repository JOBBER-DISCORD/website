# Jobify

[![CI](https://github.com/JOBBER-DISCORD/website/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/JOBBER-DISCORD/website/actions/workflows/ci.yml)

The website for [jobify.cc](https://jobify.cc).

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Waitlist database

Waitlist signups are saved to the `waitlist_signups` table in Supabase.

1. In the Supabase dashboard, open **SQL Editor** and run `supabase/migrations/20261017000000_waitlist_signups.sql`.
2. Copy `.env.example` to `.env.local` and fill in the values from **Connect → App Frameworks → Next.js** (or **Project Settings → API Keys**):
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`

Row level security lets the publishable key insert signups but not read them. View signups in **Table Editor → waitlist_signups**.

Set the same two variables on whichever host runs the site.

## Deploying

The site is hosted on Vercel, which is connected to this repo:

- **Pull requests** run CI (lint and build) and get a Vercel preview deployment.
- **Pushes to `main`** run CI and deploy to production at [jobify.cc](https://jobify.cc).

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
