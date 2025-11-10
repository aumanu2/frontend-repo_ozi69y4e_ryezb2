import React from 'react';
import { Rocket, Settings, User } from 'lucide-react';

export default function Header({ onToggleSettings, activeTab, onTabChange }) {
  return (
    <header className="sticky top-0 z-20 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 grid place-items-center text-white">
            <Rocket size={18} />
          </div>
          <span className="font-semibold tracking-tight">LinkHub Pro</span>
        </div>

        <nav className="flex items-center gap-2 text-sm">
          <button
            className={`px-3 py-1.5 rounded-md transition-colors ${
              activeTab === 'builder' ? 'bg-gray-900 text-white' : 'hover:bg-gray-100'
            }`}
            onClick={() => onTabChange('builder')}
          >
            <User className="inline mr-1" size={16} /> Builder
          </button>
          <button
            className={`px-3 py-1.5 rounded-md transition-colors ${
              activeTab === 'preview' ? 'bg-gray-900 text-white' : 'hover:bg-gray-100'
            }`}
            onClick={() => onTabChange('preview')}
          >
            Preview
          </button>
          <button
            className="ml-1 px-3 py-1.5 rounded-md hover:bg-gray-100"
            onClick={onToggleSettings}
            aria-label="Open settings"
          >
            <Settings size={18} />
          </button>
        </nav>
      </div>
    </header>
  );
}
