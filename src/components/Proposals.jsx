import React from 'react';
import { FileText, CheckCircle, Clock, Send } from 'lucide-react';

const proposals = [
  { id: 'P-1024', title: 'Web App Redesign', client: 'Nebula Corp', value: '$4,800', status: 'Sent', date: 'May 10' },
  { id: 'P-1025', title: 'Mobile MVP Build', client: 'Luma Labs', value: '$9,200', status: 'Viewed', date: 'May 12' },
  { id: 'P-1026', title: 'Brand System + Guide', client: 'Aurora Studio', value: '$6,300', status: 'Accepted', date: 'May 18' },
];

const badge = status => {
  switch (status) {
    case 'Accepted':
      return 'bg-emerald-500/15 text-emerald-400 ring-1 ring-emerald-400/30';
    case 'Viewed':
      return 'bg-indigo-500/15 text-indigo-400 ring-1 ring-indigo-400/30';
    default:
      return 'bg-amber-500/15 text-amber-400 ring-1 ring-amber-400/30';
  }
};

export default function Proposals({ branding }) {
  return (
    <section id="proposals" className="py-16 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold">Proposals</h2>
          <button
            className="px-4 py-2 rounded-xl text-white font-medium shadow-lg"
            style={{ background: `linear-gradient(90deg, ${branding.gradientFrom}, ${branding.gradientTo})` }}
          >
            New Proposal
          </button>
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
          <ul className="divide-y divide-white/10">
            {proposals.map((p) => (
              <li key={p.id} className="p-5 flex items-center gap-4">
                <div className="h-11 w-11 rounded-xl grid place-items-center bg-gradient-to-br from-slate-700 to-slate-800">
                  <FileText className="h-5 w-5 text-slate-200" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="font-semibold">{p.title}</h3>
                    <span className={`px-2.5 py-1 rounded-lg text-xs font-medium ${badge(p.status)}`}>{p.status}</span>
                  </div>
                  <p className="text-sm text-slate-300/80">{p.client} • {p.date}</p>
                </div>
                <div className="hidden sm:block text-right mr-4 text-slate-200 font-medium">{p.value}</div>
                <div className="flex items-center gap-2">
                  {p.status === 'Accepted' ? (
                    <span className="inline-flex items-center gap-1 text-emerald-400 text-sm"><CheckCircle className="h-4 w-4" /> Signed</span>
                  ) : p.status === 'Viewed' ? (
                    <span className="inline-flex items-center gap-1 text-indigo-400 text-sm"><Clock className="h-4 w-4" /> Awaiting</span>
                  ) : (
                    <button className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 border border-white/10 text-white">
                      <Send className="h-4 w-4" /> Resend
                    </button>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
