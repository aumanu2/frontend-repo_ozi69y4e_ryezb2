import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, ArrowRight } from 'lucide-react';

export default function Hero({ onGetStarted }) {
  return (
    <section className="relative h-[540px] w-full overflow-hidden rounded-b-[32px] bg-gradient-to-br from-indigo-50 via-white to-fuchsia-50">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/hm6xw3y7J0RtwR9M/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-white/20 to-transparent pointer-events-none" />
      <div className="relative max-w-6xl mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-full border bg-white/70 backdrop-blur text-xs text-slate-600">
            <Rocket size={14}/> Next‑gen Link in Bio
          </div>
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900">
            Turn one link into a beautiful, branded hub.
          </h1>
          <p className="mt-4 text-slate-600 text-lg">
            Build a stunning bio page, schedule links, track clicks, and customize your theme — all in minutes.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button onClick={onGetStarted} className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 text-white">
              Get Started <ArrowRight size={18}/>
            </button>
            <a href="#features" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border bg-white/80 backdrop-blur">
              Explore Features
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
