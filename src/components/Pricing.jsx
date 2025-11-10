import React from 'react';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Free',
    price: '$0',
    cta: 'Get started',
    features: ['Basic themes', 'Up to 5 links', 'Community support']
  },
  {
    name: 'Pro',
    price: '$9/mo',
    highlight: true,
    cta: 'Start Pro',
    features: ['All themes + custom', 'Unlimited links', 'Scheduling', 'Analytics']
  },
  {
    name: 'Business',
    price: '$29/mo',
    cta: 'Start Business',
    features: ['Team workspaces', 'Advanced analytics', 'Priority support']
  }
];

export default function Pricing() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Simple pricing</h2>
        <p className="mt-3 text-slate-600 max-w-2xl">Start free and upgrade when you need more power.</p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {tiers.map((t) => (
            <div key={t.name} className={`rounded-2xl border p-6 bg-white relative ${t.highlight ? 'ring-2 ring-slate-900' : ''}`}>
              {t.highlight && <span className="absolute -top-3 left-6 px-2 py-1 text-xs rounded-full bg-slate-900 text-white">Popular</span>}
              <h3 className="font-semibold text-lg">{t.name}</h3>
              <div className="mt-2 text-3xl font-bold">{t.price}</div>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2"><Check size={16} className="text-green-600"/> {f}</li>
                ))}
              </ul>
              <button className={`mt-6 w-full px-4 py-2 rounded-xl ${t.highlight ? 'bg-slate-900 text-white' : 'border'}`}>{t.cta}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
