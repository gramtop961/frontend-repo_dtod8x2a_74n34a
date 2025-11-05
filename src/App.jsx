import React from 'react';
import Hero from './components/Hero.jsx';
import ProjectsDashboard from './components/ProjectsDashboard.jsx';
import Proposals from './components/Proposals.jsx';
import ClientPortal from './components/ClientPortal.jsx';
import Footer from './components/Footer.jsx';

// Easy branding customization
// Edit the values below to change colors, logo, and tagline across the site.
const branding = {
  brandName: 'Portal Play',
  tagline: 'A delightfully simple, Portal-inspired workspace to showcase projects, proposals, and client collaboration — just for fun.',
  logoUrl: '', // paste your logo URL or leave empty to show the rocket icon
  primary: '#7c3aed',
  gradientFrom: '#7c3aed', // purple-600
  gradientTo: '#06b6d4',   // cyan-500
};

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 font-inter text-slate-100">
      <Hero branding={branding} />
      <ProjectsDashboard branding={branding} />
      <Proposals branding={branding} />
      <ClientPortal branding={branding} />
      <Footer branding={branding} />
    </div>
  );
}
