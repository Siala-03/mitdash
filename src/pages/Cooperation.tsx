import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Handshake,
  Globe2,
  TrendingUp,
  ShieldCheck,
  Sparkles,
  Building2,
  ArrowRight,
  CheckCircle2,
  MapPin } from
'lucide-react';
const manufacturers = [
{
  name: 'Comen',
  country: 'China',
  logo: '/comenlogo.png'
},
{
  name: 'Brownier',
  country: 'China',
  logo: '/browinerlogo.png'
},
{
  name: 'Neurosoft',
  country: 'Russia',
  logo: '/Neurosoftlogo.png'
},
{
  name: 'Vatech',
  country: 'South Korea',
  logo: '/vatechlogo.jpeg'
},
{
  name: 'Runyes',
  country: 'China',
  logo: '/Runyes-logo-1.png'
},
{
  name: 'Medispark',
  country: 'India',
  logo: '/medisparklogo.jpeg'
},
{
  name: 'Dochem',
  country: 'India',
  logo: '/dochemlogo.jpg'
},
{
  name: 'GC Fuji',
  country: 'Japan',
  logo: '/GC_Logo.avif'
}];

const regions = [
{
  country: 'Rwanda',
  city: 'Kigali (HQ)',
  coverage: 'National coverage · 30 districts',
  status: 'Active'
},
{
  country: 'Burundi',
  city: 'Bujumbura · Gitega',
  coverage: 'Major referral hospitals',
  status: 'Active'
},
{
  country: 'DRC',
  city: 'Goma · Bukavu · Kinshasa',
  coverage: 'Expanding network',
  status: 'Growing'
}];

const benefits = [
{
  icon: <Handshake size={24} />,
  title: 'Availability-First Approach',
  desc: 'We prioritize making equipment accessible over profit margins, ensuring that frequently demanded products are always available to healthcare providers.'
},
{
  icon: <TrendingUp size={24} />,
  title: 'Market Intelligence',
  desc: 'Deep, on-the-ground insight into East African healthcare procurement, tenders and clinical priorities.'
},
{
  icon: <ShieldCheck size={24} />,
  title: 'Regulatory Expertise',
  desc: 'Full handling of in-country registration, customs, and Ministry of Health compliance.'
},
{
  icon: <Globe2 size={24} />,
  title: 'Regional Logistics',
  desc: 'Bonded warehousing in Kigali and last-mile delivery across the East African Community.'
},
{
  icon: <Building2 size={24} />,
  title: 'Clinical Network',
  desc: 'Direct relationships with public hospitals, private groups and faith-based health networks.'
},
{
  icon: <Sparkles size={24} />,
  title: 'Client Satisfaction Focus',
  desc: 'Our goal is not volume but deeply satisfied clients — we aim for 100 highly satisfied partners rather than 1000 transactional relationships.'
}];

export function Cooperation() {
  return (
    <div className="bg-white">
      {/* ============== HERO ============== */}
      <section className="relative pt-40 pb-24 bg-brand-900 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/12351696/pexels-photo-12351696.jpeg"
            alt="Cooperation hero background"
            fetchpriority="high"
            decoding="async"
            className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-900 via-brand-950/80 to-brand-900" />
          <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-brand-500/20 rounded-full blur-[120px]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20
                }}
                animate={{
                  opacity: 1,
                  y: 0
                }}
                transition={{
                  duration: 0.7
                }}>
                
                <div className="inline-flex items-center gap-2 mb-6">
                  <div className="w-12 h-px bg-brand-400" />
                  <span className="text-xs font-semibold tracking-[0.2em] text-brand-300 uppercase">
                    Cooperation
                  </span>
                </div>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-medium text-white leading-[1.05] mb-6">
                Your gateway to{' '}
                <span className="text-brand-300">world-class medical equipment</span>{' '}
                from globally renowned manufacturers.
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mb-10">
                MIT-DASH partners with leading manufacturers like Comen, Brownier, Neurosoft, Vatech, Runyes, Medispark, Dochem, and GC Fuji to bring world-class medical equipment to Rwanda, Burundi and the DRC — backed by local execution and our commitment to availability over margins.
              </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/contact"
                    className="group bg-white text-slate-900 hover:bg-brand-50 px-7 py-4 rounded-full font-semibold transition-all flex items-center gap-2 shadow-2xl">
                    
                    Start a conversation
                    <ArrowRight
                      size={18}
                      className="transition-transform group-hover:translate-x-1" />
                    
                  </Link>
                  <a
                    href="#manufacturers"
                    className="border border-white/30 text-white hover:bg-white/10 px-7 py-4 rounded-full font-medium transition-all backdrop-blur-sm">
                    
                    Our partners
                  </a>
                </div>
              </motion.div>
            </div>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.95
              }}
              animate={{
                opacity: 1,
                scale: 1
              }}
              transition={{
                duration: 0.8,
                delay: 0.2
              }}
              className="lg:col-span-5 hidden lg:block">
              
              <div className="grid grid-cols-2 gap-4">
                {['MapPin', 'Globe', 'Trend', 'Hand'].map((_, i) =>
                <div
                  key={i}
                  className={`aspect-square rounded-3xl overflow-hidden ${i % 2 === 0 ? 'translate-y-6' : ''}`}>
                  
                    <img
                    src={
                    [
                    'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=600&q=80',
                    'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80',
                    'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=600&q=80',
                    'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=600&q=80'][
                    i]
                    }
                    alt=""
                    className="w-full h-full object-cover" />
                  
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============== REGIONAL REACH ============== */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-12 h-px bg-brand-600" />
              <span className="text-xs font-semibold tracking-[0.2em] text-brand-700 uppercase">Regional Reach</span>
              <div className="w-12 h-px bg-brand-600" />
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-medium text-slate-900 leading-tight">
              Three countries. One trusted partner.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {regions.map((region, i) =>
            <motion.div
              key={region.country}
              initial={{
                opacity: 0,
                y: 30
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                delay: i * 0.1,
                duration: 0.6
              }}
              className="group relative bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-3xl p-8 hover:shadow-xl hover:border-brand-200 transition-all duration-500">
              
                <div className="flex items-start justify-between mb-6">
                  <div className="bg-brand-900 text-white p-3 rounded-2xl group-hover:bg-brand-700 transition-colors">
                    <MapPin size={22} />
                  </div>
                  <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full ${region.status === 'Active' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
                  
                    {region.status}
                  </span>
                </div>
                <h3 className="font-display text-3xl font-semibold text-slate-900 mb-2">
                  {region.country}
                </h3>
                <div className="text-brand-700 font-medium text-sm mb-3">
                  {region.city}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {region.coverage}
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* ============== MANUFACTURERS ============== */}
      <section id="manufacturers" className="py-24 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="w-12 h-px bg-brand-600" />
                <span className="text-xs font-semibold tracking-[0.2em] text-brand-700 uppercase">
                  Manufacturer Partners
                </span>
              </div>
              <h2 className="font-display text-4xl lg:text-5xl font-medium text-slate-900 leading-tight">
                The world's best, locally available.
              </h2>
            </div>
            <p className="text-slate-600 max-w-md">
              We're proud authorized distributors for industry-leading medical
              technology brands. Each partnership is built on shared commitment
              to quality, training and long-term service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {manufacturers.map((m, i) =>
            <motion.div
              key={m.name}
              initial={{
                opacity: 0,
                y: 20
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                delay: i * 0.04,
                duration: 0.5
              }}
              className="group bg-white rounded-2xl p-6 border border-slate-100 hover:border-brand-300 hover:shadow-lg transition-all duration-300">

                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center overflow-hidden shrink-0">
                      <img
                        src={m.logo}
                        alt={`${m.name} logo`}
                        loading="lazy"
                        className="w-full h-full object-contain p-1.5" />
                    </div>
                    <div className="font-display text-xl font-semibold text-slate-900 group-hover:text-brand-700 transition-colors">
                      {m.name}
                    </div>
                  </div>
                  <CheckCircle2
                  size={18}
                  className="text-brand-600 shrink-0 mt-1" />

                </div>
                <div className="text-xs text-slate-400 uppercase tracking-wider">
                  {m.country}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* ============== PARTNER BENEFITS ============== */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-12 h-px bg-brand-600" />
              <span className="text-xs font-semibold tracking-[0.2em] text-brand-700 uppercase">
                Why Partner with Us
              </span>
              <div className="w-12 h-px bg-brand-600" />
            </div>
           <h2 className="font-display text-4xl lg:text-5xl font-medium text-slate-900 leading-tight">
               Built for manufacturers who want their equipment accessible — not just profitable.
           </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) =>
            <motion.div
              key={b.title}
              initial={{
                opacity: 0,
                y: 30
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                delay: i * 0.08,
                duration: 0.6
              }}
              className="group relative p-8 rounded-3xl bg-slate-50 hover:bg-brand-900 transition-all duration-500 cursor-default">
              
                <div className="bg-white text-brand-700 group-hover:bg-brand-500 group-hover:text-white w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500">
                  {b.icon}
                </div>
                <h3 className="font-display text-xl font-semibold text-slate-900 group-hover:text-white mb-3 transition-colors">
                  {b.title}
                </h3>
                <p className="text-slate-600 group-hover:text-brand-100 text-sm leading-relaxed transition-colors">
                  {b.desc}
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* ============== PROCESS ============== */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-12 h-px bg-brand-600" />
              <span className="text-xs font-semibold tracking-[0.2em] text-brand-700 uppercase">
                Partnership Journey
              </span>
              <div className="w-12 h-px bg-brand-600" />
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-medium text-slate-900 leading-tight">
              From first conversation to long-term success.
            </h2>
          </div>

          <div className="space-y-px bg-slate-200 rounded-2xl overflow-hidden">
            {[
            {
              title: 'Discovery Call',
              desc: 'We learn about your product portfolio, target markets and commercial expectations.'
            },
            {
              title: 'Market Assessment',
              desc: 'We deliver a market analysis with sizing, key accounts and competitive landscape.'
            },
            {
              title: 'Distribution Agreement',
              desc: 'We sign clear terms covering territory, targets, training and after-sales obligations.'
            },
            {
              title: 'Launch & Scale',
              desc: 'Co-funded launch campaigns, clinical demonstrations and KOL engagement programs.'
            },
            {
              title: 'Ongoing Partnership',
              desc: 'Quarterly business reviews, expansion planning and joint product development.'
            }
            ].map((p, i) =>
            <motion.div
              key={p.title}
              initial={{
                opacity: 0,
                x: -20
              }}
              whileInView={{
                opacity: 1,
                x: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                delay: i * 0.08
              }}
              className="group bg-white hover:bg-brand-50 p-8 flex flex-col md:flex-row gap-6 transition-colors duration-300">
              
                <div className="font-display text-5xl font-medium text-brand-200 group-hover:text-brand-600 w-20 shrink-0 transition-colors">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-2xl font-semibold text-slate-900 mb-2">
                    {p.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* ============== CTA ============== */}
      <section className="py-24 bg-brand-950 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-400/10 rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="font-display text-4xl lg:text-6xl font-medium text-white mb-6 leading-tight">
            Ready to expand into East Africa?
          </h2>
          <p className="text-brand-100/80 text-lg lg:text-xl mb-10 max-w-2xl mx-auto">
            Let's discuss how MIT-DASH can become your trusted distribution
            partner across Rwanda, Burundi and the DRC.
          </p>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 bg-white text-brand-950 hover:bg-brand-50 px-8 py-4 rounded-full font-semibold transition-all shadow-2xl">
            
            Schedule a partnership call
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1" />
            
          </Link>
        </div>
      </section>
    </div>);

}