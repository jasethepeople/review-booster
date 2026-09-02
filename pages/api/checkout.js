import Stripe from 'stripe';

export default async function handler(req, res) {
  const { plan } = req.query;
  if (!process.env.STRIPE_SECRET_KEY) {
    return res.status(500).json({ error: 'Missing STRIPE_SECRET_KEY env' });
  }
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

  const priceMap = {
    starter: process.env.STRIPE_PRICE_STARTER,
    growth: process.env.STRIPE_PRICE_GROWTH,
    agency: process.env.STRIPE_PRICE_AGENCY,
  };

  const price = priceMap[plan] || priceMap.growth;
  if (!price) {
    return res.status(400).json({ error: 'Price ID not configured for plan: ' + plan });
  }

  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      line_items: [{ price, quantity: 1 }],
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}?success=1&plan=${plan}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}?canceled=1`,
      allow_promotion_codes: true,
      billing_address_collection: 'auto',
    });
    res.redirect(303, session.url);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
}
