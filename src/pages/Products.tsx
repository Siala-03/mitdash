import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Search,
  X,
  ArrowUpRight,
  Activity,
  Stethoscope,
  Microscope,
  HeartPulse,
  LayoutGrid,
  Rows3,
  Scale,
  CheckCircle2
} from 'lucide-react';
import { categories, products, Product, technologyEquipmentIndex } from '../data/catalog';

const iconMap: Record<string, React.ReactNode> = {
  Activity: <Activity size={18} />,
  Stethoscope: <Stethoscope size={18} />,
  Microscope: <Microscope size={18} />,
  HeartPulse: <HeartPulse size={18} />
};

const budgetByCategory: Record<string, string[]> = {
  imaging: ['USD 100k+', 'USD 25k-100k'],
  surgical: ['USD 25k-100k', 'USD 100k+'],
  laboratory: ['Below USD 25k', 'USD 25k-100k'],
  'patient-care': ['Below USD 25k', 'USD 25k-100k']
};

const useCaseByCategory: Record<string, string[]> = {
  imaging: ['Radiology', 'Emergency', 'Cardiology'],
  surgical: ['Operating Theater', 'Minimally Invasive Surgery', 'Sterile Processing'],
  laboratory: ['Routine Diagnostics', 'Microbiology', 'Molecular Testing'],
  'patient-care': ['ICU', 'General Ward', 'Emergency Care']
};

function getProductBudget(product: Product): string[] {
  return budgetByCategory[product.category] ?? ['USD 25k-100k'];
}

function getProductUseCases(product: Product): string[] {
  return useCaseByCategory[product.category] ?? ['General Care'];
}

export function Products() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeSub, setActiveSub] = useState<string>('all');
  const [activeBrand, setActiveBrand] = useState<string>('all');
  const [activeBudget, setActiveBudget] = useState<string>('all');
  const [activeUseCase, setActiveUseCase] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const [selected, setSelected] = useState<Product | null>(null);
  const [compareIds, setCompareIds] = useState<string[]>([]);

  const currentCategory = categories.find((c) => c.slug === activeCategory);
  const subcategoryOptions = currentCategory?.subcategories ?? [];

  const brandOptions = useMemo(() => {
    const scoped = activeCategory === 'all'
      ? products
      : products.filter((item) => item.category === activeCategory);
    return Array.from(new Set(scoped.map((item) => item.brand))).sort();
  }, [activeCategory]);

  const useCaseOptions = useMemo(() => {
    const scoped = activeCategory === 'all'
      ? products
      : products.filter((item) => item.category === activeCategory);
    return Array.from(new Set(scoped.flatMap((item) => getProductUseCases(item))));
  }, [activeCategory]);

  const budgetOptions = ['Below USD 25k', 'USD 25k-100k', 'USD 100k+'];

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchCat = activeCategory === 'all' || p.category === activeCategory;
      const matchSub = activeSub === 'all' || p.subcategory === activeSub;
      const matchBrand = activeBrand === 'all' || p.brand === activeBrand;
      const matchBudget = activeBudget === 'all' || getProductBudget(p).includes(activeBudget);
      const matchUseCase = activeUseCase === 'all' || getProductUseCases(p).includes(activeUseCase);
      const q = searchQuery.trim().toLowerCase();
      const matchSearch =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.subcategory.toLowerCase().includes(q);

      return matchCat && matchSub && matchBrand && matchBudget && matchUseCase && matchSearch;
    });
  }, [activeCategory, activeSub, activeBrand, activeBudget, activeUseCase, searchQuery]);

  const compareProducts = useMemo(
    () => products.filter((item) => compareIds.includes(item.id)),
    [compareIds]
  );

  const totalInventoryItems = useMemo(
    () => technologyEquipmentIndex.reduce((count, group) => count + group.items.length, 0),
    []
  );

  const filteredInventory = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) {
      return technologyEquipmentIndex;
    }

    return technologyEquipmentIndex
      .map((group) => ({
        ...group,
        items: group.items.filter((item) => item.toLowerCase().includes(q))
      }))
      .filter((group) => group.items.length > 0 || group.name.toLowerCase().includes(q));
  }, [searchQuery]);

  const resetCategory = (slug: string) => {
    setActiveCategory(slug);
    setActiveSub('all');
    setActiveBrand('all');
    setActiveUseCase('all');
    setActiveBudget('all');
  };

  const toggleCompare = (productId: string) => {
    setCompareIds((prev) => {
      if (prev.includes(productId)) {
        return prev.filter((id) => id !== productId);
      }
      if (prev.length >= 3) {
        return prev;
      }
      return [...prev, productId];
    });
  };

  return (
    <div className="bg-paper-100 min-h-screen">
      <section className="relative pt-40 pb-16 bg-ink-950 overflow-hidden grain">
        <div className="absolute inset-0 z-0">
          <img
            src={
              currentCategory?.hero ??
              'https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&w=2400&q=80'
            }
            alt=""
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/70 to-ink-950/50" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-signal-300 mb-4">Smart Discovery Catalog</p>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-white leading-[1.05] mb-5">
              Filter fast. Compare clearly. Procure confidently.
            </h1>
            <p className="text-white/75 text-lg max-w-2xl">
              Explore certified equipment by department, brand, budget, and clinical use case. Build a shortlist and request a tailored quote in one flow.
            </p>
          </div>
        </div>
      </section>

      <div className="sticky top-[72px] z-30 bg-paper-100/95 backdrop-blur-md border-b border-ink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 -mb-2">
            <button
              onClick={() => resetCategory('all')}
              className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === 'all' ? 'bg-ink-950 text-white' : 'bg-paper-200 text-ink-700 hover:bg-paper-300'}`}
            >
              All Products
            </button>
            {categories.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => resetCategory(cat.slug)}
                className={`shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === cat.slug ? 'bg-ink-950 text-white' : 'bg-paper-200 text-ink-700 hover:bg-paper-300'}`}
              >
                <span className={activeCategory === cat.slug ? 'text-signal-400' : 'text-ink-500'}>{iconMap[cat.icon]}</span>
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      <section className="py-10 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <aside className="lg:col-span-3 bg-white border border-paper-300 rounded-3xl p-5 h-fit lg:sticky lg:top-28">
              <div className="mb-5">
                <h2 className="font-display text-2xl text-ink-900">Filters</h2>
                <p className="text-sm text-ink-500">Narrow by procurement constraints.</p>
              </div>

              <div className="space-y-5">
                <div>
                  <label className="text-xs uppercase tracking-widest text-ink-500 font-semibold">Search</label>
                  <div className="relative mt-2">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-400" size={16} />
                    <input
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Product, brand, or type"
                      className="w-full pl-10 pr-9 py-2.5 rounded-xl bg-paper-50 border border-paper-300 text-sm focus:outline-none focus:ring-2 focus:ring-signal-400"
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

                {subcategoryOptions.length > 0 && (
                  <div>
                    <label className="text-xs uppercase tracking-widest text-ink-500 font-semibold">Subcategory</label>
                    <select
                      value={activeSub}
                      onChange={(e) => setActiveSub(e.target.value)}
                      className="mt-2 w-full px-3 py-2.5 rounded-xl border border-paper-300 bg-white text-sm"
                    >
                      <option value="all">All</option>
                      {subcategoryOptions.map((sub) => (
                        <option key={sub} value={sub}>{sub}</option>
                      ))}
                    </select>
                  </div>
                )}

                <div>
                  <label className="text-xs uppercase tracking-widest text-ink-500 font-semibold">Brand</label>
                  <select
                    value={activeBrand}
                    onChange={(e) => setActiveBrand(e.target.value)}
                    className="mt-2 w-full px-3 py-2.5 rounded-xl border border-paper-300 bg-white text-sm"
                  >
                    <option value="all">All Brands</option>
                    {brandOptions.map((brand) => (
                      <option key={brand} value={brand}>{brand}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-xs uppercase tracking-widest text-ink-500 font-semibold">Budget</label>
                  <select
                    value={activeBudget}
                    onChange={(e) => setActiveBudget(e.target.value)}
                    className="mt-2 w-full px-3 py-2.5 rounded-xl border border-paper-300 bg-white text-sm"
                  >
                    <option value="all">All ranges</option>
                    {budgetOptions.map((budget) => (
                      <option key={budget} value={budget}>{budget}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-xs uppercase tracking-widest text-ink-500 font-semibold">Clinical Use Case</label>
                  <select
                    value={activeUseCase}
                    onChange={(e) => setActiveUseCase(e.target.value)}
                    className="mt-2 w-full px-3 py-2.5 rounded-xl border border-paper-300 bg-white text-sm"
                  >
                    <option value="all">All use cases</option>
                    {useCaseOptions.map((useCase) => (
                      <option key={useCase} value={useCase}>{useCase}</option>
                    ))}
                  </select>
                </div>

                <button
                  onClick={() => {
                    setSearchQuery('');
                    setActiveCategory('all');
                    setActiveSub('all');
                    setActiveBrand('all');
                    setActiveBudget('all');
                    setActiveUseCase('all');
                  }}
                  className="w-full rounded-xl border border-ink-200 py-2.5 text-sm font-medium text-ink-600 hover:text-ink-900"
                >
                  Reset All Filters
                </button>
              </div>
            </aside>

            <div className="lg:col-span-9">
              <div className="flex items-center justify-between mb-5">
                <p className="text-sm text-ink-500 font-mono">{filtered.length} {filtered.length === 1 ? 'result' : 'results'}</p>
                <div className="flex bg-paper-200 rounded-full p-1">
                  <button onClick={() => setView('grid')} className={`p-1.5 rounded-full ${view === 'grid' ? 'bg-white text-ink-900 shadow-sm' : 'text-ink-500'}`}>
                    <LayoutGrid size={14} />
                  </button>
                  <button onClick={() => setView('list')} className={`p-1.5 rounded-full ${view === 'list' ? 'bg-white text-ink-900 shadow-sm' : 'text-ink-500'}`}>
                    <Rows3 size={14} />
                  </button>
                </div>
              </div>

              {filtered.length === 0 ? (
                <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-ink-200">
                  <h3 className="font-display text-2xl text-ink-900 mb-2">No matching products</h3>
                  <p className="text-ink-500">Try broadening your filters or clearing your search.</p>
                </div>
              ) : (
                <div className={view === 'grid' ? 'grid sm:grid-cols-2 gap-5' : 'flex flex-col gap-4'}>
                  <AnimatePresence mode="popLayout">
                    {filtered.map((p, i) => (
                      <motion.div
                        key={p.id}
                        layout
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ delay: i * 0.02 }}
                        className={`group rounded-2xl border border-paper-300 bg-paper-50 overflow-hidden ${view === 'grid' ? '' : 'md:flex'}`}
                      >
                        <div className={`relative bg-paper-200 ${view === 'grid' ? 'aspect-[4/3]' : 'md:w-72 shrink-0 aspect-[4/3]'}`}>
                          <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                          <button
                            type="button"
                            onClick={() => toggleCompare(p.id)}
                            className={`absolute top-3 right-3 inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-[11px] font-semibold ${compareIds.includes(p.id) ? 'bg-ink-950 text-white' : 'bg-white/90 text-ink-700'}`}
                          >
                            {compareIds.includes(p.id) ? <CheckCircle2 size={12} /> : <Scale size={12} />}
                            {compareIds.includes(p.id) ? 'Added' : 'Compare'}
                          </button>
                        </div>
                        <div className="p-5 flex flex-col flex-1">
                          <div className="font-mono text-[10px] uppercase tracking-widest text-ink-500 mb-2">{p.brand} · {p.subcategory}</div>
                          <h3 className="font-display text-xl text-ink-900 mb-2">{p.name}</h3>
                          <p className="text-sm text-ink-600 line-clamp-2 mb-4">{p.description}</p>
                          <div className="flex flex-wrap gap-2 mb-5">
                            {getProductBudget(p).map((budget) => (
                              <span key={budget} className="text-[10px] uppercase tracking-wider font-semibold bg-paper-200 text-ink-700 px-2 py-1 rounded-full">{budget}</span>
                            ))}
                            {getProductUseCases(p).slice(0, 2).map((useCase) => (
                              <span key={useCase} className="text-[10px] uppercase tracking-wider font-semibold bg-signal-100 text-signal-900 px-2 py-1 rounded-full">{useCase}</span>
                            ))}
                          </div>
                          <div className="mt-auto flex items-center gap-2">
                            <button
                              type="button"
                              onClick={() => setSelected(p)}
                              className="inline-flex items-center gap-2 bg-ink-950 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-ink-900"
                            >
                              View Specs <ArrowUpRight size={13} />
                            </button>
                            <Link to="/contact" className="inline-flex items-center gap-2 text-sm text-ink-700 hover:text-ink-900">
                              Request Quote
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-paper-300 bg-white p-6 md:p-8">
            <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-ink-500 mb-2">MITDASH Technology Coverage</p>
                <h2 className="font-display text-3xl md:text-4xl text-ink-900">Complete Equipment Index</h2>
                <p className="text-ink-600 mt-2 max-w-3xl">
                  All equipment types listed on MITDASH technology are included below so procurement teams can quickly verify portfolio coverage, even when an image card is not shown yet.
                </p>
              </div>
              <div className="rounded-2xl bg-paper-100 border border-paper-300 px-4 py-3 text-right">
                <div className="font-mono text-xs uppercase tracking-wider text-ink-500">Indexed Equipment</div>
                <div className="font-display text-3xl text-ink-900">{totalInventoryItems}</div>
              </div>
            </div>

            {filteredInventory.length === 0 ? (
              <div className="text-sm text-ink-500 rounded-xl border border-dashed border-paper-300 px-4 py-5">
                No equipment names in the index match your current search.
              </div>
            ) : (
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
                {filteredInventory.map((group) => (
                  <article key={group.name} className="rounded-2xl border border-paper-300 bg-paper-50 p-4">
                    <h3 className="font-semibold text-ink-900 mb-3">{group.name}</h3>
                    <ul className="space-y-1.5">
                      {group.items.map((item) => (
                        <li key={`${group.name}-${item}`} className="text-sm text-ink-700 leading-snug">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-ink-950/80 backdrop-blur-sm p-4 overflow-y-auto"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl mx-auto my-8 rounded-3xl overflow-hidden bg-white border border-paper-300"
            >
              <div className="grid md:grid-cols-2">
                <div className="bg-paper-200">
                  <img src={selected.image} alt={selected.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-7 md:p-9">
                  <div className="font-mono text-[11px] uppercase tracking-widest text-ink-500 mb-3">{selected.brand} · {selected.subcategory}</div>
                  <h2 className="font-display text-3xl text-ink-900 mb-4">{selected.name}</h2>
                  <p className="text-ink-600 mb-6">{selected.description}</p>

                  <div className="border-t border-paper-300 pt-5 mb-6">
                    <h3 className="text-xs uppercase tracking-widest text-ink-500 font-semibold mb-3">Quick Spec Snapshot</h3>
                    <dl className="grid grid-cols-2 gap-x-4 gap-y-3">
                      {selected.specs.map((spec) => (
                        <div key={spec.label}>
                          <dt className="text-xs text-ink-500">{spec.label}</dt>
                          <dd className="text-sm font-semibold text-ink-900">{spec.value}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Link to="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-ink-950 text-white text-sm font-medium">
                      Request Quote <ArrowUpRight size={13} />
                    </Link>
                    <button
                      type="button"
                      onClick={() => toggleCompare(selected.id)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-paper-300 text-sm font-medium text-ink-700"
                    >
                      <Scale size={14} />
                      {compareIds.includes(selected.id) ? 'Remove From Compare' : 'Add To Compare'}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {compareProducts.length > 0 && (
          <motion.div
            initial={{ y: 90, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 90, opacity: 0 }}
            className="fixed bottom-20 md:bottom-6 left-4 right-4 md:left-1/2 md:-translate-x-1/2 md:max-w-4xl z-40"
          >
            <div className="bg-ink-950 text-white rounded-2xl border border-white/10 p-4 md:p-5 shadow-2xl">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <p className="text-sm font-semibold">Comparison Shortlist ({compareProducts.length}/3)</p>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setCompareIds([])}
                    className="text-xs text-white/70 hover:text-white"
                  >
                    Clear
                  </button>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-signal-400 text-ink-950 px-4 py-2 text-xs font-semibold"
                  >
                    Request Comparative Quote <ArrowUpRight size={12} />
                  </Link>
                </div>
              </div>
              <div className="grid gap-3 md:grid-cols-3">
                {compareProducts.map((item) => (
                  <div key={item.id} className="rounded-xl bg-white/5 border border-white/10 p-3">
                    <div className="text-[10px] font-mono text-signal-300 uppercase tracking-widest mb-1">{item.brand}</div>
                    <h4 className="text-sm font-semibold leading-tight mb-2">{item.name}</h4>
                    <p className="text-xs text-white/70">{item.specs[0]?.label}: {item.specs[0]?.value}</p>
                    <p className="text-xs text-white/70">{item.specs[1]?.label}: {item.specs[1]?.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
