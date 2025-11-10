import React from 'react';
import ThemeCustomizer from './ThemeCustomizer';

export default function SettingsPage({ theme, setTheme }) {
  return (
    <section className="py-10">
      <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-6">
        <div className="rounded-2xl border bg-white p-6">
          <h3 className="font-semibold text-lg">Appearance</h3>
          <p className="mt-1 text-slate-600 text-sm">Fine-tune colors and backgrounds.</p>
          <div className="mt-6">
            <ThemeCustomizer theme={theme} setTheme={setTheme} />
          </div>
        </div>
        <div className="rounded-2xl border bg-white p-6">
          <h3 className="font-semibold text-lg">Account</h3>
          <div className="mt-4 grid gap-3">
            <label className="text-sm text-slate-600">Email</label>
            <input className="px-3 py-2 rounded-xl border" placeholder="you@example.com" />
            <button className="px-4 py-2 rounded-xl border justify-self-start">Update</button>
          </div>
        </div>
      </div>
    </section>
  );
}
