import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, FileText, Users, Handshake } from 'lucide-react';
import { technologyEquipmentIndex } from '../data/catalog';

interface SelectedItem {
  category: string;
  name: string;
  imageUrl: string;
}

const itemImages: Record<string, string> = {
  // ── Surgical ──────────────────────────────────────────────────────────────
  'Mobile X-ray Machine': '/Mobile%20X-ray%20machine-surgical.png',
  'Mobile C-Arm with FPD': '/Mobile%20c-arm%20with%20fpd-surgical.png',
  'Table Digital Radiography': '/Table%20Digital%20Radiography-surgical.png',
  'Anaesthesia Machine': '/anaesthesia%20machine-surgical.png',
  'Mobile X-Ray': '/mobile%20x-ray-surgical.png',
  'Ultra-portable X-Ray Imaging': '/ultra-portable%20x-ray%20imaging%20-surgical.png',

  // ── Imaging ───────────────────────────────────────────────────────────────
  'Fluoroscopy':
    '/flouroscopy-imaging.jpg',
  'CT Scan':
    '/ct-scan-imaging.png',
  'MRI':
    '/NeuMR%20Universal-imaging.jpg',
  'NeuAngio Ceiling Series':
    '/NeuAngio%20Ceiling%20Series-imaging.png',
  'NeuEcho9 US Series':
    '/NeuEcho9%20US%20series%20-%20imaging.png',
  'NeuAngio Floor Series':
    '/NeuAngio%20Floor%20Series-imaging.png',

  // ── Laboratory ────────────────────────────────────────────────────────────
  '-150°C Cryo Freezer':
    '/-150%C2%B0C%20Cryo%20Freezer-laboratory.jpg',
  'Alcohol Prep Pad':
    '/alcohol%20prep%20pad-laboratory.jpg',
  'Automatic Fluorescence Immunoassay Analyzer':
    '/Automatic%20Fluorescence%20Immunoassay%20Analyzer%20QD-S2000-laboratory.png',
  'Automatic IHC Stainer':
    '/Automatic%20IHC%20Stainer-laboratory.png',
  'Burette Infusion Set':
    '/burrete%20infusion%20set-laboratory.jpg',
  'Fast-Response Digital Thermometer':
    '/Fast%20-%20response%20digital%20thermometer-laboratory.jpg',

  // ── Dental ────────────────────────────────────────────────────────────────
  'Dental X-Ray':
    '/dental%20x-ray.jpg',
  'Digital Sensor':
    '/digital%20sensor-dental.png',
  '2D OPG':
    '/2d-opg-dental.png',
  'UP 3D Dental Digital Laboratory':
    '/UP3D-Dental.jpg',
  'Pax-i3D Green':
    '/Pax-i3D%20Green-dental.jpg',
  'PA-i3D Smartdental':
    '/pa-i3d%20Smartdental.jpg',
  'Smart Plus':
    '/smart%20Plus-dental.jpg',
  'Vatech A9':
    '/vatech%20A9-dental.jpg',
};

const fallbackImage =
  'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=800&q=80';

function getImage(itemName: string): string {
  return itemImages[itemName] ?? fallbackImage;
}

// Returns a Tailwind grid-cols class that best fits the item count
function getGridCols(count: number): string {
  if (count <= 1) return 'grid-cols-1';
  if (count === 2) return 'grid-cols-2';
  if (count === 3) return 'grid-cols-3';
  if (count === 4) return 'grid-cols-2 md:grid-cols-4';
  if (count === 5) return 'grid-cols-2 md:grid-cols-3 lg:grid-cols-5';
  // 6, 7, 8 → 3 per row on desktop, 2 on mobile
  return 'grid-cols-2 md:grid-cols-3';
}

export function Products() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<SelectedItem | null>(null);

  const categories = useMemo(
    () => technologyEquipmentIndex.map((g) => g.name),
    []
  );

  const visibleGroups = useMemo(
    () =>
      technologyEquipmentIndex.filter(
        (g) => activeCategory === 'all' || g.name === activeCategory
      ),
    [activeCategory]
  );

  return (
    <div className="bg-white min-h-screen">

      {/* ── HERO ── */}
      <section className="relative pt-40 pb-16 bg-brand-900 overflow-hidden grain">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=2400&q=80"
            alt=""
            fetchpriority="high"
            decoding="async"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-900 via-brand-900/75 to-brand-900/55" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-signal-300 mb-4">
            MITDASH Technology Catalog
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 leading-[1.05]">
            World-class equipment from global manufacturers,{' '}
            <span className="italic text-signal-300">available when you need it.</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl">
            We source and distribute from globally renowned manufacturers — Comen, Brownier,
            Neurosoft, Vatech, Runyes, Medispark, Dochem, and GC Fuji — without letting margins
            dictate what's available. If your facility needs it, we make it accessible.
          </p>
        </div>
      </section>

      {/* ── SOCIAL PROOF STRIP ── */}
      <section className="bg-white border-b border-paper-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-20">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-signal-50 flex items-center justify-center shrink-0">
                <Handshake size={18} className="text-signal-600" />
              </div>
              <div>
                <p className="font-display text-2xl font-medium text-ink-900 leading-none">30+</p>
                <p className="text-xs text-ink-500 mt-0.5 uppercase tracking-wider font-mono">Medical partners</p>
              </div>
            </div>
            <div className="w-px h-8 bg-paper-300 hidden md:block" />
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-signal-50 flex items-center justify-center shrink-0">
                <Users size={18} className="text-signal-600" />
              </div>
              <div>
                <p className="font-display text-2xl font-medium text-ink-900 leading-none">500+</p>
                <p className="text-xs text-ink-500 mt-0.5 uppercase tracking-wider font-mono">Satisfied clients</p>
              </div>
            </div>
            <div className="w-px h-8 bg-paper-300 hidden md:block" />
            <p className="text-sm text-ink-500 max-w-xs text-center md:text-left">
              Our goal isn't volume — it's ensuring every partner is{' '}
              <span className="text-ink-800 font-medium">genuinely well-served.</span>
            </p>
          </div>
        </div>
      </section>

      {/* ── STICKY CATEGORY TABS ── */}
      <div className="sticky top-[72px] z-30 bg-white/95 backdrop-blur-md border-b border-ink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === 'all'
                  ? 'bg-signal-700 text-white'
                  : 'bg-white text-ink-700 hover:bg-ink-100 border border-ink-200'
              }`}
            >
              All Categories
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? 'bg-ink-950 text-white'
                    : 'bg-white text-ink-700 hover:bg-ink-100 border border-ink-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── CATALOG ── */}
      <section className="py-10 pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {visibleGroups.map((group, i) => {
            const gridCols = getGridCols(group.items.length);

            return (
              <motion.article
                key={group.name}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                className="rounded-3xl border border-paper-300 bg-white overflow-hidden"
              >
                {/* Category header — name only */}
                <div className="px-6 pt-6 pb-5 border-b border-paper-200">
                  <h3 className="font-display text-2xl text-ink-900">{group.name}</h3>
                </div>

                {/* Full image grid — all items */}
                <div className={`grid ${gridCols} gap-px bg-paper-200`}>
                  {group.items.map((item) => {
                    const imageUrl = getImage(item);
                    return (
                      <button
                        key={`${group.name}-${item}`}
                        type="button"
                        onClick={() =>
                          setSelectedItem({ category: group.name, name: item, imageUrl })
                        }
                        className="group relative aspect-[4/3] overflow-hidden bg-ink-100 text-left"
                      >
                        <img
                          src={imageUrl}
                          alt={item}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          onError={(e) => {
                            (e.currentTarget as HTMLImageElement).src = fallbackImage;
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-950/20 to-transparent" />
                        <div className="absolute inset-x-0 bottom-0 p-4">
                          <p className="text-white text-sm font-semibold leading-tight line-clamp-2">
                            {item}
                          </p>
                        </div>
                        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-white/20 backdrop-blur-sm rounded-full p-1.5">
                          <ArrowUpRight size={12} className="text-white" />
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Footer: Quote action */}
                <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 border-t border-paper-200 bg-paper-50">
                  <div />
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-600 hover:text-ink-900 transition-colors"
                  >
                    Request a quote <ArrowUpRight size={14} />
                  </Link>
                </div>
              </motion.article>
            );
          })}

          {/* Bottom CTA */}
          <div className="rounded-3xl bg-brand-900 p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="font-mono text-xs tracking-[0.2em] text-signal-300 uppercase mb-2">
                Need something specific?
              </p>
              <h3 className="font-display text-2xl md:text-3xl font-light text-white leading-tight">
                Don't see what you need? We procure anything on request.
              </h3>
            </div>
            <Link
              to="/contact"
              className="shrink-0 group inline-flex items-center gap-3 bg-signal-400 hover:bg-signal-300 text-white pl-6 pr-3 py-2.5 rounded-full font-semibold transition-all"
            >
              <span>Make an enquiry</span>
              <span className="bg-white/20 w-9 h-9 rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
                <ArrowUpRight size={16} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── ITEM DETAIL MODAL ── */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-ink-950/80 backdrop-blur-sm p-4 overflow-y-auto flex items-center justify-center"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl rounded-3xl overflow-hidden bg-white border border-paper-300 shadow-2xl"
            >
              <div className="aspect-[16/9] bg-ink-100">
                <img
                  src={selectedItem.imageUrl}
                  alt={selectedItem.name}
                  decoding="async"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = fallbackImage;
                  }}
                />
              </div>
              <div className="p-6 md:p-8">
                <p className="font-mono text-[11px] uppercase tracking-widest text-ink-500 mb-2">
                  {selectedItem.category}
                </p>
                <h2 className="font-display text-2xl md:text-3xl text-ink-900 mb-2">
                  {selectedItem.name}
                </h2>
                <p className="text-ink-600 text-sm mb-6">
                  Contact our team for full specifications, pricing, and availability.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-signal-700 text-white text-sm font-semibold"
                    onClick={() => setSelectedItem(null)}
                  >
                    Request Quote <ArrowUpRight size={13} />
                  </Link>

                  <button
                    type="button"
                    onClick={() => setSelectedItem(null)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-paper-300 text-sm font-medium text-ink-500 hover:text-ink-900 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
