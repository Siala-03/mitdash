import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowUpRight, Download, FileText } from 'lucide-react';
import { technologyEquipmentIndex } from '../data/catalog';

interface SelectedItem {
  category: string;
  name: string;
  imageUrl: string;
}

// Local images from /public — keyed by exact item name from the catalog.
// Filenames with spaces/special chars are URL-encoded for safe use in src.
const itemImages: Record<string, string> = {
  // ── Surgical ──────────────────────────────────────────────────────────────
  'Anaesthesia Mask':
    '/anaesthesia%20mask-surgical.jpg',
  'Bronchoscope':
    '/bronchoscope%20endoscro-surgical.jpg',
  'Clip Appliers':
    '/clip%20appliers-surgical.jpg',
  'Disposable Retrieval Devices':
    '/disposable%20retrieval%20devices%20-%20surgical.jpg',
  'Disposable Suction & Irrigation Devices':
    '/disposable%20suction%20irrigation%20devices%20%20-%20surgical.jpg',
  'Sterile Negative Pressure Suction Set':
    '/sterile-negative-pressure-suction-set.png',

  // ── Imaging ───────────────────────────────────────────────────────────────
  'X-Ray':
    '/x-ray-imaging-brownier.jfif',
  'Fluoroscopy':
    '/flouroscopy-imaging.jfif',
  'CT Scan':
    '/NeuViz%20Epoch%2B%20CT%20SCAN-imaging.jpg',
  'MRI':
    '/NeuMR%20Universal-imaging.jpg',

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
  'Integrated Dental Unit':
    '/integrated%20dental%20unit-dental.png',
  'Dental X-Ray':
    '/dental%20x-ray.jpg',
  'Digital Sensor':
    '/digital%20sensor-dental.png',
  'Autoclave 53L':
    '/Autoclave-53L%20-%20Runyes.jfif',
  'CBCT':
    '/cbct-dental.jfif',
  '2D OPG':
    '/2d-opg-dental.jfif',
  'UP 3D Dental Digital Laboratory':
    '/UP3D-Dental.jpg',
};

const fallbackImage =
  'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=800&q=80';

function getImage(itemName: string): string {
  return itemImages[itemName] ?? fallbackImage;
}

function getGridCols(count: number): string {
  if (count === 1) return 'grid-cols-1';
  if (count === 2) return 'grid-cols-2';
  if (count === 3) return 'grid-cols-2 md:grid-cols-3';
  return 'grid-cols-2 md:grid-cols-4';
}

export function Products() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState<SelectedItem | null>(null);

  const categories = useMemo(
    () => technologyEquipmentIndex.map((group) => group.name),
    []
  );

  const filteredGroups = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return technologyEquipmentIndex
      .filter((group) => activeCategory === 'all' || group.name === activeCategory)
      .map((group) => ({
        ...group,
        items: q
          ? group.items.filter(
              (item) =>
                item.toLowerCase().includes(q) || group.name.toLowerCase().includes(q)
            )
          : group.items,
      }))
      .filter((group) => group.items.length > 0);
  }, [activeCategory, searchQuery]);

  const totalItems = useMemo(
    () => technologyEquipmentIndex.reduce((acc, g) => acc + g.items.length, 0),
    []
  );

  const filteredCount = useMemo(
    () => filteredGroups.reduce((acc, g) => acc + g.items.length, 0),
    [filteredGroups]
  );

  return (
    <div className="bg-white min-h-screen">

      {/* ── HERO ── */}
      <section className="relative pt-40 pb-20 bg-ink-950 overflow-hidden grain">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=2400&q=80"
            alt=""
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/75 to-ink-950/55" />
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

      {/* ── STICKY CATEGORY TABS ── */}
      <div className="sticky top-[72px] z-30 bg-white/95 backdrop-blur-md border-b border-ink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === 'all'
                  ? 'bg-ink-950 text-white'
                  : 'bg-white text-ink-700 hover:bg-ink-100 border border-ink-200'
              }`}
            >
              All Categories
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-ink-950 text-white'
                    : 'bg-white text-ink-700 hover:bg-ink-100 border border-ink-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <section className="py-10 pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

            {/* ── SIDEBAR ── */}
            <aside className="lg:col-span-3">
              <div className="bg-white border border-paper-300 rounded-3xl p-5 lg:sticky lg:top-28 space-y-5">
                <div>
                  <h2 className="font-display text-xl text-ink-900">Search Catalog</h2>
                  <p className="text-sm text-ink-500 mt-1">Filter by item name or category.</p>
                </div>

                <div>
                  <label className="text-xs uppercase tracking-widest text-ink-500 font-semibold">
                    Search
                  </label>
                  <div className="relative mt-2">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-400" size={16} />
                    <input
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search equipment…"
                      className="w-full pl-10 pr-9 py-2.5 rounded-xl bg-white border border-paper-300 text-sm focus:outline-none focus:ring-2 focus:ring-signal-400"
                    />
                    {searchQuery && (
                      <button
                        onClick={() => setSearchQuery('')}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-400 hover:text-ink-700"
                      >
                        <X size={14} />
                      </button>
                    )}
                  </div>
                </div>

                <button
                  onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
                  className="w-full rounded-xl border border-ink-200 py-2.5 text-sm font-medium text-ink-600 hover:text-ink-900 transition-colors"
                >
                  Reset Filters
                </button>

                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-paper-50 border border-paper-300 p-3 text-center">
                    <div className="font-mono text-[10px] uppercase tracking-wider text-ink-500">Total</div>
                    <div className="font-display text-3xl text-ink-900">{totalItems}</div>
                  </div>
                  <div className="rounded-2xl bg-paper-50 border border-paper-300 p-3 text-center">
                    <div className="font-mono text-[10px] uppercase tracking-wider text-ink-500">Shown</div>
                    <div className="font-display text-3xl text-ink-900">{filteredCount}</div>
                  </div>
                </div>

                <div className="rounded-2xl bg-ink-950 p-4">
                  <p className="text-xs text-white/70 leading-relaxed mb-3">
                    Don't see what you need? We procure any medical equipment on request.
                  </p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-signal-300 hover:text-signal-200 transition-colors"
                  >
                    Contact us <ArrowUpRight size={12} />
                  </Link>
                </div>
              </div>
            </aside>

            {/* ── CATALOG GROUPS ── */}
            <div className="lg:col-span-9 space-y-8">
              <p className="text-sm text-ink-500 font-mono">
                {filteredCount} {filteredCount === 1 ? 'item' : 'items'} across{' '}
                {filteredGroups.length} {filteredGroups.length === 1 ? 'category' : 'categories'}
              </p>

              {filteredGroups.length === 0 ? (
                <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-ink-200">
                  <h3 className="font-display text-2xl text-ink-900 mb-2">No matching equipment</h3>
                  <p className="text-ink-500">Try broadening your search or selecting another category.</p>
                </div>
              ) : (
                filteredGroups.map((group, i) => {
                  const imageItems = group.items.slice(0, 4);
                  const listItems = group.items.slice(4);
                  const gridCols = getGridCols(imageItems.length);

                  return (
                    <motion.article
                      key={group.name}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="rounded-3xl border border-paper-300 bg-white overflow-hidden"
                    >
                      {/* Category header */}
                      <div className="flex items-center justify-between px-6 pt-6 pb-5 border-b border-paper-200">
                        <div>
                          <h3 className="font-display text-2xl text-ink-900">{group.name}</h3>
                          <p className="text-sm text-ink-500 mt-0.5">
                            {group.items.length} {group.items.length === 1 ? 'product' : 'products'} available
                          </p>
                        </div>
                        <span className="font-mono text-xs px-3 py-1 rounded-full bg-ink-50 border border-ink-100 text-ink-500 uppercase">
                          {group.name}
                        </span>
                      </div>

                      {/* Image grid — first 4 items */}
                      <div className={`grid ${gridCols} gap-px bg-paper-200`}>
                        {imageItems.map((item) => {
                          const imageUrl = getImage(item);
                          return (
                            <button
                              key={`${group.name}-img-${item}`}
                              type="button"
                              onClick={() => setSelectedItem({ category: group.name, name: item, imageUrl })}
                              className="group relative aspect-[4/3] overflow-hidden bg-ink-100 text-left"
                            >
                              <img
                                src={imageUrl}
                                alt={item}
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

                      {/* Remaining items as chip list */}
                      {listItems.length > 0 && (
                        <div className="px-6 py-4 border-t border-paper-200">
                          <p className="text-xs font-mono uppercase tracking-wider text-ink-400 mb-3">
                            Also available
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {listItems.map((item) => (
                              <div
                                key={`${group.name}-list-${item}`}
                                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-paper-300 bg-paper-50 text-sm text-ink-700"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-signal-500 shrink-0" />
                                <span>{item}</span>
                                <Link
                                  to="/contact"
                                  className="text-xs text-ink-400 hover:text-ink-700 transition-colors ml-0.5"
                                  title="Request quote"
                                >
                                  <ArrowUpRight size={11} />
                                </Link>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Footer: Download catalogue + Quote CTA */}
                      <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 border-t border-paper-200 bg-paper-50">
                        <a
                          href={`/catalogues/${group.name.toLowerCase()}-catalogue.pdf`}
                          className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-ink-950 hover:bg-ink-800 text-white text-sm font-semibold transition-colors"
                          onClick={(e) => {
                            e.preventDefault();
                            window.location.href = `/contact?catalogue=${encodeURIComponent(group.name)}`;
                          }}
                        >
                          <Download size={14} />
                          Download {group.name} Catalogue
                        </a>
                        <Link
                          to="/contact"
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-600 hover:text-ink-900 transition-colors"
                        >
                          Request a quote <ArrowUpRight size={14} />
                        </Link>
                      </div>
                    </motion.article>
                  );
                })
              )}

              {/* Bottom CTA */}
              <div className="rounded-3xl bg-ink-950 p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <p className="font-mono text-xs tracking-[0.2em] text-signal-300 uppercase mb-2">
                    Need something specific?
                  </p>
                  <h3 className="font-display text-2xl md:text-3xl font-light text-white leading-tight">
                    Don't see the equipment you need? We procure anything on request.
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
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-ink-950 text-white text-sm font-semibold"
                    onClick={() => setSelectedItem(null)}
                  >
                    Request Quote <ArrowUpRight size={13} />
                  </Link>
                  <a
                    href={`/catalogues/${selectedItem.category.toLowerCase()}-catalogue.pdf`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-paper-300 text-sm font-medium text-ink-700 hover:bg-paper-50 transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = `/contact?catalogue=${encodeURIComponent(selectedItem.category)}`;
                      setSelectedItem(null);
                    }}
                  >
                    <FileText size={13} />
                    Download Catalogue
                  </a>
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
