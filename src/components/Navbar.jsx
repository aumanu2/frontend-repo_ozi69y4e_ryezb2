import React from 'react';
import { Home, LayoutDashboard, Settings, Star, DollarSign, LogIn, LogOut, UserPlus } from 'lucide-react';

export default function Navbar({ route, setRoute, isAuthed, onOpenAuth, onLogout }) {
  return (
    <header className="sticky top-0 z-30 backdrop-blur bg-white/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500" />
          <span className="font-semibold text-lg">VibeLink</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
          <button className={`inline-flex items-center gap-2 hover:text-slate-900 ${route==='home'?'text-slate-900':''}`} onClick={() => setRoute('home')}>
            <Home size={16}/> Home
          </button>
          <button className={`inline-flex items-center gap-2 hover:text-slate-900 ${route==='features'?'text-slate-900':''}`} onClick={() => setRoute('features')}>
            <Star size={16}/> Features
          </button>
          <button className={`inline-flex items-center gap-2 hover:text-slate-900 ${route==='pricing'?'text-slate-900':''}`} onClick={() => setRoute('pricing')}>
            <DollarSign size={16}/> Pricing
          </button>
          <button className={`inline-flex items-center gap-2 hover:text-slate-900 ${route==='dashboard'?'text-slate-900':''}`} onClick={() => setRoute('dashboard')}>
            <LayoutDashboard size={16}/> Dashboard
          </button>
          <button className={`inline-flex items-center gap-2 hover:text-slate-900 ${route==='settings'?'text-slate-900':''}`} onClick={() => setRoute('settings')}>
            <Settings size={16}/> Settings
          </button>
        </nav>
        <div className="flex items-center gap-3">
          {!isAuthed ? (
            <>
              <button className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-md border" onClick={() => onOpenAuth('login')}>
                <LogIn size={16}/> Log in
              </button>
              <button className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-slate-900 text-white" onClick={() => onOpenAuth('signup')}>
                <UserPlus size={16}/> Sign up
              </button>
            </>
          ) : (
            <button className="inline-flex items-center gap-2 px-3 py-2 rounded-md border" onClick={onLogout}>
              <LogOut size={16}/> Log out
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
