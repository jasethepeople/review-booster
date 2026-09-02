import { useState, useEffect } from 'react';
import Head from 'next/head';

export default function Home() {
  const [bizName, setBizName] = useState("Joe's Plumbing");
  const [city, setCity] = useState("Ogden");
  const [industry, setIndustry] = useState("Plumber");
  const [annual, setAnnual] = useState(false);

  const prices = {
    starter: annual ? 190 : 19,
    growth: annual ? 390 : 39,
    agency: annual ? 790 : 79,
  };

  useEffect(()=>{
    const canvas = document.getElementById('qr');
    if(!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0,0,200,200);
    ctx.fillStyle='#111'; ctx.fillRect(0,0,200,200);
    // fake QR pattern
    ctx.fillStyle='#fff';
    for(let i=0;i<400;i++){
      if(Math.random()>0.5) ctx.fillRect((i%20)*10, Math.floor(i/20)*10, 8,8);
    }
    ctx.fillStyle='#22c55e'; ctx.fillRect(0,0,40,40); ctx.fillRect(160,0,40,40); ctx.fillRect(0,160,40,40);
  }, [bizName]);

  return (
    <>
      <Head>
        <title>ReviewBooster - Turn Happy Customers Into 5-Star Reviews</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet" />
        <style>{`*{font-family:Inter, sans-serif} body{margin:0}`}</style>
      </Head>
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      
      
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b flex items-center justify-between px-6 py-4">
        <div className="font-extrabold text-xl">⭐ ReviewBooster</div>
        <div className="flex gap-3">
          <a href="#pricing" className="px-4 py-2 text-sm font-semibold">Pricing</a>
          <a href="/api/checkout?plan=growth" className="px-5 py-2.5 bg-slate-900 text-white rounded-full text-sm font-bold">Start Free Trial</a>
        </div>
      </header>

      <section className="px-6 py-16 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-bold mb-4">🔥 Founding Members - Price Locks Forever</div>
          <h1 className="text-5xl font-extrabold leading-tight">Turn Every Happy Customer Into 5-Star Google Reviews On Autopilot</h1>
          <p className="mt-4 text-lg text-slate-600">Automated SMS, QR codes, and Google Maps optimization. Starting at just <span className="font-bold text-slate-900">$19/mo</span> - Less than $0.65/day to dominate Google Maps in {city}.</p>
          
          <div className="mt-6 bg-slate-50 p-4 rounded-xl border">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Landing Page Builder Engine - Enter Particulars</div>
            <div className="grid grid-cols-2 gap-3">
              <input value={bizName} onChange={e=>setBizName(e.target.value)} placeholder="Business Name" className="border rounded-lg px-3 py-2 text-sm" />
              <input value={city} onChange={e=>setCity(e.target.value)} placeholder="City" className="border rounded-lg px-3 py-2 text-sm" />
              <select value={industry} onChange={e=>setIndustry(e.target.value)} className="border rounded-lg px-3 py-2 text-sm">
                <option>Plumber</option><option>Dentist</option><option>Auto Shop</option><option>Restaurant</option><option>Barber</option><option>Salon</option>
              </select>
              <div className="text-xs flex items-center text-slate-500">Preview updates live →</div>
            </div>
          </div>

          <div className="mt-6 flex gap-3">
            <a href="/api/checkout?plan=growth" className="px-6 py-3 bg-green-600 text-white rounded-full font-bold">Start 14-Day Free Trial - Lock $39</a>
            <a href="#how" className="px-6 py-3 border rounded-full font-bold">See Live Demo</a>
          </div>
          <div className="mt-3 text-xs text-slate-500">✓ No credit card for trial ✓ Cancel anytime ✓ Works with Square, Housecall Pro, Stripe</div>
        </div>

        <div className="relative">
          <div className="bg-slate-900 rounded-[32px] p-3 w-[320px] mx-auto shadow-2xl">
            <div className="bg-white rounded-[24px] p-5 h-[560px] flex flex-col">
              <div className="text-xs text-slate-400">SMS • now</div>
              <div className="mt-3 bg-slate-100 rounded-2xl p-3 text-sm">Hi! How was your visit to {bizName}? Reply 1-5 ⭐</div>
              <div className="mt-3 bg-green-600 text-white rounded-2xl p-3 text-sm self-end">5 - Amazing!</div>
              <div className="mt-3 bg-slate-100 rounded-2xl p-3 text-sm">Thanks! 🙏 Tap to leave your review on Google - takes 10 seconds: <span className="text-blue-600 underline">g.page/r/review</span></div>
              <div className="mt-auto border rounded-xl p-3 flex items-center gap-3">
                <canvas id="qr" width="200" height="200" className="w-16 h-16 rounded-lg"></canvas>
                <div className="text-xs"><div className="font-bold">{bizName}</div><div className="text-slate-500">Scan to review us in {city}</div><div className="mt-1 inline-block bg-green-50 text-green-700 px-2 py-0.5 rounded-full font-bold">QR for {industry}</div></div>
              </div>
            </div>
          </div>
          <div className="absolute -top-4 -right-4 bg-white shadow-xl rounded-full px-4 py-2 text-sm font-bold border">+127 reviews this month 🚀</div>
          <div className="absolute -bottom-4 -left-4 bg-green-600 text-white shadow-xl rounded-full px-4 py-2 text-sm font-bold">Ranked #1 in {city}</div>
        </div>
      </section>

      <section id="pricing" className="bg-slate-50 border-t py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex bg-green-600 text-white px-4 py-1 rounded-full text-xs font-bold animate-pulse">FOUNDING MEMBERS - PRICE LOCKS FOREVER</div>
            <h2 className="text-4xl font-extrabold mt-4">Simple pricing. No $500/mo rip-off.</h2>
            <p className="mt-3 text-slate-600">Podium & Birdeye charge $400/mo. We do more for less than coffee a day.</p>
            <div className="mt-6 inline-flex bg-white border rounded-full p-1">
              <button onClick={()=>setAnnual(false)} className={`px-5 py-2 rounded-full text-sm font-bold ${!annual?'bg-slate-900 text-white':''}`}>Monthly</button>
              <button onClick={()=>setAnnual(true)} className={`px-5 py-2 rounded-full text-sm font-bold ${annual?'bg-slate-900 text-white':''}`}>Annual (2 months free)</button>
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl border p-8">
              <h3 className="font-bold">Starter</h3>
              <div className="mt-3 text-4xl font-extrabold">${prices.starter}<span className="text-base font-normal text-slate-500">/{annual?'yr':'mo'}</span></div>
              <ul className="mt-6 space-y-2 text-sm text-slate-600">
                <li>✓ 1 location</li><li>✓ 200 requests/mo</li><li>✓ QR codes</li><li>✓ AI reply assistant</li>
              </ul>
              <a href="/api/checkout?plan=starter" className="mt-8 block text-center w-full py-3 border rounded-full font-bold">Start Trial - Lock ${prices.starter}</a>
            </div>
            <div className="bg-slate-900 text-white rounded-2xl border-2 border-green-500 p-8 relative scale-105 shadow-2xl">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-500 text-white px-4 py-1 rounded-full text-xs font-bold">MOST POPULAR</div>
              <h3 className="font-bold">Growth</h3>
              <div className="mt-3 text-4xl font-extrabold">${prices.growth}<span className="text-base font-normal text-slate-400">/{annual?'yr':'mo'}</span></div>
              <ul className="mt-6 space-y-2 text-sm text-slate-300">
                <li>✓ 3 locations</li><li>✓ 750 requests/mo</li><li>✓ Negative review shield</li><li>✓ Employee leaderboard</li><li>✓ Maps rank tracker</li><li>✓ Everything in Starter</li>
              </ul>
              <a href="/api/checkout?plan=growth" className="mt-8 block text-center w-full py-3 bg-green-500 rounded-full font-bold">Start Trial - Lock ${prices.growth}</a>
              <div className="mt-2 text-center text-xs text-slate-400">14-day free trial, cancel anytime</div>
            </div>
            <div className="bg-white rounded-2xl border p-8">
              <h3 className="font-bold">Agency White-Label</h3>
              <div className="mt-3 text-4xl font-extrabold">${prices.agency}<span className="text-base font-normal text-slate-500">/{annual?'yr':'mo'}</span></div>
              <ul className="mt-6 space-y-2 text-sm text-slate-600">
                <li>✓ Unlimited locations</li><li>✓ White-label + resell</li><li>✓ Your logo, your domain</li><li>✓ Affiliate stack included</li>
              </ul>
              <a href="/api/checkout?plan=agency" className="mt-8 block text-center w-full py-3 border rounded-full font-bold">Start Trial - Lock ${prices.agency}</a>
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-4 text-xs">
            <div className="bg-white border rounded-xl p-4"><b>SMS Affiliate:</b> Connect Texting.io - Earn 20% lifetime on SMS spend. Setup in builder.</div>
            <div className="bg-white border rounded-xl p-4"><b>CRM Affiliate:</b> 1-click GoHighLevel snapshot - 40% recurring.</div>
            <div className="bg-white border rounded-xl p-4"><b>Local SEO Affiliate:</b> BrightLocal audit - 15% lifetime.</div>
          </div>
        </div>
      </section>

      <footer className="px-6 py-10 text-center text-xs text-slate-400">© ReviewBooster • Vercel Ready • Stripe Ready • Built for local businesses in {city} and everywhere.</footer>
    </div>
    </>
  );
}
