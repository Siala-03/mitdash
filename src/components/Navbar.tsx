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
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="relative">
              <div className="bg-brand-900 text-white p-2 rounded-xl group-hover:bg-brand-800 transition-colors">
                <Activity size={22} strokeWidth={2.5} />
              </div>
              <div className="absolute -inset-1 bg-brand-500/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-bold text-xl tracking-tight text-slate-900">
                MIT<span className="text-brand-600">·</span>DASH
              </span>
              <span className="text-[10px] text-slate-500 font-medium tracking-widest uppercase mt-0.5 hidden sm:block">
                Medical Technology
              </span>
            </div>
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
              className="group inline-flex items-center gap-2 bg-slate-900 hover:bg-brand-900 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-sm">
              
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
              className="mt-2 bg-brand-900 text-white text-center font-medium px-4 py-3 rounded-xl">
              
                Request a Quote
              </Link>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </header>);

}