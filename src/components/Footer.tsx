import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-brand-900 text-ink-200 pt-12 md:pt-20 lg:pt-24 pb-10 relative overflow-hidden grain">
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(97,50,152,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(97,50,152,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Link columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-8 lg:gap-12 mb-12 md:mb-16">

          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-4 space-y-5">
            <Link to="/" className="flex items-center">
              <img
                src="/logo.jpeg"
                alt="MITDASH Logo"
                className="h-12 w-auto max-w-[160px] object-contain"
                loading="lazy"
                decoding="async"
              />
            </Link>
            <p className="text-sm text-ink-300 leading-relaxed max-w-sm">
              We buy, sell and distribute world-class medical equipment from globally renowned
              manufacturers including Comen, Brownier, Neurosoft, Vatech, Runyes, Medispark, Dochem,
              and GC Fuji. Unlike traditional distributors, we ensure availability over margins —
              building long-term partnerships with deeply satisfied healthcare providers across East Africa.
            </p>
            <div className="flex items-center gap-4 pt-1">
              {['Twitter', 'LinkedIn', 'Instagram'].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="text-xs text-ink-300 hover:text-signal-300 transition-colors link-underline"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div className="col-span-1 md:col-span-1 lg:col-span-2">
            <div className="text-xs font-mono uppercase tracking-widest text-signal-400 mb-4 md:mb-5">
              Explore
            </div>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'Products', path: '/products' },
                { name: 'Solutions', path: '/solutions' },
                { name: 'Cooperation', path: '/cooperation' },
                { name: 'Contact', path: '/contact' },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-sm text-ink-200 hover:text-white transition-colors link-underline"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Catalog */}
          <div className="col-span-1 md:col-span-1 lg:col-span-2">
            <div className="text-xs font-mono uppercase tracking-widest text-signal-400 mb-4 md:mb-5">
              Catalog
            </div>
            <ul className="space-y-3">
              {['Imaging', 'Surgical', 'Laboratory', 'Dental'].map((item) => (
                <li key={item}>
                  <Link
                    to="/products"
                    className="text-sm text-ink-200 hover:text-white transition-colors link-underline"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 md:col-span-2 lg:col-span-4">
            <div className="text-xs font-mono uppercase tracking-widest text-signal-400 mb-4 md:mb-5">
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
                <a href="tel:+250796179826" className="hover:text-white transition-colors">
                  +250 796 179 826
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-ink-200">
                <Mail size={16} className="text-signal-400 shrink-0" />
                <a
                  href="mailto:sales@mitdash.com"
                  className="hover:text-white transition-colors break-all"
                >
                  sales@mitdash.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Compliance badges */}
        <div className="mb-8 rounded-2xl border border-white/10 bg-white/[0.03] p-4 md:p-5">
          <div className="flex flex-wrap items-center gap-2 md:gap-3 text-[10px] md:text-[11px] font-mono uppercase tracking-wider text-ink-300">
            <span className="px-3 py-1 rounded-full border border-white/15">ISO 13485 Aligned</span>
            <span className="px-3 py-1 rounded-full border border-white/15">CE / FDA Device Portfolio</span>
            <span className="px-3 py-1 rounded-full border border-white/15">Tender Documentation Support</span>
            <span className="px-3 py-1 rounded-full border border-white/15">Regional Service SLA &lt; 48h</span>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 md:pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-xs text-ink-400 font-mono text-center sm:text-left">
            © {new Date().getFullYear()} MIT-DASH Ltd. · Kigali, Rwanda
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-ink-400">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="text-ink-600">·</span>
            <span>
              Developed by{' '}
              <span className="text-signal-400 font-medium">Siala Solutions</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
