import React from 'react';
import { Palette, Clock, BarChart3, UploadCloud, ShieldCheck, LayoutGrid } from 'lucide-react';

const features = [
  {
    icon: Palette,
    title: 'Advanced Themes',
    desc: 'Presets and custom controls for colors, gradients, and layouts.'
  },
  {
    icon: Clock,
    title: 'Scheduling',
    desc: 'Set start/end dates for links to go live automatically.'
  },
  {
    icon: BarChart3,
    title: 'Analytics',
    desc: 'Track clicks and performance with simple insights.'
  },
  {
    icon: UploadCloud,
    title: 'Image Uploads',
    desc: 'Cloud-based avatar and cover image hosting.'
  },
  {
    icon: ShieldCheck,
    title: 'Secure Auth',
    desc: 'JWT-based login with email verification flow.'
  },
  {
    icon: LayoutGrid,
    title: 'Drag & Drop',
    desc: 'Quickly reorder, group, and organize your links.'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Features that help you grow</h2>
        <p className="mt-3 text-slate-600 max-w-2xl">Everything you need to run a modern link hub with beautiful design and measurable impact.</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border bg-white p-6 shadow-sm">
              <div className="h-11 w-11 grid place-items-center rounded-lg bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-white">
                <f.icon size={18} />
              </div>
              <h3 className="mt-4 font-semibold text-lg">{f.title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
