# StepSure Flooring & Repair — Sample Site

A demo rebuild of stepsurefloors.com, built with Next.js (App Router),
Tailwind CSS v4, and TypeScript, matching the stack used on the
yourbigislandrealestate.com project (Vercel + Resend).

## What's here

- Homepage, Services, About, Gallery, Contact, Blog
- A signature before/after slider (illustrative graphics, swap for real job photos)
- An AI-generated local SEO blog with 6 seed posts targeting towns across a
  2-4 hour radius of Philadelphia (South Jersey, Delaware, Lehigh Valley,
  Maryland/DC, NYC metro)
- `/admin/blog` — an internal tool that generates new draft posts on demand
  using the Claude API, for human review before publishing
- A working contact form wired to Resend (falls back to console logging if
  no API key is set, so the demo doesn't break without one)
- `sitemap.xml` generated from the current post list

## Local setup

```bash
npm install
cp .env.example .env.local   # fill in keys if you want live email / AI generation
npm run dev
```

## Environment variables

| Variable | Purpose | Required for demo? |
|---|---|---|
| `ANTHROPIC_API_KEY` | Powers `/admin/blog` post generation | No, shows a clear message without it |
| `RESEND_API_KEY` | Sends contact form emails | No, logs submissions to console without it |
| `CONTACT_TO_EMAIL` | Where contact form emails land | No, defaults to a placeholder |
| `CONTACT_FROM_EMAIL` | Resend sender address | No, defaults to Resend's test sender |

## Deploying

Same flow as the realty site: push to a GitHub repo, import into Vercel,
add the environment variables above in the Vercel project settings, deploy.

## Publishing a new blog post

1. Go to `/admin/blog`, enter a topic and a local town/region, generate a draft.
2. Read it. The system prompt locks the model out of inventing business facts
   (pricing, years in business, specific past jobs) but always read before publishing.
3. Copy the generated `title`, `excerpt`, `topic`, and `content` into a new
   entry in `lib/posts.ts` with a unique `slug` and today's date.
4. Redeploy (or if using a database instead of the static file, just save,
   no redeploy needed, worth doing before this goes to production).

## Content and image notes

- Gallery tiles and the before/after slider use illustrative graphics, not
  real job photos. Swap these before showing this to anyone outside the pitch.
- All copy (services, about, blog posts, testimonials) is original placeholder
  content written for this demo and should be reviewed against the real
  business before going live.
