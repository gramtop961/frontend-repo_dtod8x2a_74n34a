import React from 'react';

export default function Footer({ branding }) {
  const { brandName, gradientFrom, gradientTo } = branding;
  return (
    <footer className="bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-slate-300/90">© {new Date().getFullYear()} {brandName}. All rights reserved.</div>
          <div className="h-2 w-40 rounded-full" style={{ background: `linear-gradient(90deg, ${gradientFrom}, ${gradientTo})` }} />
        </div>
      </div>
    </footer>
  );
}
