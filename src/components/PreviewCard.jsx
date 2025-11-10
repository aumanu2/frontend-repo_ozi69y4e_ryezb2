import React from 'react';

export default function PreviewCard({ profile, links, theme, layout = 'list', onLinkClick }) {
  const visibleLinks = links.filter((l) => {
    if (!l.schedule) return true;
    const now = new Date();
    const { start, end } = l.schedule;
    if (start && new Date(start) > now) return false;
    if (end && new Date(end) < now) return false;
    return true;
  });

  return (
    <div
      className="rounded-2xl border border-gray-200 overflow-hidden bg-white/70 backdrop-blur"
      style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.08)' }}
    >
      <div className="p-6 text-center" style={{ background: theme.background }}>
        <img
          src={profile.avatar}
          alt="avatar"
          className="h-20 w-20 rounded-full mx-auto border-4 border-white shadow-md object-cover"
        />
        <h2 className="mt-3 text-xl font-semibold" style={{ color: theme.primary }}>
          @{profile.username}
        </h2>
        {profile.bio && <p className="mt-1 text-sm text-gray-700">{profile.bio}</p>}
      </div>
      <div className="p-6" style={{ background: 'white' }}>
        <div className={layout === 'grid' ? 'grid grid-cols-2 gap-3' : 'space-y-3'}>
          {visibleLinks.map((l) => (
            <button
              key={l.id}
              onClick={() => onLinkClick?.(l)}
              className="w-full p-3 rounded-xl border border-gray-200 hover:shadow-md transition-shadow text-left"
              style={{ background: l.bg || '#fff', color: l.color || '#111' }}
            >
              <div className="font-medium">{l.title}</div>
              {l.desc && <div className="text-xs opacity-70">{l.desc}</div>}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
