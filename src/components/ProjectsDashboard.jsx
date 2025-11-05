import React, { useMemo, useState } from 'react';
import { Folder, CheckCircle, Clock, Settings } from 'lucide-react';

const sampleProjects = [
  { id: 1, name: 'SaaS Landing Revamp', client: 'Nebula Corp', status: 'In Progress', progress: 68, due: 'May 28' },
  { id: 2, name: 'iOS App UI Kit', client: 'Luma Labs', status: 'Review', progress: 90, due: 'Jun 03' },
  { id: 3, name: 'Brand Identity Pack', client: 'Aurora Studio', status: 'Completed', progress: 100, due: '—' },
  { id: 4, name: 'Marketing Site', client: 'Comet Finance', status: 'In Progress', progress: 42, due: 'Jun 15' },
];

const statusColors = {
  'In Progress': 'bg-amber-500/15 text-amber-400 ring-1 ring-amber-400/30',
  Review: 'bg-indigo-500/15 text-indigo-400 ring-1 ring-indigo-400/30',
  Completed: 'bg-emerald-500/15 text-emerald-400 ring-1 ring-emerald-400/30',
};

export default function ProjectsDashboard({ branding }) {
  const [filter, setFilter] = useState('All');
  const projects = useMemo(() => {
    if (filter === 'All') return sampleProjects;
    if (filter === 'Active') return sampleProjects.filter(p => p.status !== 'Completed');
    if (filter === 'Completed') return sampleProjects.filter(p => p.status === 'Completed');
    return sampleProjects;
  }, [filter]);

  return (
    <section id="dashboard" className="py-16 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between gap-4 mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold">Project Dashboard</h2>
          <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl p-1">
            {['All', 'Active', 'Completed'].map(tab => (
              <button
                key={tab}
                className={`px-3 sm:px-4 py-2 rounded-lg text-sm transition ${
                  filter === tab ? 'bg-white/15' : 'hover:bg-white/10'
                }`}
                onClick={() => setFilter(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(p => (
            <article key={p.id} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-5">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl grid place-items-center bg-gradient-to-br from-slate-700 to-slate-800">
                    <Folder className="h-5 w-5 text-slate-200" />
                  </div>
                  <div>
                    <h3 className="font-semibold leading-tight">{p.name}</h3>
                    <p className="text-sm text-slate-300/80">{p.client}</p>
                  </div>
                </div>
                <span className={`px-2.5 py-1 rounded-lg text-xs font-medium ${statusColors[p.status]}`}>
                  {p.status}
                </span>
              </div>

              <div className="mt-5">
                <div className="flex items-center justify-between text-xs text-slate-300/80 mb-2">
                  <span>Progress</span>
                  <span>{p.progress}%</span>
                </div>
                <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                  <div
                    className="h-2 rounded-full"
                    style={{ width: `${p.progress}%`, background: `linear-gradient(90deg, ${branding.gradientFrom}, ${branding.gradientTo})` }}
                  />
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between text-sm text-slate-300/80">
                <div className="flex items-center gap-2">
                  {p.status === 'Completed' ? (
                    <CheckCircle className="h-4 w-4 text-emerald-400" />
                  ) : (
                    <Clock className="h-4 w-4 text-amber-400" />
                  )}
                  <span>Due {p.due}</span>
                </div>
                <button className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 border border-white/10 text-white">
                  <Settings className="h-4 w-4" /> Manage
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
