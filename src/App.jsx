import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-gray-900">
      <Navbar route="home" setRoute={() => {}} isAuthed={false} onOpenAuth={() => {}} onLogout={() => {}} />
      <main>
        <Hero onGetStarted={() => {}} />
        <Features />
        <Pricing />
      </main>
      <footer className="py-12 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} VibeLink
      </footer>
    </div>
  );
}
