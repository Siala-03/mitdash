import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Activity } from 'lucide-react';
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);
  const navLinks = [
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
  }];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-white shadow-[0_1px_0_0_rgba(15,23,42,0.06)] py-4 transition-all duration-500">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img src="/logo.jpeg" alt="MITDASH Logo" className="h-10 w-auto max-w-[140px] object-contain" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-medium transition-colors px-4 py-2 rounded-full relative ${location.pathname === link.path ? 'text-brand-700' : 'text-slate-600 hover:text-slate-900'}`}>
              
                <span className="relative z-10">{link.name}</span>
                {location.pathname === link.path &&
              <motion.div
                layoutId="navbar-pill"
                className="absolute inset-0 bg-brand-50 rounded-full"
                transition={{
                  type: 'spring',
                  stiffness: 400,
                  damping: 35
                }} />

              }
              </Link>
            )}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 bg-signal-700 hover:bg-signal-600 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-sm">
              
              Request a Quote
              <span className="inline-block transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </Link>
          </div>

          {/* Mobile button */}
          <button
            className="lg:hidden text-slate-700 hover:text-brand-600 transition-colors p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu">
            
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen &&
        <motion.div
          initial={{
            opacity: 0,
            height: 0
          }}
          animate={{
            opacity: 1,
            height: 'auto'
          }}
          exit={{
            opacity: 0,
            height: 0
          }}
          className="lg:hidden bg-white border-t border-slate-100 overflow-hidden">
          
            <div className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) =>
            <Link
              key={link.name}
              to={link.path}
              className={`text-base font-medium px-4 py-3 rounded-xl ${location.pathname === link.path ? 'text-brand-700 bg-brand-50' : 'text-slate-700 hover:bg-slate-50'}`}>
              
                  {link.name}
                </Link>
            )}
              <Link
              to="/contact"
              className="mt-2 bg-signal-700 text-white text-center font-medium px-4 py-3 rounded-xl">
              
                Request a Quote
              </Link>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </header>);

}