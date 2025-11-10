import React, { useMemo, useState } from 'react';
import Header from './components/Header';
import PreviewCard from './components/PreviewCard';
import ThemeCustomizer from './components/ThemeCustomizer';
import LinkItem from './components/LinkItem';

const initialProfile = {
  username: 'johndoe',
  avatar:
    'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=512&auto=format&fit=crop',
  bio: 'Maker • Designer • Occasional coffee snob',
  socials: {
    twitter: 'https://twitter.com',
    instagram: 'https://instagram.com',
    github: 'https://github.com',
  },
};

const initialLinks = [
  {
    id: '1',
    title: 'Personal website',
    url: 'https://example.com',
    desc: 'Portfolio, blog and projects',
    bg: '#ffffff',
    color: '#111111',
    schedule: null,
  },
  {
    id: '2',
    title: 'Latest product launch',
    url: 'https://example.com/launch',
    desc: 'Check out what I just shipped',
    bg: 'linear-gradient(135deg,#eef2ff,#e0e7ff)',
    color: '#111111',
    schedule: { start: new Date(Date.now() - 86400000).toISOString(), end: null },
  },
  {
    id: '3',
    title: 'Newsletter',
    url: 'https://example.com/newsletter',
    desc: 'Get monthly updates',
    bg: '#fff7ed',
    color: '#7c2d12',
    schedule: { start: null, end: null },
  },
];

export default function App() {
  const [profile, setProfile] = useState(initialProfile);
  const [links, setLinks] = useState(initialLinks);
  const [theme, setTheme] = useState({
    primary: '#4f46e5',
    background: 'linear-gradient(135deg,#f8fafc,#eef2ff)'
  });
  const [layout, setLayout] = useState('list');
  const [activeTab, setActiveTab] = useState('builder');
  const [showSettings, setShowSettings] = useState(false);

  const handleAddLink = () => {
    const id = Math.random().toString(36).slice(2, 9);
    setLinks((prev) => [
      ...prev,
      { id, title: 'New link', url: '#', desc: '', bg: '#ffffff', color: '#111111', schedule: null },
    ]);
  };

  const handleReorder = (from, to) => {
    setLinks((prev) => {
      const arr = [...prev];
      const [moved] = arr.splice(from, 1);
      arr.splice(to, 0, moved);
      return arr;
    });
  };

  const handleLinkClick = (link) => {
    // Simulate analytics tracking
    console.log('Clicked link:', link.title);
    window.open(link.url, '_blank', 'noopener,noreferrer');
  };

  const visibleLinks = useMemo(() => links, [links]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900">
      <Header
        onToggleSettings={() => setShowSettings((s) => !s)}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      <main className="max-w-6xl mx-auto px-4 py-8 flex gap-6">
        <section className="flex-1 space-y-6">
          {activeTab === 'builder' && (
            <>
              <div className="rounded-2xl border border-gray-200 bg-white p-4">
                <div className="flex items-center gap-4">
                  <img
                    src={profile.avatar}
                    alt="avatar"
                    className="h-16 w-16 rounded-full object-cover border"
                  />
                  <div className="flex-1 grid gap-2">
                    <input
                      className="w-full px-3 py-2 rounded-md border"
                      value={profile.username}
                      onChange={(e) => setProfile({ ...profile, username: e.target.value })}
                    />
                    <input
                      className="w-full px-3 py-2 rounded-md border"
                      value={profile.bio}
                      onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                    />
                  </div>
                  <div className="grid gap-2">
                    <button
                      className="px-3 py-2 rounded-md bg-gray-900 text-white"
                      onClick={() => setLayout((l) => (l === 'list' ? 'grid' : 'list'))}
                    >
                      Toggle Layout
                    </button>
                    <button
                      className="px-3 py-2 rounded-md border"
                      onClick={handleAddLink}
                    >
                      Add Link
                    </button>
                  </div>
                </div>
              </div>

              <div className="grid gap-3">
                {visibleLinks.map((link, idx) => (
                  <div key={link.id} className="flex items-center gap-2">
                    <div className="w-8 text-center text-sm text-gray-500">{idx + 1}</div>
                    <div className="flex-1">
                      <LinkItem link={link} onClick={handleLinkClick} />
                    </div>
                    <div className="flex items-center gap-1">
                      <button
                        className="px-2 py-1 rounded border text-sm"
                        onClick={() => idx > 0 && handleReorder(idx, idx - 1)}
                      >
                        Up
                      </button>
                      <button
                        className="px-2 py-1 rounded border text-sm"
                        onClick={() => idx < links.length - 1 && handleReorder(idx, idx + 1)}
                      >
                        Down
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {activeTab === 'preview' && (
            <div className="grid place-items-center">
              <div className="w-full max-w-md">
                <PreviewCard
                  profile={profile}
                  links={links}
                  theme={theme}
                  layout={layout}
                  onLinkClick={handleLinkClick}
                />
              </div>
            </div>
          )}
        </section>

        {showSettings && (
          <ThemeCustomizer theme={theme} setTheme={setTheme} />
        )}
      </main>

      <footer className="py-10 text-center text-sm text-gray-500">
        Built as a modern Link-in-bio demo with themes, scheduling, and preview.
      </footer>
    </div>
  );
}
