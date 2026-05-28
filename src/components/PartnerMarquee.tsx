import React from 'react';
const partners = [
  'Comen',
  'Brownier',
  'Neurosoft',
  'Vatech',
  'Runyes',
  'Medispark',
  'Dochem',
  'GC Fuji'
];

export function PartnerMarquee() {
  return (
    <section className="py-16 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <p className="text-xs font-semibold tracking-[0.2em] text-slate-500 uppercase">
          Authorized distributor for world-class manufacturers
        </p>
        <p className="text-xs text-slate-400 mt-2">
          Every product available — we source what healthcare providers need, not just what earns the highest margin.
        </p>
      </div>
      <div className="relative overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        <div className="flex animate-marquee whitespace-nowrap">
          {[...partners, ...partners].map((name, i) =>
          <div
            key={i}
            className="mx-12 inline-flex items-center text-2xl font-display font-semibold text-slate-400 hover:text-slate-700 transition-colors tracking-wider">
            
            {name}
          </div>
          )}
        </div>
      </div>
    </section>);
}