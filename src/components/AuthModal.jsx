import React, { useState } from 'react';

export default function AuthModal({ open, mode = 'login', onClose, onSubmit }) {
  const [active, setActive] = useState(mode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (!open) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit?.({ mode: active, email, password });
  };

  return (
    <div className="fixed inset-0 z-50 grid place-items-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">{active === 'login' ? 'Log in' : 'Create account'}</h3>
          <button className="text-slate-500" onClick={onClose}>✕</button>
        </div>
        <div className="mt-4 flex gap-2">
          <button className={`flex-1 px-3 py-2 rounded-xl border ${active==='login'?'bg-slate-900 text-white':''}`} onClick={() => setActive('login')}>Log in</button>
          <button className={`flex-1 px-3 py-2 rounded-xl border ${active==='signup'?'bg-slate-900 text-white':''}`} onClick={() => setActive('signup')}>Sign up</button>
        </div>
        <form className="mt-4 grid gap-3" onSubmit={handleSubmit}>
          <input type="email" required value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" className="w-full px-3 py-2 rounded-xl border"/>
          <input type="password" required value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" className="w-full px-3 py-2 rounded-xl border"/>
          <button className="mt-2 w-full px-4 py-2 rounded-xl bg-slate-900 text-white">{active==='login'?'Continue':'Create account'}</button>
        </form>
      </div>
    </div>
  );
}
