import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Star } from 'lucide-react';

export default function Hero({ branding }) {
  const { brandName, tagline, logoUrl, primary, gradientFrom, gradientTo } = branding;
  return (
    <section className="relative w-full h-[72vh] overflow-hidden bg-slate-950">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/20 via-black/40 to-slate-950/90" />

      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex items-center">
        <div className="text-white max-w-2xl">
          <div className="flex items-center gap-3 mb-4">
            {logoUrl ? (
              <img src={logoUrl} alt="logo" className="h-10 w-10 rounded-lg shadow-md" />
            ) : (
              <div className="h-10 w-10 rounded-lg grid place-items-center shadow-md" style={{ background: primary }}>
                <Rocket className="h-6 w-6 text-white" />
              </div>
            )}
            <span className="text-xl font-semibold tracking-tight">{brandName}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            A playful client portal for modern freelancers
          </h1>
          <p className="mt-4 text-lg text-slate-200/90">
            {tagline}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#dashboard"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-medium shadow-lg"
              style={{ background: `linear-gradient(90deg, ${gradientFrom}, ${gradientTo})` }}
            >
              <Rocket className="h-5 w-5" /> Explore Dashboard
            </a>
            <a
              href="#proposals"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 backdrop-blur text-white border border-white/10"
            >
              <Star className="h-5 w-5" /> View Proposals
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
