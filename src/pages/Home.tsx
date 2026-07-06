import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  ShieldCheck,
  Stethoscope,
  Microscope,
  HeartPulse,
  Activity,
  Sparkles,
  Quote,
  Plus,
  ArrowRight } from
'lucide-react';
import { PartnerMarquee } from '../components/PartnerMarquee';
// Word-by-word reveal
function RevealText({
  text,
  className = '',
  delay = 0




}: {text: string;className?: string;delay?: number;}) {
  const words = text.split(' ');
  return (
    <span className={className}>
      {words.map((word, i) =>
      <span
        key={i}
        className="inline-block overflow-visible align-top mr-[0.25em]">
        
          <motion.span
          initial={{
            y: '110%'
          }}
          animate={{
            y: 0
          }}
          transition={{
            duration: 0.9,
            delay: delay + i * 0.08,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="inline-block"
          dangerouslySetInnerHTML={{
            __html: word
          }} />
        
        </span>
      )}
    </span>);

}

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

export function Home() {
  return (
    <div className="flex flex-col bg-paper-100">
      {/* ========================= HERO ========================= */}
      <section
        className="relative min-h-screen flex items-end pb-20 lg:pb-32 pt-32 md:pt-40 overflow-hidden bg-brand-900 grain">
        
        {/* Static background */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/36101262/pexels-photo-36101262.jpeg"
            alt="MITDASH hero background"
            fetchpriority="high"
            decoding="async"
            className="w-full h-full object-cover" />
        </div>

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-900/70 via-brand-900/40 to-brand-900 z-10" />
        
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-brand-900/80 via-transparent to-transparent" />

        {/* Decorative grid */}
        <div
          className="absolute inset-0 z-10 opacity-[0.07]"
          style={{
            backgroundImage:
            'linear-gradient(rgba(34,211,238,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.4) 1px, transparent 1px)',
            backgroundSize: '80px 80px'
          }} />
        

        {/* Static hero image (bottom-right) */}
        <div className="absolute bottom-0 right-0 z-20 hidden lg:block pointer-events-none">
          <div className="relative w-[320px] lg:w-[400px] xl:w-[500px]">
            <img
              src="https://images.pexels.com/photos/7108114/pexels-photo-7108114.jpeg"
              alt="Medical healthcare professional"
              loading="lazy"
              decoding="async"
              className="w-full h-auto opacity-60 object-contain" />
          </div>
        </div>

        {/* Hero copy */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
          
          {/* Top meta row removed for minimalism */}

          <div className="max-w-5xl">
            <motion.div
              initial={{
                opacity: 0
              }}
              animate={{
                opacity: 1
              }}
              transition={{
                delay: 0.4,
                duration: 0.8
              }}
              className="inline-flex items-center gap-3 mb-10">
              
              {/* Decorative dots removed for minimalism */}
              <span className="text-xs font-medium tracking-[0.25em] text-signal-300 uppercase">
                Medical Technology · <span style={{color: '#613298'}}>East Africa</span>
              </span>
            </motion.div>

            <h1 className="font-display text-[clamp(2.5rem,8vw,7.5rem)] font-light text-white leading-[1.3] mb-10 tracking-tight">
              <span className="block">
                <RevealText text="Empowering" />
              </span>
              <span className="block">
                <RevealText text="Africa," delay={0.1} />
              </span>
              <span className="block font-normal text-signal-300">
                <RevealText text="innovating&nbsp;care." delay={0.4} />
              </span>
            </h1>

             <motion.p
               initial={{
                 opacity: 0,
                 y: 20
               }}
               animate={{
                 opacity: 1,
                 y: 0
               }}
               transition={{
                 delay: 1.4,
                 duration: 0.8
               }}
               className="text-lg lg:text-xl text-white/70 mb-10 leading-relaxed max-w-xl">
               
               We buy, sell and distribute world-class medical equipment from globally renowned manufacturers including Comen, Brownier, Neurosoft, Vatech, Runyes, Medispark, Dochem, and GC Fuji — ensuring affordability, accessibility, convenience, and reliability for medical partners across Rwanda, Burundi and the DRC.
             </motion.p>

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
                delay: 1.6,
                duration: 0.8
              }}
              className="flex flex-wrap items-center gap-4">
              
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 bg-blue-100 hover:bg-blue-200 text-black pl-7 pr-3 py-2 rounded-full font-semibold transition-all">
                
                <span>Request a tailored quote</span>
                <span className="bg-black text-blue-100 w-9 h-9 rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
                  <ArrowUpRight size={16} />
                </span>
              </Link>
              <Link
                to="/products"
                className="group inline-flex items-center gap-2 text-white/80 hover:text-white px-2 py-3 font-medium transition-colors link-underline">
                
                Browse equipment catalog
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1" />
                
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Bottom KPI strip */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            delay: 1.8,
            duration: 1
          }}
          className="absolute bottom-0 inset-x-0 z-20 border-t border-white/10 backdrop-blur-md bg-brand-900/40">
          
          {/* Stats section removed for minimalism */}
        </motion.div>
      </section>

      {/* ========================= PARTNER MARQUEE ========================= */}
      <PartnerMarquee />

      {/* ========================= SPLIT EDITORIAL ========================= */}
      <section className="py-24 lg:py-40 bg-paper-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* Image stack */}
            <div className="lg:col-span-6 relative">
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.95
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1
                }}
                viewport={{
                  once: true,
                  margin: '-100px'
                }}
                transition={{
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="relative aspect-[5/6] rounded-[2rem] overflow-hidden">
                
                <img
                  src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1400&q=80"
                  alt="Operating room"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover" />
                
              </motion.div>

              <motion.div
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
                  duration: 0.8,
                  delay: 0.2
                }}
                className="absolute -bottom-12 -right-4 lg:-right-12 w-48 lg:w-64 aspect-square rounded-2xl overflow-hidden ring-8 ring-paper-100 shadow-2xl">
                
                <img
                  src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=800&q=80"
                  alt="Clinical staff"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover" />
                
              </motion.div>

              <motion.div
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
                  delay: 0.4
                }}
                className="absolute top-8 -left-4 lg:-left-8 bg-brand-800 text-white px-4 py-3 rounded-full text-xs font-mono uppercase tracking-widest">
                
                Est. 2023 — Kigali
              </motion.div>
            </div>

            {/* Copy */}
            <motion.div
              initial={{
                opacity: 0,
                y: 30
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true,
                margin: '-100px'
              }}
              transition={{
                duration: 0.8
              }}
              className="lg:col-span-6">
              
              <div className="inline-flex items-center gap-3 mb-8">
                <div className="w-12 h-px bg-ink-300" />
                <span className="text-xs font-semibold tracking-[0.25em] text-ink-600 uppercase">About</span>
              </div>

              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-ink-900 leading-[1.05] mb-8">
                A new standard for medical technology in{' '}
                <span className="text-signal-600">
                  East&nbsp;Africa.
                </span>
              </h2>

              <p className="text-lg text-ink-700 mb-6 leading-relaxed">
                MIT-DASH buys, sells and distributes world-class medical
                equipment — not only what earns the biggest margins, but
                whatever healthcare providers actually need. Headquartered in
                Kigali, we serve hospitals, clinics and facilities across
                Rwanda, Burundi and the DRC.
              </p>
              <p className="text-lg text-ink-600 mb-10 leading-relaxed">
                Traditional distributors skip frequently demanded products in
                favour of convenience or profit — leaving real gaps in care.
                We do the opposite: every product needed is made available,
                every engagement is tailored to the specific client, and
                long-term satisfaction always comes before short-term volume.
              </p>

              {/* Certifications and stats removed for minimalism */}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-ink-300" />
              <span className="text-xs font-semibold tracking-[0.25em] text-ink-600 uppercase">Our Team</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-ink-900 leading-[1.05] mb-5">
              People driving dependable medical solutions.
            </h2>
            <p className="text-lg text-ink-600 leading-relaxed">
              Our team combines leadership, clinical understanding, commercial expertise, and long-term support to help every client access the equipment they need.
            </p>
          </div>

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
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
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

      {/* ========================= WHY MIT-DASH ========================= */}
      <section className="py-24 lg:py-40 bg-paper-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 mb-20">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-12 h-px bg-ink-300" />
                <span className="text-xs font-semibold tracking-[0.25em] text-ink-600 uppercase">The Difference</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-ink-900 leading-[1.05]">
                More than supply.{' '}
                <span className="text-signal-600">Partnership.</span>
              </h2>
            </div>
            <p className="lg:col-span-6 lg:col-start-7 text-lg text-ink-600 leading-relaxed self-end">
              Every facility we equip is a long-term commitment. We're the team
              you call when devices need calibration, when nurses need training,
              when budgets need creative financing.
            </p>
          </div>

           <div className="grid md:grid-cols-3 gap-px bg-ink-200 rounded-3xl overflow-hidden">
             {[
             {
               num: '01',
               title: 'Uncompromising Availability',
               desc: 'Unlike traditional distributors who only procure what has bigger margins or is convenient, we ensure any type of medical equipment needed is available without considering margins — eliminating shortages of frequently demanded products.',
               icon: <ShieldCheck size={24} />
             },
             {
               num: '02',
               title: 'Client-Centric Service',
               desc: 'Our goal is not to have 1000 clients but to have 100 that are greatly satisfied with our services. We tailor our services for every client needs, ensuring affordability, accessibility, convenience, and reliability.',
               icon: <Sparkles size={24} />
             },
             {
               num: '03',
               title: 'Global Partnerships',
               desc: 'We buy, sell and distribute world-class medical equipment from globally renowned manufacturers including Comen, Brownier, Neurosoft, Vatech, Runyes, Medispark, Dochem, and GC Fuji, bringing the best of global medical technology to East Africa.',
               icon: <Plus size={24} />
             }].
             map((item, i) =>
             <motion.div
               key={i}
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
                 delay: i * 0.12
               }}
               className="group bg-paper-100 hover:bg-brand-900 p-10 lg:p-12 transition-colors duration-700">
               
               <div className="flex items-start justify-between mb-10">
                 <span className="font-mono text-sm text-ink-400 group-hover:text-signal-400 transition-colors">
                   {item.num} / 03
                 </span>
                 <div className="text-ink-300 group-hover:text-signal-400 transition-colors">
                   {item.icon}
                 </div>
               </div>
               <h3 className="font-display text-3xl font-medium text-ink-900 group-hover:text-white mb-4 transition-colors">
                 {item.title}
               </h3>
               <p className="text-ink-600 group-hover:text-white/70 leading-relaxed transition-colors">
                 {item.desc}
               </p>
             </motion.div>
           )}
           </div>
        </div>
      </section>

      {/* ========================= TESTIMONIAL ========================= */}
      <section className="py-24 lg:py-32 bg-signal-50/40 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-signal-200/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div
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
              duration: 0.8
            }}>
            
            <Quote size={56} className="text-signal-400 mx-auto mb-10" />
            <blockquote className="font-display text-3xl md:text-4xl lg:text-5xl text-ink-900 leading-[1.2] mb-12 font-light">
              <span>"</span>MIT-DASH didn't just deliver our
              diagnostic imaging suite — they installed it, trained our
              radiographers, and have kept it running flawlessly ever since.
              <span>"</span>
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 rounded-full bg-brand-800 flex items-center justify-center text-signal-300 font-display font-medium text-xl">
                R
              </div>
              <div className="text-left">
                <div className="font-semibold text-ink-900">Dr. Réné M.</div>
                <div className="text-sm text-ink-500">
                  Director · Regional Hospital, Rwanda
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========================= CTA ========================= */}
      <section className="py-24 lg:py-32 bg-brand-900 relative overflow-hidden grain">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-signal-500/15 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px]" style={{backgroundColor:'#613298', opacity:0.1, borderRadius:'9999px', filter:'blur(100px)'}} />
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
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
              duration: 0.8
            }}>
            
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="w-12 h-px" style={{backgroundColor:'#613298'}} />
              <span className="font-mono text-xs tracking-[0.25em] text-signal-400 uppercase">
                Let's Talk
              </span>
              <div className="w-12 h-px" style={{backgroundColor:'#613298'}} />
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-7xl font-light text-white mb-8 leading-[1.05]">
              Build the next chapter of{' '}
              <span className="text-signal-300">African healthcare</span>{' '}
              — with us.
            </h2>
            <p className="text-white/70 text-lg lg:text-xl mb-12 max-w-2xl mx-auto">
              Whether you're equipping a district clinic or a national referral
              hospital, every engagement is tailored to your specific context —
              because our goal is not volume, but partners who are genuinely
              well-served.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 bg-signal-400 hover:bg-signal-300 text-ink-950 pl-7 pr-3 py-2 rounded-full font-semibold transition-all">
                
                Request a consultation
                <span className="bg-brand-950 text-signal-400 w-9 h-9 rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
                  <ArrowUpRight size={16} />
                </span>
              </Link>
              <Link
                to="/cooperation"
                className="text-white/80 hover:text-white px-7 py-4 font-medium transition-colors link-underline">
                
                Partner with us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>);

}