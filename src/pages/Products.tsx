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
  'Electrohydraulic Operating Table': '/Electrohydraulic%20Operating%20table-surgical.webp',
  'Surgical Light': '/surgical%20light-surgical.webp',
  'Infusion Pump': '/Infusion%20Pump-surgical.webp',
  'Infant Radiant Warmer': '/Infant%20Radiant%20Warmer-surgical.webp',
  'Ventilator': '/ventilator-surgical.webp',
  'Patient Monitor': '/k22%20patient%20monitor-surgical.webp',
  '3-in-1 Trinity Incubator': '/3-in-1%20Trinity%20Incubator-surgical.webp',
  'Gastrointestinal Electronic Endoscope': '/Gastrointestinal%20Electronic%20Endoscope-surgical.webp',

  // ── Imaging ───────────────────────────────────────────────────────────────
  'MRI':
    '/NeuMR%20Universal-imaging.webp',
  'NeuEcho9 US Series':
    '/NeuEcho9%20US%20series%20-%20imaging.webp',
  'Ultrasound':
    '/ultrasound-imaging.webp',
  'Ultrasound S22':
    '/Ultrasound%20s22-imaging.webp',
  'Ultrasound S8 EXP':
    '/ultrasound%20s8%20exp-imaging.webp',
  'General X-Ray':
    '/General%20X-ray-imaging.webp',
  'C-Arm':
    '/C-arm-imaging.webp',

  // ── Laboratory ────────────────────────────────────────────────────────────
  'URIT-910C Plus Electrolyte Analyzer':
    '/URIT-910C%20Plus%20Electrolyte%20Analyzer-laboratory.webp',
  'BF-730 Flow Cytometer':
    '/BF-730%20Flow%20Cytometer-laboratory.webp',
  'CA-640A Automatic Chemistry Analyzer':
    '/CA-640A%20Automatic%20Chemistry%20Analyzer-Laboratory.webp',
  'URIT-560 Urine Analyzer':
    '/URIT-560%20Urine%20Analyzer-laboratory.webp',
  'US-1000 AI-Libre Urinalysis Analyzer':
    '/US-1000%20AI-Libre%20Urinalysis%20Analyzer-laboratory.webp',
  '5-Part Diff Hematology Analyzer':
    '/5-part-diff%20hematology%20analyzer-laboratory.webp',
  'Chemistry Analyzer':
    '/chemistry%20analyzer-laboratory.webp',
  'Urinalysis Analyzer':
    '/urinalysis%20analyzer-laboratory.webp',
  'Microplate Reader':
    '/microplate%20reader-laboratory.webp',

  // ── Dental ────────────────────────────────────────────────────────────────
  'Pax-i3D Green':
    '/Pax-i3D%20Green-dental.webp',
  '3D CBCT':
    '/3d%20cbct-dental.webp',
  '2D Pax-i Plus':
    '/2d%20pax-i-imaging.jpg',
  'Handheld X-Ray':
    '/handheld%20x-ray-dental.webp',
  'Pax-i3D':
    '/pax-i3d-dental.webp',
  'Dental X-Ray':
    '/dental%20x-ray.webp',
  'Dental Chair':
    '/dental%20chair%20-%20dental.webp',

  // ── Dental Implants ──────────────────────────────────────────────────────
  'Conical Connection Implant':
    '/Conical-Connection%20b1-dental%20implants.jpg',
  'Internal Hex Implant':
    '/Internal%20Hex-%20Dental%20Implant.jpg',
  'Internal Hex Prosthetics':
    '/internal%20hex%20prosthetics-dental%20implants.jpg',
  'Internal Hex Prosthetics 2.0':
    '/Internal-Hex-2.0-Prosthetics-dental%20implants.jpg',
  'Conical Connection Prosthetics':
    '/conical%20connection%20prosthetics-dental%20implants.jpg',
  'Implant Motor':
    '/implant%20motor.jpeg',

  // ── Digital Dental Laboratory ───────────────────────────────────────────
  'P42 Plus':
    '/p42plus-dental%20digital%20laboratory.webp',
  'P53-DC Milling Machine':
    '/up3d-p53dc-dental-milling-machine-dental%20digital%20laboratory.webp',
  'P55D Milling Machine':
    '/up3d-p55d-dental-milling-machine-dental%20digital%20laboratory.png',
  'UP560HD Lab Scanner':
    '/up3d-up560hd-dental-lab-scanner-dental%20digital%20laboratory.webp',
  'UP610 Intraoral Scanner':
    '/up3d-up610-intraoral-scanner-dental%20digital%20laboratory.webp',
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

function ItemGrid({
  items,
  categoryLabel,
  onSelect,
  aspect = 'aspect-[4/3]',
}: {
  items: string[];
  categoryLabel: string;
  onSelect: (item: SelectedItem) => void;
  aspect?: string;
}) {
  const gridCols = getGridCols(items.length);
  return (
    <div className={`grid ${gridCols} gap-px bg-paper-200`}>
      {items.map((item) => {
        const imageUrl = getImage(item);
        return (
          <button
            key={`${categoryLabel}-${item}`}
            type="button"
            onClick={() => onSelect({ category: categoryLabel, name: item, imageUrl })}
            className={`group relative ${aspect} overflow-hidden bg-ink-100 text-left`}
          >
            <img
              src={imageUrl}
              alt={item}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-contain p-3 transition-transform duration-700 group-hover:scale-105"
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
  );
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
            <span className="text-signal-300">available when you need it.</span>
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
                <ItemGrid items={group.items} categoryLabel={group.name} onSelect={setSelectedItem} />

                {/* Subcategories, e.g. Dental Implants under Dental */}
                {group.subgroups?.map((subgroup) => (
                  <div key={subgroup.name}>
                    <div className="px-6 pt-6 pb-5 border-t border-paper-200">
                      <h4 className="font-display text-lg text-ink-700">{subgroup.name}</h4>
                    </div>
                    <ItemGrid
                      items={subgroup.items}
                      categoryLabel={subgroup.name}
                      onSelect={setSelectedItem}
                      aspect={subgroup.aspect}
                    />
                  </div>
                ))}

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
                  className="w-full h-full object-contain p-6"
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
