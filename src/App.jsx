import React, { useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import PreviewCard from './components/PreviewCard';
import LinkItem from './components/LinkItem';
import AuthModal from './components/AuthModal';
import Dashboard from './components/Dashboard';
import SettingsPage from './components/SettingsPage';

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
  const [route, setRoute] = useState('home'); // home | features | pricing | dashboard | settings | preview
  const [authOpen, setAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState('login');
  const [isAuthed, setIsAuthed] = useState(false);

  const openAuth = (mode) => { setAuthMode(mode); setAuthOpen(true); };
  const handleAuthSubmit = ({ mode }) => {
    // Temporary stub: mark authed
    setIsAuthed(true);
    setAuthOpen(false);
    setRoute('dashboard');
  };
  const handleLogout = () => {
    setIsAuthed(false);
    setRoute('home');
  };

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
    console.log('Clicked link:', link.title);
    window.open(link.url, '_blank', 'noopener,noreferrer');
  };

  const visibleLinks = useMemo(() => links, [links]);

  const Builder = () => (
    <section className="py-10">
      <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-6">
        <div className="rounded-2xl border bg-white p-6">
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
              <button className="px-3 py-2 rounded-md border" onClick={handleAddLink}>
                Add Link
              </button>
            </div>
          </div>
          <div className="mt-6 grid gap-3">
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
        </div>
        <div className="rounded-2xl border bg-white p-6">
          <h3 className="font-semibold">Live preview</h3>
          <div className="mt-4 max-w-md">
            <PreviewCard profile={profile} links={links} theme={theme} layout={layout} onLinkClick={handleLinkClick} />
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-gray-900">
      <Navbar route={route} setRoute={setRoute} isAuthed={isAuthed} onOpenAuth={openAuth} onLogout={handleLogout} />

      {route === 'home' && (
        <>
          <Hero onGetStarted={() => openAuth('signup')} />
          <Features />
          <section className="py-16">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-2xl font-semibold">Try it instantly</h2>
              <p className="text-slate-600 mt-2">Build your page below. No account required.</p>
            </div>
            <Builder />
          </section>
          <Pricing />
          <footer className="py-12 text-center text-sm text-slate-500">© {new Date().getFullYear()} VibeLink</footer>
        </>
      )}

      {route === 'features' && (
        <>
          <Hero onGetStarted={() => openAuth('signup')} />
          <Features />
        </>
      )}

      {route === 'pricing' && (
        <>
          <Pricing />
        </>
      )}

      {route === 'dashboard' && (
        <Dashboard profile={profile} links={links} theme={theme} layout={layout} onLinkClick={handleLinkClick} onEditProfile={() => setRoute('home')} />
      )}

      {route === 'settings' && (
        <SettingsPage theme={theme} setTheme={setTheme} />
      )}

      <AuthModal open={authOpen} mode={authMode} onClose={() => setAuthOpen(false)} onSubmit={handleAuthSubmit} />
    </div>
  );
}
