import React from 'react';

export default function ThemeCustomizer({ theme, setTheme }) {
  const presets = [
    { name: 'Indigo', primary: '#4f46e5', bg: 'linear-gradient(135deg,#eef2ff,#e0e7ff)' },
    { name: 'Sunset', primary: '#f59e0b', bg: 'linear-gradient(135deg,#fff7ed,#ffedd5)' },
    { name: 'Aurora', primary: '#10b981', bg: 'linear-gradient(135deg,#ecfdf5,#d1fae5)' },
    { name: 'Rose', primary: '#e11d48', bg: 'linear-gradient(135deg,#fff1f2,#ffe4e6)' },
  ];

  return (
    <aside className="w-full md:w-80 shrink-0 border-l border-gray-200 bg-white/80 backdrop-blur p-4 space-y-4">
      <div>
        <h3 className="font-semibold mb-2">Theme</h3>
        <div className="grid grid-cols-2 gap-2">
          {presets.map((p) => (
            <button
              key={p.name}
              onClick={() => setTheme({ ...theme, primary: p.primary, background: p.bg })}
              className="p-3 rounded-lg border border-gray-200 hover:shadow"
              style={{ background: p.bg }}
            >
              <div className="text-sm font-medium" style={{ color: p.primary }}>
                {p.name}
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Primary color</label>
        <input
          type="color"
          value={theme.primary}
          onChange={(e) => setTheme({ ...theme, primary: e.target.value })}
          className="w-full h-10 rounded border border-gray-200"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Background</label>
        <input
          type="text"
          value={theme.background}
          onChange={(e) => setTheme({ ...theme, background: e.target.value })}
          className="w-full h-10 rounded border border-gray-200 px-3"
          placeholder="CSS color or gradient"
        />
      </div>
    </aside>
  );
}
