import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

const teamMembers = [
  {
    name: 'Alex Muema Musyoka',
    role: 'Chief Executive Officer',
    image: '/Alex.webp'
  },
  {
    name: 'Mpabwanimana Peninah',
    role: 'Sales Representative',
    image: '/peninah.webp'
  },
  {
    name: 'Irabona Frederic',
    role: 'Biomedical Engineer',
    image: '/irabona.webp'
  },
  {
    name: 'Ishimwe Régine',
    role: 'Sales Director',
    image: '/ishimwe.webp'
  }
];

export function Team() {
  return (
    <div className="bg-white">
      {/* ============== HERO ============== */}
      <section className="relative pt-40 pb-20 lg:pb-28 bg-brand-900 overflow-hidden grain">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-signal-500/15 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96" style={{ backgroundColor: '#613298', opacity: 0.12, borderRadius: '9999px', filter: 'blur(100px)' }} />
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-px" style={{ backgroundColor: '#613298' }} />
              <span className="text-xs font-semibold tracking-[0.25em] text-signal-300 uppercase">Our Team</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-white leading-[1.1] mb-6">
              People driving dependable{' '}
              <span className="text-signal-300">medical solutions.</span>
            </h1>
            <p className="text-lg lg:text-xl text-white/70 leading-relaxed max-w-2xl">
              Our team combines leadership, clinical understanding, commercial expertise, and long-term support to help every client access the equipment they need.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ============== TEAM GRID ============== */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="group bg-paper-100 rounded-3xl overflow-hidden border border-ink-100 shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl font-medium text-ink-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-signal-600">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============== CTA ============== */}
      <section className="py-20 lg:py-28 bg-brand-900 relative overflow-hidden grain">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-signal-500/15 rounded-full blur-[120px]" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6 leading-[1.1]">
              Want to work with a team that{' '}
              <span className="text-signal-300">shows up for the long term?</span>
            </h2>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 bg-signal-400 hover:bg-signal-300 text-ink-950 pl-7 pr-3 py-2 rounded-full font-semibold transition-all"
              >
                Get in touch
                <span className="bg-brand-950 text-signal-400 w-9 h-9 rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
                  <ArrowUpRight size={16} />
                </span>
              </Link>
              <Link
                to="/cooperation"
                className="group inline-flex items-center gap-2 text-white/80 hover:text-white px-2 py-3 font-medium transition-colors link-underline"
              >
                Partner with us
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
