# ReviewBooster

A Next.js landing page that sells a Google-review generation service, with Stripe Checkout for three subscription tiers.

## Features

- Marketing landing page ("Turn Every Happy Customer Into 5-Star Google Reviews On Autopilot")
- Three pricing tiers: Starter $19/mo, Growth $39/mo, Agency White-Label $79/mo
- Stripe Checkout sessions via `/api/checkout?plan=starter|growth|agency`; success redirects to `/?success=1`
- Client-side only for v1 — no database

## Tech stack

- Next.js 14.2.5, React 18.3.1
- `stripe` Node SDK (^14.21.0) for Checkout sessions
- `vercel.json` for Vercel deployment

## Getting started

- `npm run dev` / `npm run build` / `npm start` (from `package.json`)
- Environment variables: `STRIPE_SECRET_KEY`, `STRIPE_PRICE_STARTER`, `STRIPE_PRICE_GROWTH`, `STRIPE_PRICE_AGENCY`, `NEXT_PUBLIC_SITE_URL`
- Stripe setup: create the three recurring products in the Stripe dashboard and copy the price IDs into the env vars above (alternatively replace the checkout links with Stripe Payment Links)

## Project structure

- `pages/index.js` — landing page with pricing section
- `pages/_app.js` — app wrapper
- `pages/api/checkout.js` — creates Stripe Checkout sessions
- `next.config.js`, `vercel.json` — build/deploy config

## Status

Small, self-contained v1. Checkout flow is wired to Stripe; the "landing page builder" described in the original notes is not present beyond the single landing page.
