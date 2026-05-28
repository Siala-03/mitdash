import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
export function Footer() {
  return (
    <footer className="bg-ink-950 text-ink-200 pt-24 pb-10 relative overflow-hidden grain">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
          'linear-gradient(rgba(34,211,238,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
      

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Big mark */}
        <div className="mb-20 pb-16 border-b border-white/10">
          <div className="flex flex-col lg:flex-row gap-12 items-start lg:items-end justify-between">
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-light text-white leading-[0.95]">
              Empowering Africa,
              <br />
              <span className="italic text-signal-300">innovating care.</span>
            </h2>
            <Link
              to="/contact"
              className="group shrink-0 inline-flex items-center gap-3 bg-signal-400 hover:bg-signal-300 text-ink-950 pl-7 pr-3 py-3 rounded-full font-semibold transition-all">
              
              Get in touch
              <span className="bg-ink-950 text-signal-400 w-9 h-9 rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
                <ArrowUpRight size={16} />
              </span>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-4 space-y-5">
            <Link to="/" className="flex items-center gap-2.5">
              <img src="/logo.avif" alt="MITDASH Logo" className="h-20 w-auto" />
            </Link>
             <p className="text-sm text-ink-300 leading-relaxed max-w-sm">
               We buy, sell and distribute world-class medical equipment from globally renowned manufacturers including Comen, Brownier, Neurosoft, Vatech, Runyes, Medispark, Dochem, and GC Fuji. Unlike traditional distributors, we ensure availability over margins — building long-term partnerships with deeply satisfied healthcare providers across East Africa.
             </p>
            <div className="flex items-center gap-3 pt-2">
              {['Twitter', 'LinkedIn', 'Instagram'].map((s) =>
              <a
                key={s}
                href="#"
                className="text-xs text-ink-300 hover:text-signal-300 transition-colors link-underline">
                
                  {s}
                </a>
              )}
            </div>
          </div>

          {/* Links */}
          <div className="col-span-1 lg:col-span-2">
            <div className="text-xs font-mono uppercase tracking-widest text-signal-400 mb-5">
              Explore
            </div>
            <ul className="space-y-3">
              {[
              {
                name: 'Home',
                path: '/'
              },
              {
                name: 'Products',
                path: '/products'
              },
              {
                name: 'Solutions',
                path: '/solutions'
              },
              {
                name: 'Cooperation',
                path: '/cooperation'
              },
              {
                name: 'Contact',
                path: '/contact'
              }].
              map((item) =>
              <li key={item.name}>
                  <Link
                  to={item.path}
                  className="text-sm text-ink-200 hover:text-white transition-colors link-underline">
                  
                    {item.name}
                  </Link>
                </li>
              )}
            </ul>
          </div>

          {/* Categories */}
          <div className="col-span-1 lg:col-span-2">
            <div className="text-xs font-mono uppercase tracking-widest text-signal-400 mb-5">
              Catalog
            </div>
            <ul className="space-y-3">
              {['Imaging', 'Surgical', 'Laboratory', 'Patient Care'].map(
                (item) =>
                <li key={item}>
                    <Link
                    to="/products"
                    className="text-sm text-ink-200 hover:text-white transition-colors link-underline">
                    
                      {item}
                    </Link>
                  </li>

              )}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 lg:col-span-4">
            <div className="text-xs font-mono uppercase tracking-widest text-signal-400 mb-5">
              Contact
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-ink-200">
                <MapPin size={16} className="text-signal-400 shrink-0 mt-0.5" />
                <span>
                  Iriba House 1st Floor<br />
                  Gikondo, Kigali Rwanda.
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm text-ink-200">
                <Phone size={16} className="text-signal-400 shrink-0" />
                <span>+250796179826</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-ink-200">
                <Mail size={16} className="text-signal-400 shrink-0" />
                <a
                  href="mailto:sales@mitdash.com"
                  className="hover:text-white transition-colors">
                  sales@mitdash.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mb-8 rounded-2xl border border-white/10 bg-white/[0.03] p-4 md:p-5">
          <div className="flex flex-wrap items-center gap-3 text-[11px] font-mono uppercase tracking-wider text-ink-300">
            <span className="px-3 py-1 rounded-full border border-white/15">ISO 13485 Aligned</span>
            <span className="px-3 py-1 rounded-full border border-white/15">CE / FDA Device Portfolio</span>
            <span className="px-3 py-1 rounded-full border border-white/15">Tender Documentation Support</span>
            <span className="px-3 py-1 rounded-full border border-white/15">Regional Service SLA &lt; 48h</span>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-ink-400 font-mono">
            © {new Date().getFullYear()} MIT-DASH Ltd. · Kigali, Rwanda
          </p>
          <div className="flex gap-6 text-xs text-ink-400">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>);

}