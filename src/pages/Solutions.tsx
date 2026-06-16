import React from 'react';
import { motion } from 'framer-motion';
import {
  Settings,
  Users,
  Wrench,
  ShieldCheck,
  BadgeDollarSign,
  FileCheck2,
  Clock3,
  ArrowUpRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const servicePillars = [
  {
    icon: <Settings size={30} />,
    title: 'Installation & Commissioning',
    desc: 'Site readiness checks, delivery coordination, installation, calibration, and validation before go-live.',
    sla: 'Go-live planning within 5 business days'
  },
  {
    icon: <Users size={30} />,
    title: 'Clinical & Biomedical Training',
    desc: 'Role-based training for clinicians and biomedical teams with competency checklists and refresher pathways.',
    sla: 'Onsite or remote sessions available'
  },
  {
    icon: <Wrench size={30} />,
    title: 'Preventive Maintenance & Repair',
    desc: 'Planned maintenance cycles, genuine spare parts pipeline, and fast corrective support for high uptime.',
    sla: '<48h engineer dispatch target'
  },
  {
    icon: <ShieldCheck size={30} />,
    title: 'Regulatory & Quality Compliance',
    desc: 'Support for registration, import requirements, acceptance protocols, and auditable documentation packs.',
    sla: 'Documentation support from procurement to handover'
  }
];

const procurementSupport = [
  {
    icon: <BadgeDollarSign size={22} />,
    title: 'Financing Options',
    desc: 'Phased procurement plans, leasing pathways, and capex optimization strategies.'
  },
  {
    icon: <FileCheck2 size={22} />,
    title: 'Tender Support',
    desc: 'Specification alignment, compliance documentation, and response packaging support.'
  },
  {
    icon: <Clock3 size={22} />,
    title: 'Lifecycle Contracts',
    desc: 'Multi-year maintenance, calibration windows, and service-level commitments.'
  }
];

export function Solutions() {
  return (
     <div className="pt-24 pb-20 min-h-screen bg-paper-100">
       <section className="bg-brand-900 text-white py-16 mb-12 relative overflow-hidden grain">
         <div className="absolute inset-0">
           <img
             src="https://images.pexels.com/photos/12081338/pexels-photo-12081338.jpeg"
             alt="Services hero background"
             fetchpriority="high"
             decoding="async"
             className="w-full h-full object-cover opacity-30" />
           <div className="absolute top-0 right-0 w-80 h-80 bg-signal-400/15 rounded-full blur-3xl pointer-events-none" />
         </div>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
           <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto">
             <p className="font-mono text-xs tracking-[0.22em] text-signal-300 uppercase mb-4">End-To-End Healthcare Support</p>
             <h1 className="font-display text-4xl md:text-6xl font-light mb-5 leading-[1.05]">
               Services built on our commitment to availability, affordability, and client satisfaction.
             </h1>
             <p className="text-white/75 text-lg">
               Unlike traditional distributors, we ensure any medical equipment needed is available without considering margins — eliminating shortages. Our services are tailored for every client need, focused on building long-term partnerships with deeply satisfied healthcare providers.
             </p>
           </motion.div>
         </div>
       </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {servicePillars.map((solution, idx) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-paper-300"
            >
              <div className="bg-ink-50 w-16 h-16 rounded-2xl flex items-center justify-center text-ink-700 mb-6">
                {solution.icon}
              </div>
              <h3 className="font-display text-3xl font-medium text-ink-900 mb-3">{solution.title}</h3>
              <p className="text-ink-600 leading-relaxed mb-4">{solution.desc}</p>
              <p className="text-xs uppercase tracking-widest text-signal-700 font-semibold">{solution.sla}</p>
            </motion.div>
          ))}
        </section>

        <section className="bg-white rounded-3xl border border-paper-300 p-8 md:p-10">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5">
              <p className="font-mono text-xs tracking-[0.2em] text-signal-700 uppercase mb-4">Procurement Advisory</p>
              <h2 className="font-display text-4xl text-ink-900 leading-tight mb-4">From budget constraints to deployment, we help you buy smarter.</h2>
              <p className="text-ink-600 leading-relaxed">
                Every client comes with distinct needs, constraints and timelines. We don't apply one-size-fits-all packages — each engagement is tailored around your facility's specific requirements, from financing structures to delivery schedules, ensuring outcomes that are both affordable and sustainable long-term.
              </p>
            </div>
            <div className="lg:col-span-7 grid md:grid-cols-3 gap-4">
              {procurementSupport.map((item) => (
                <div key={item.title} className="rounded-2xl border border-paper-300 bg-paper-50 p-5">
                  <div className="w-11 h-11 rounded-xl bg-signal-100 text-signal-800 flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-ink-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-ink-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-brand-900 text-white rounded-3xl p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="font-mono text-xs tracking-[0.2em] text-signal-300 uppercase mb-3">Service Coverage</p>
            <h2 className="font-display text-3xl md:text-4xl font-light leading-tight">
              Need a custom service package for your facility or tender?
            </h2>
          </div>
          <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-signal-400 text-ink-950 font-semibold hover:bg-signal-300 transition-colors">
            Design My Support Plan <ArrowUpRight size={16} />
          </Link>
        </section>
      </div>
    </div>
  );
}
