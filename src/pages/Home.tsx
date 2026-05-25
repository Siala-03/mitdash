import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
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
import { AnimatedCounter } from '../components/AnimatedCounter';
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
        className="inline-block overflow-hidden align-bottom mr-[0.25em]">
        
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
export function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  });
  const imageY = useTransform(heroProgress, [0, 1], ['0%', '30%']);
  const imageScale = useTransform(heroProgress, [0, 1], [1, 1.15]);
  const overlayOpacity = useTransform(heroProgress, [0, 0.8], [0.4, 0.85]);
  const heroTextY = useTransform(heroProgress, [0, 1], ['0%', '-20%']);
  return (
    <div className="flex flex-col bg-paper-100">
      {/* ========================= HERO ========================= */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-end pb-20 lg:pb-32 pt-32 md:pt-40 overflow-hidden bg-ink-950 grain">
        
        {/* Parallax background */}
        <motion.div
          style={{
            y: imageY,
            scale: imageScale
          }}
          className="absolute inset-0 -top-20 -bottom-20 z-0">
          <img
            src="https://images.pexels.com/photos/13697732/pexels-photo-13697732.jpeg"
            alt="MITDASH hero background"
            className="w-full h-full object-cover" />
        </motion.div>

        {/* Overlays */}
        <motion.div
          style={{
            opacity: overlayOpacity
          }}
          className="absolute inset-0 bg-gradient-to-b from-ink-950/70 via-ink-950/40 to-ink-950 z-10" />
        
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-ink-950/80 via-transparent to-transparent" />

        {/* Decorative grid */}
        <div
          className="absolute inset-0 z-10 opacity-[0.07]"
          style={{
            backgroundImage:
            'linear-gradient(rgba(34,211,238,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.4) 1px, transparent 1px)',
            backgroundSize: '80px 80px'
          }} />
        

        {/* Floating equipment composition (top-right) */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9
          }}
          animate={{
            opacity: 1,
            scale: 1
          }}
          transition={{
            duration: 1.2,
            delay: 0.3
          }}
          className="absolute top-32 right-0 lg:right-12 xl:right-24 z-20 hidden md:block">
          
          <div className="relative w-[280px] lg:w-[340px] xl:w-[400px]">
            {/* Main floating image */}
            <motion.div
              animate={{
                y: [0, -10, 0]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="aspect-[3/4] rounded-3xl overflow-hidden ring-1 ring-white/10 shadow-2xl shadow-signal-500/20">
              
              <img
                src="https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=900&q=80"
                alt="Medical imaging equipment"
                className="w-full h-full object-cover" />
              
            </motion.div>

            {/* Live spec card */}
            <motion.div
              initial={{
                opacity: 0,
                x: -20
              }}
              animate={{
                opacity: 1,
                x: 0
              }}
              transition={{
                delay: 1.4,
                duration: 0.8
              }}
              className="absolute -left-16 lg:-left-24 bottom-10 bg-paper-50 rounded-2xl p-4 shadow-2xl w-56 border border-paper-300">
              
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono text-signal-700 uppercase tracking-widest">
                  Live · OEM
                </span>
                <div className="flex gap-1">
                  <span className="w-1.5 h-1.5 bg-signal-400 rounded-full animate-pulse" />
                </div>
              </div>
              <div className="font-display text-lg text-ink-900 leading-tight font-semibold mb-1">
                Portable Ultrasound
              </div>
              <div className="text-xs text-ink-500">
                CE · FDA · 5-yr warranty
              </div>
            </motion.div>

            {/* Floating tag */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.5
              }}
              animate={{
                opacity: 1,
                scale: 1
              }}
              transition={{
                delay: 1.8
              }}
              className="absolute -top-4 -right-4 bg-signal-400 text-ink-950 px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5">
              
              <span className="w-1.5 h-1.5 bg-ink-950 rounded-full" />
              In-stock Kigali
            </motion.div>
          </div>
        </motion.div>

        {/* Hero copy */}
        <motion.div
          style={{
            y: heroTextY
          }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
          
          {/* Top meta row */}
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
              duration: 0.8,
              delay: 0.2
            }}
            className="absolute top-32 left-4 sm:left-6 lg:left-8 flex items-center gap-6 text-white/60 text-xs font-mono uppercase tracking-widest">
            
            <span>MIT—DASH / 001</span>
            <span className="hidden sm:inline">Est. Kigali · 2023</span>
          </motion.div>

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
              
              <div className="relative flex items-center justify-center">
                <span className="absolute w-3 h-3 bg-signal-400 rounded-full animate-pulse-ring" />
                <span className="relative w-2 h-2 bg-signal-400 rounded-full" />
              </div>
              <span className="text-xs font-medium tracking-[0.25em] text-signal-300 uppercase">
                Medical Technology · <span style={{color: '#143EAB'}}>East Africa</span>
              </span>
            </motion.div>

            <h1 className="font-display text-[clamp(2.5rem,8vw,7.5rem)] font-light text-white leading-[0.95] mb-10 tracking-tight">
              <span className="block">
                <RevealText text="Empowering" />
              </span>
              <span className="block">
                <RevealText text="Africa," delay={0.1} />
              </span>
              <span className="block italic font-normal text-signal-300">
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
              
              World-class medical equipment, turnkey installation and lifecycle
              support — delivered to Rwanda, Burundi and the DRC.
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
        </motion.div>

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
          className="absolute bottom-0 inset-x-0 z-20 border-t border-white/10 backdrop-blur-md bg-ink-950/40">
          
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
                className="absolute top-8 -left-4 lg:-left-8 bg-ink-950 text-white px-4 py-3 rounded-full text-xs font-mono uppercase tracking-widest">
                
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
                <span className="italic text-signal-600">
                  East&nbsp;Africa.
                </span>
              </h2>

              <p className="text-lg text-ink-700 mb-6 leading-relaxed">
                MIT-DASH Ltd. is a leading distributor of cutting-edge medical
                technology, headquartered in Kigali and serving healthcare
                providers across Rwanda, Burundi and the DRC.
              </p>
              <p className="text-lg text-ink-600 mb-10 leading-relaxed">
                We don't just sell equipment — we engineer outcomes. From
                customs clearance to clinical training to lifelong service,
                every engagement is built for the long term.
              </p>

              {/* Certifications and stats removed for minimalism */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================= CATEGORIES — EDITORIAL ========================= */}
      <section className="py-24 lg:py-32 bg-ink-950 grain relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }} />
        

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-8">
            <div>
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-12 h-px bg-white/30" />
                <span className="text-xs font-semibold tracking-[0.25em] text-signal-300 uppercase">Portfolio</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-white leading-[1.05] max-w-3xl">
                Equipment for every department,{' '}
                <span className="italic text-signal-300">
                  every care setting.
                </span>
              </h2>
            </div>
            <Link
              to="/products"
              className="group inline-flex items-center gap-2 text-signal-300 hover:text-signal-200 font-medium link-underline">
              
              View full catalog
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-3xl overflow-hidden border border-white/10">
            {[
            {
              title: 'Imaging',
              count: 24,
              icon: <Activity size={20} />,
              img: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=900&q=80',
              items: ['MRI', 'CT', 'Ultrasound', 'Digital X-ray']
            },
            {
              title: 'Surgical',
              count: 38,
              icon: <Stethoscope size={20} />,
              img: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=900&q=80',
              items: [
              'OR Tables',
              'Surgical Lights',
              'Electrosurgery',
              'Endoscopy']

            },
            {
              title: 'Laboratory',
              count: 52,
              icon: <Microscope size={20} />,
              img: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=900&q=80',
              items: ['Analyzers', 'Centrifuges', 'Microscopy', 'Reagents']
            },
            {
              title: 'Patient Care',
              count: 41,
              icon: <HeartPulse size={20} />,
              img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=900&q=80',
              items: ['Ventilators', 'Monitors', 'ICU Beds', 'Infusion']
            }].
            map((cat, i) =>
            <motion.div
              key={cat.title}
              initial={{
                opacity: 0,
                y: 40
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
                duration: 0.7
              }}>
              
                <Link
                to="/products"
                className="group block bg-ink-900 hover:bg-ink-800 transition-all duration-500 h-full">
                
                  <div className="aspect-square overflow-hidden relative">
                    <img
                    src={cat.img}
                    alt={cat.title}
                    className="w-full h-full object-cover opacity-50 group-hover:opacity-80 group-hover:scale-110 transition-all duration-700" />
                  
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent" />
                    <div className="absolute top-4 left-4 text-signal-300">
                      {cat.icon}
                    </div>
                    <div className="absolute top-4 right-4 font-mono text-xs text-white/70">
                      {cat.count} products
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-2xl font-medium text-white mb-3 flex items-center justify-between">
                      {cat.title}
                      <ArrowUpRight
                      size={20}
                      className="text-signal-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    
                    </h3>
                    <ul className="space-y-1.5">
                      {cat.items.map((item) =>
                    <li
                      key={item}
                      className="text-sm text-white/50 flex items-center gap-2">
                      
                          <span className="w-1 h-1 bg-signal-400 rounded-full" />
                          {item}
                        </li>
                    )}
                    </ul>
                  </div>
                </Link>
              </motion.div>
            )}
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
                <span className="italic text-signal-600">Partnership.</span>
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
              title: 'Curated Quality',
              desc: 'CE, FDA and ISO 13485 certified equipment, pre-validated for the East African operating context.',
              icon: <ShieldCheck size={24} />
            },
            {
              num: '02',
              title: 'Turnkey Delivery',
              desc: 'From customs clearance to commissioning and clinical training — fully ready-to-use installations.',
              icon: <Sparkles size={24} />
            },
            {
              num: '03',
              title: 'Lifecycle Support',
              desc: 'Biomedical engineers, genuine parts pipelines, and preventative maintenance contracts.',
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
              className="group bg-paper-100 hover:bg-ink-950 p-10 lg:p-12 transition-colors duration-700">
              
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
              <span className="italic">"</span>MIT-DASH didn't just deliver our
              diagnostic imaging suite — they installed it, trained our
              radiographers, and have kept it running flawlessly ever since.
              <span className="italic">"</span>
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 rounded-full bg-ink-900 flex items-center justify-center text-signal-300 font-display font-medium text-xl">
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
      <section className="py-24 lg:py-32 bg-ink-950 relative overflow-hidden grain">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-signal-500/15 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-signal-400/10 rounded-full blur-[100px]" />
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
              <div className="w-12 h-px bg-signal-400" />
              <span className="font-mono text-xs tracking-[0.25em] text-signal-400 uppercase">
                Let's Talk
              </span>
              <div className="w-12 h-px bg-signal-400" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-7xl font-light text-white mb-8 leading-[1.05]">
              Build the next chapter of{' '}
              <span className="italic text-signal-300">African healthcare</span>{' '}
              — with us.
            </h2>
            <p className="text-white/70 text-lg lg:text-xl mb-12 max-w-2xl mx-auto">
              Whether you're equipping a new facility or modernizing an existing
              one, our team is ready to design a solution that fits your needs.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 bg-signal-400 hover:bg-signal-300 text-ink-950 pl-7 pr-3 py-2 rounded-full font-semibold transition-all">
                
                Request a consultation
                <span className="bg-ink-950 text-signal-400 w-9 h-9 rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
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