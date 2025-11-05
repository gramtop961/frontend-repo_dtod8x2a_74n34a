import React, { useState } from 'react';
import { MessageSquare, Upload, Paperclip, Smile, Image as ImageIcon } from 'lucide-react';

const updates = [
  { id: 1, title: 'Milestone 2 Complete', by: 'You', date: 'May 19', body: 'Implemented authentication and refined the dashboard layout. Next up: billing views.' },
  { id: 2, title: 'Weekly Status', by: 'You', date: 'May 12', body: 'Wrapped up proposal templates and added review states.' },
];

const files = [
  { id: 'f1', name: 'proposal-v2.pdf', size: '1.2 MB' },
  { id: 'f2', name: 'styleguide.sketch', size: '24.7 MB' },
  { id: 'f3', name: 'logo-pack.zip', size: '8.4 MB' },
];

const messages = [
  { id: 'm1', from: 'Client', text: 'Loving the direction so far! Can we try a darker header?', time: '09:14' },
  { id: 'm2', from: 'You', text: 'Absolutely! I will push a new variant later today.', time: '09:20' },
];

export default function ClientPortal({ branding }) {
  const [tab, setTab] = useState('Updates');
  return (
    <section id="client" className="py-16 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold">Client Portal</h2>
          <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl p-1">
            {['Updates', 'Files', 'Messages'].map(t => (
              <button
                key={t}
                className={`px-3 sm:px-4 py-2 rounded-lg text-sm transition ${tab === t ? 'bg-white/15' : 'hover:bg-white/10'}`}
                onClick={() => setTab(t)}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-5">
          {tab === 'Updates' && (
            <div className="space-y-5">
              {updates.map(u => (
                <article key={u.id} className="p-5 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">{u.title}</h3>
                    <span className="text-sm text-slate-300/80">{u.by} • {u.date}</span>
                  </div>
                  <p className="mt-2 text-slate-200/90">{u.body}</p>
                </article>
              ))}
            </div>
          )}

          {tab === 'Files' && (
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="text-slate-300/90">Shared files with the client.</p>
                <button
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-white border border-white/10 bg-white/10 hover:bg-white/15"
                  title="Static demo — no upload"
                >
                  <Upload className="h-4 w-4" /> Upload
                </button>
              </div>
              <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {files.map(f => (
                  <li key={f.id} className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Paperclip className="h-4 w-4 text-slate-300" />
                      <div>
                        <p className="font-medium">{f.name}</p>
                        <p className="text-xs text-slate-400">{f.size}</p>
                      </div>
                    </div>
                    <button className="text-sm px-3 py-1 rounded-lg bg-white/10 border border-white/10">Download</button>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {tab === 'Messages' && (
            <div>
              <div className="space-y-3 mb-4">
                {messages.map(m => (
                  <div key={m.id} className={`max-w-lg p-3 rounded-xl border ${m.from === 'You' ? 'ml-auto bg-emerald-500/10 border-emerald-400/20' : 'bg-white/5 border-white/10'}`}>
                    <p className="text-sm text-slate-200">{m.text}</p>
                    <div className="mt-1 text-xs text-slate-400">{m.from} • {m.time}</div>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2 p-2 rounded-xl bg-white/5 border border-white/10">
                <button className="p-2 rounded-lg hover:bg-white/10" title="Add emoji"><Smile className="h-5 w-5 text-slate-300" /></button>
                <button className="p-2 rounded-lg hover:bg-white/10" title="Attach image"><ImageIcon className="h-5 w-5 text-slate-300" /></button>
                <input
                  type="text"
                  placeholder="Write a message (demo)"
                  className="flex-1 bg-transparent outline-none text-sm placeholder:text-slate-400"
                />
                <button
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-white"
                  style={{ background: `linear-gradient(90deg, ${branding.gradientFrom}, ${branding.gradientTo})` }}
                >
                  <MessageSquare className="h-4 w-4" /> Send
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
