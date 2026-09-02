# ReviewBooster - Vercel + Stripe Ready

## Deploy to Vercel in 2 mins
1. Push this folder to GitHub or drag folder to Vercel import
2. In Vercel dashboard > Settings > Environment Variables, add:
   - STRIPE_SECRET_KEY
   - STRIPE_PRICE_STARTER (for $19/mo)
   - STRIPE_PRICE_GROWTH (for $39/mo)
   - STRIPE_PRICE_AGENCY (for $79/mo)
   - NEXT_PUBLIC_SITE_URL = your vercel URL
3. Deploy. Done.

## Stripe Setup (2 min)
- Go to Stripe > Products > Create 3 products:
  - Starter $19/mo recurring
  - Growth $39/mo recurring
  - Agency $79/mo recurring
- Copy Price IDs (price_xxx) into Vercel env
- Alternative: use Payment Links and just replace hrefs in pages/index.js if you don't want API route

## How Checkout Works
- Frontend calls /api/checkout?plan=starter|growth|agency
- API creates Stripe Checkout Session and redirects
- Success redirects to /?success=1

Landing page builder is fully client-side, no DB needed for v1.
