import React from 'react';

const manufacturers = [
  'Comen',
  'Brownier',
  'Neurosoft',
  'Vatech',
  'Runyes',
  'Medispark',
  'Dochem',
  'GC Fuji',
];

const healthcarePartners = [
  'Partners in Health',
  'Nyamagumaba Polyclinic',
  'Megalife Excellent Dental Clinic',
  'Seka Dental Clinic',
  'Greendent Dental Clinic',
  'Kivu Hills Medical Centre',
];

export function PartnerMarquee() {
  return (
    <section className="py-12 bg-white border-y border-slate-100 space-y-6 overflow-hidden">

      {/* Row 1 — Manufacturers */}
      <div>
        <p className="text-xs font-semibold tracking-[0.2em] text-slate-500 uppercase text-center mb-4">
          Authorized distributor for world-class manufacturers
        </p>
        <p className="text-xs text-slate-400 text-center mb-5">
          Every product available — we source what healthcare providers need, not just what earns the highest margin.
        </p>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          <div className="flex animate-marquee whitespace-nowrap">
            {[...manufacturers, ...manufacturers].map((name, i) => (
              <div
                key={i}
                className="mx-10 inline-flex items-center text-xl font-display font-semibold text-slate-400 hover:text-slate-700 transition-colors tracking-wider"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-slate-100" />
      </div>

      {/* Row 2 — Healthcare partners (scrolls opposite direction) */}
      <div>
        <p className="text-xs font-semibold tracking-[0.2em] text-slate-500 uppercase text-center mb-5">
          Trusted by healthcare facilities across East Africa
        </p>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          <div className="flex animate-marquee-slow whitespace-nowrap" style={{ animationDirection: 'reverse' }}>
            {[...healthcarePartners, ...healthcarePartners].map((name, i) => (
              <div
                key={i}
                className="mx-10 inline-flex items-center gap-2 text-sm font-display font-medium text-slate-500 hover:text-slate-800 transition-colors tracking-wide"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-signal-400 shrink-0" />
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
