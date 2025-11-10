import React from 'react';
import PreviewCard from './PreviewCard';

export default function Dashboard({ profile, links, theme, layout, onLinkClick, onEditProfile }) {
  return (
    <section className="py-10">
      <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-6">
        <div className="rounded-2xl border bg-white p-6">
          <h3 className="font-semibold text-lg">Overview</h3>
          <p className="mt-1 text-slate-600 text-sm">Quick snapshot of your public page.</p>
          <div className="mt-6 max-w-md">
            <PreviewCard profile={profile} links={links} theme={theme} layout={layout} onLinkClick={onLinkClick} />
          </div>
        </div>
        <div className="rounded-2xl border bg-white p-6">
          <h3 className="font-semibold text-lg">Quick Actions</h3>
          <div className="mt-4 grid gap-3">
            <button className="px-4 py-2 rounded-xl bg-slate-900 text-white w-full" onClick={onEditProfile}>Edit profile</button>
            <button className="px-4 py-2 rounded-xl border w-full">Copy public URL</button>
            <button className="px-4 py-2 rounded-xl border w-full">Share</button>
          </div>
        </div>
      </div>
    </section>
  );
}
