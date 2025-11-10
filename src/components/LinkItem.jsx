import React from 'react';

export default function LinkItem({ link, onClick }) {
  const isScheduled = () => {
    if (!link.schedule) return true;
    const now = new Date();
    const { start, end } = link.schedule;
    if (start && new Date(start) > now) return false;
    if (end && new Date(end) < now) return false;
    return true;
  };

  if (!isScheduled()) return null;

  return (
    <button
      onClick={() => onClick?.(link)}
      className="group w-full text-left p-4 rounded-xl border border-gray-200 bg-white hover:shadow-lg transition-shadow flex items-center gap-3"
      style={{
        background: link.bg || undefined,
        color: link.color || undefined,
      }}
    >
      {link.icon && (
        <span className="text-xl" aria-hidden>
          {link.icon}
        </span>
      )}
      <div className="flex-1">
        <div className="font-medium leading-tight">{link.title}</div>
        {link.desc && (
          <div className="text-sm opacity-75">{link.desc}</div>
        )}
      </div>
      <span className="opacity-0 group-hover:opacity-100 transition-opacity text-sm">Open →</span>
    </button>
  );
}
