import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowUpRight } from 'lucide-react';
import { technologyEquipmentIndex } from '../data/catalog';

interface EquipmentRow {
  category: string;
  name: string;
  imageUrl?: string;
}

const categoryImageMap: Record<string, string[]> = {
  'Operating Theatre Equipment': [
    // Anaesthesia Machine
    'https://images.pexels.com/photos/3845126/pexels-photo-3845126.jpeg?auto=compress&w=600&q=80',
    // Ventilator
    'https://images.pexels.com/photos/3844581/pexels-photo-3844581.jpeg?auto=compress&w=600&q=80',
    // Defibrillator
    'https://images.pexels.com/photos/305568/pexels-photo-305568.jpeg?auto=compress&w=600&q=80'
  ],
  'OB/GYN Equipment': [
    // Fetal Doppler
    'https://images.pexels.com/photos/7088536/pexels-photo-7088536.jpeg?auto=compress&w=600&q=80',
    // Fetal Monitor
    'https://images.pexels.com/photos/7089337/pexels-photo-7089337.jpeg?auto=compress&w=600&q=80',
    // Colposcope
    'https://images.pexels.com/photos/7089406/pexels-photo-7089406.jpeg?auto=compress&w=600&q=80'
  ],
  'Diagnostic Equipment': [
    // Vascular Doppler Detector
    'https://images.pexels.com/photos/7089407/pexels-photo-7089407.jpeg?auto=compress&w=600&q=80',
    // Ultrasound Scanner
    'https://images.pexels.com/photos/7088537/pexels-photo-7088537.jpeg?auto=compress&w=600&q=80',
    // Ophthalmic Ultrasound
    'https://images.pexels.com/photos/7089408/pexels-photo-7089408.jpeg?auto=compress&w=600&q=80'
  ],
  'Sterilizer (Autoclave)': [
    'https://static.wixstatic.com/media/1d7592_93821719805c4de1a06ba1b1baeda2c3~mv2.jpg/v1/fill/w_240,h_135,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/sterilizerjpg.jpg',
    'https://static.wixstatic.com/media/1d7592_93821719805c4de1a06ba1b1baeda2c3~mv2.jpg/v1/fill/w_240,h_135,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/sterilizerjpg.jpg',
    'https://static.wixstatic.com/media/1d7592_93821719805c4de1a06ba1b1baeda2c3~mv2.jpg/v1/fill/w_240,h_135,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/sterilizerjpg.jpg'
  ],
  'Laboratory Equipment': [
    'https://static.wixstatic.com/media/1d7592_ec2ac61a2b3d4b1794ea8b9ef4795a81~mv2.jpg/v1/fill/w_240,h_135,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/laboratory.jpg',
    'https://static.wixstatic.com/media/1d7592_ec2ac61a2b3d4b1794ea8b9ef4795a81~mv2.jpg/v1/fill/w_240,h_135,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/laboratory.jpg',
    'https://static.wixstatic.com/media/1d7592_ec2ac61a2b3d4b1794ea8b9ef4795a81~mv2.jpg/v1/fill/w_240,h_135,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/laboratory.jpg'
  ],
  'X-ray Series': [
    'https://static.wixstatic.com/media/1d7592_f8861afa587d48a8bf112368530f7923~mv2.jpg/v1/fill/w_147,h_98,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/x-ray.jpg',
    'https://static.wixstatic.com/media/1d7592_f8861afa587d48a8bf112368530f7923~mv2.jpg/v1/fill/w_147,h_98,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/x-ray.jpg',
    'https://static.wixstatic.com/media/1d7592_f8861afa587d48a8bf112368530f7923~mv2.jpg/v1/fill/w_147,h_98,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/x-ray.jpg'
  ],
  'In-Vitro Diagnostics': [
    'https://static.wixstatic.com/media/1d7592_5397c86e049b46a49dc660b38b1244ca~mv2.jpg/v1/fill/w_147,h_98,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/in-vitro.jpg',
    'https://static.wixstatic.com/media/1d7592_5397c86e049b46a49dc660b38b1244ca~mv2.jpg/v1/fill/w_147,h_98,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/in-vitro.jpg',
    'https://static.wixstatic.com/media/1d7592_5397c86e049b46a49dc660b38b1244ca~mv2.jpg/v1/fill/w_147,h_98,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/in-vitro.jpg'
  ],
  'Hemodialysis Equipment': [
    'https://static.wixstatic.com/media/8607c7_031c044842174d55b1a6fd1343897d8d~mv2.jpg/v1/fill/w_147,h_98,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/medical-salon-ready-chemotherapy-treatment.jpg',
    'https://static.wixstatic.com/media/8607c7_031c044842174d55b1a6fd1343897d8d~mv2.jpg/v1/fill/w_147,h_98,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/medical-salon-ready-chemotherapy-treatment.jpg',
    'https://static.wixstatic.com/media/8607c7_031c044842174d55b1a6fd1343897d8d~mv2.jpg/v1/fill/w_147,h_98,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/medical-salon-ready-chemotherapy-treatment.jpg'
  ],
  'Hospital Furniture': [
    'https://static.wixstatic.com/media/1d7592_beec64b8ec0d4323a93349674366de1c~mv2.jpg/v1/fill/w_147,h_83,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/hospital%20bed.jpg',
    'https://static.wixstatic.com/media/1d7592_beec64b8ec0d4323a93349674366de1c~mv2.jpg/v1/fill/w_147,h_83,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/hospital%20bed.jpg',
    'https://static.wixstatic.com/media/1d7592_beec64b8ec0d4323a93349674366de1c~mv2.jpg/v1/fill/w_147,h_83,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/hospital%20bed.jpg'
  ],
  'Walking Aids': [
    'https://static.wixstatic.com/media/1d7592_c0a21e20766e46cba9bd96dd78844f5b~mv2.jpg/v1/fill/w_147,h_98,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/walk%20aids.jpg',
    'https://static.wixstatic.com/media/1d7592_c0a21e20766e46cba9bd96dd78844f5b~mv2.jpg/v1/fill/w_147,h_98,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/walk%20aids.jpg',
    'https://static.wixstatic.com/media/1d7592_c0a21e20766e46cba9bd96dd78844f5b~mv2.jpg/v1/fill/w_147,h_98,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/walk%20aids.jpg'
  ],
  'First-Aid Products': [
    'https://static.wixstatic.com/media/1d7592_10b04f1896164ed091b32e0a349c0b4e~mv2.jpg/v1/crop/x_0,y_857,w_4907,h_2762/fill/w_147,h_83,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/first-aid.jpg',
    'https://static.wixstatic.com/media/1d7592_10b04f1896164ed091b32e0a349c0b4e~mv2.jpg/v1/crop/x_0,y_857,w_4907,h_2762/fill/w_147,h_83,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/first-aid.jpg',
    'https://static.wixstatic.com/media/1d7592_10b04f1896164ed091b32e0a349c0b4e~mv2.jpg/v1/crop/x_0,y_857,w_4907,h_2762/fill/w_147,h_83,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/first-aid.jpg'
  ],
  'Medical Human Model': [
    'https://static.wixstatic.com/media/1d7592_3e5fbcb8698b42b0b5f27fefbaf2b7d7~mv2.jpg/v1/fill/w_147,h_98,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/model.jpg',
    'https://static.wixstatic.com/media/1d7592_3e5fbcb8698b42b0b5f27fefbaf2b7d7~mv2.jpg/v1/fill/w_147,h_98,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/model.jpg',
    'https://static.wixstatic.com/media/1d7592_3e5fbcb8698b42b0b5f27fefbaf2b7d7~mv2.jpg/v1/fill/w_147,h_98,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/model.jpg'
  ],
  'Ophthalmic Equipment': [
    'https://static.wixstatic.com/media/1d7592_7340be8957344a489a6555ae6f9794ba~mv2.jpg/v1/fill/w_147,h_98,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/optimo.jpg',
    'https://static.wixstatic.com/media/1d7592_7340be8957344a489a6555ae6f9794ba~mv2.jpg/v1/fill/w_147,h_98,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/optimo.jpg',
    'https://static.wixstatic.com/media/1d7592_7340be8957344a489a6555ae6f9794ba~mv2.jpg/v1/fill/w_147,h_98,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/optimo.jpg'
  ],
  'Dental Equipment': [
    'https://static.wixstatic.com/media/11062b_ba5e3a2b0bf54f568e207bb681d345ff~mv2.jpg/v1/fill/w_147,h_98,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/Dentist%20Chair.jpg',
    'https://static.wixstatic.com/media/11062b_ba5e3a2b0bf54f568e207bb681d345ff~mv2.jpg/v1/fill/w_147,h_98,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/Dentist%20Chair.jpg',
    'https://static.wixstatic.com/media/11062b_ba5e3a2b0bf54f568e207bb681d345ff~mv2.jpg/v1/fill/w_147,h_98,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/Dentist%20Chair.jpg'
  ],
  'ENT Equipment': [
    'https://static.wixstatic.com/media/8607c7_89ff95ab0cc44bf6a27a59a612ef56fc~mv2.jpg/v1/fill/w_147,h_98,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/medical-stethoscope-white-surface.jpg',
    'https://static.wixstatic.com/media/8607c7_89ff95ab0cc44bf6a27a59a612ef56fc~mv2.jpg/v1/fill/w_147,h_98,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/medical-stethoscope-white-surface.jpg',
    'https://static.wixstatic.com/media/8607c7_89ff95ab0cc44bf6a27a59a612ef56fc~mv2.jpg/v1/fill/w_147,h_98,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/medical-stethoscope-white-surface.jpg'
  ],
  'Home Care Equipment': [
    'https://static.wixstatic.com/media/11062b_bc1fa5955b4d457892efb751a0588eb0~mv2.jpeg/v1/fill/w_147,h_98,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/Blood%20Pressure.jpeg',
    'https://static.wixstatic.com/media/11062b_bc1fa5955b4d457892efb751a0588eb0~mv2.jpeg/v1/fill/w_147,h_98,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/Blood%20Pressure.jpeg',
    'https://static.wixstatic.com/media/11062b_bc1fa5955b4d457892efb751a0588eb0~mv2.jpeg/v1/fill/w_147,h_98,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/Blood%20Pressure.jpeg'
  ],
  'Veterinary Equipment': [
    'https://static.wixstatic.com/media/8607c7_ed7d42106d7f4a64be1c5cf67860aaa5~mv2.jpg/v1/fill/w_147,h_98,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/close-up-veterinarian-taking-care-dog.jpg',
    'https://static.wixstatic.com/media/8607c7_ed7d42106d7f4a64be1c5cf67860aaa5~mv2.jpg/v1/fill/w_147,h_98,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/close-up-veterinarian-taking-care-dog.jpg',
    'https://static.wixstatic.com/media/8607c7_ed7d42106d7f4a64be1c5cf67860aaa5~mv2.jpg/v1/fill/w_147,h_98,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/close-up-veterinarian-taking-care-dog.jpg'
  ],
  'Medical Consumables': [
    'https://static.wixstatic.com/media/8607c7_f44d37b3e5ee41dca5d6fdbb2dc9fc5c~mv2.jpg/v1/fill/w_147,h_98,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/open-first-aid-kit-with-medical-equipments-blue-background.jpg',
    'https://static.wixstatic.com/media/8607c7_f44d37b3e5ee41dca5d6fdbb2dc9fc5c~mv2.jpg/v1/fill/w_147,h_98,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/open-first-aid-kit-with-medical-equipments-blue-background.jpg',
    'https://static.wixstatic.com/media/8607c7_f44d37b3e5ee41dca5d6fdbb2dc9fc5c~mv2.jpg/v1/fill/w_147,h_98,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/open-first-aid-kit-with-medical-equipments-blue-background.jpg'
  ]
};

function getCategoryImage(category: string) {
  return getCategoryImages(category)[0];
}

function getCategoryImages(category: string) {
  return (
    categoryImageMap[category] ??
    [
      'https://static.wixstatic.com/media/8607c7_47676f0c1f584960819144d9d6dd6450~mv2.jpg/v1/fill/w_147,h_98,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/interior-view-operating-room.jpg',
      'https://static.wixstatic.com/media/8607c7_47676f0c1f584960819144d9d6dd6450~mv2.jpg/v1/fill/w_147,h_98,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/interior-view-operating-room.jpg',
      'https://static.wixstatic.com/media/8607c7_47676f0c1f584960819144d9d6dd6450~mv2.jpg/v1/fill/w_147,h_98,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/interior-view-operating-room.jpg'
    ]
  );
}


// Custom descriptions for the first 3 equipment
const customDescriptions: Record<string, Record<string, string>> = {
  'Operating Theatre Equipment': {
    'Anaesthesia Machine': 'A modern anaesthesia machine designed for safe and precise delivery of anesthetic gases during surgery.',
    'Ventilator': 'Advanced ventilator providing critical respiratory support for patients in operating rooms and intensive care units.',
    'Defibrillator': 'Reliable defibrillator for rapid response to cardiac emergencies, ensuring patient safety during procedures.'
  }
  // Add more categories/items as needed
};

function getCustomDescription(category: string, name: string) {
  if (customDescriptions[category] && customDescriptions[category][name]) {
    return customDescriptions[category][name];
  }
  return 'Contact our team for configuration, availability, and detailed specifications.';
}

export function Products() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState<EquipmentRow | null>(null);

  const categories = useMemo(
    () => technologyEquipmentIndex.map((group) => group.name),
    []
  );

  const filteredRows = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();

    return technologyEquipmentIndex
      .filter((group) => activeCategory === 'all' || group.name === activeCategory)
      .flatMap((group) =>
        group.items
          .filter((item) => {
            if (!q) return true;
            return item.toLowerCase().includes(q) || group.name.toLowerCase().includes(q);
          })
          .map<EquipmentRow>((item) => ({
            category: group.name,
            name: item
          }))
      );
  }, [activeCategory, searchQuery]);

  const groupedRows = useMemo(() => {
    const grouped: Record<string, string[]> = {};

    filteredRows.forEach((row) => {
      if (!grouped[row.category]) {
        grouped[row.category] = [];
      }
      grouped[row.category].push(row.name);
    });

    return Object.entries(grouped).map(([name, items]) => ({ name, items }));
  }, [filteredRows]);

  const totalItems = useMemo(
    () => technologyEquipmentIndex.reduce((count, group) => count + group.items.length, 0),
    []
  );

  return (
    <div className="bg-white min-h-screen">
      <section className="relative pt-40 pb-16 bg-ink-950 overflow-hidden grain">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=2400&q=80"
            alt=""
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/75 to-ink-950/55" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-signal-300 mb-4">MITDASH Technology Catalog</p>
          {/* Heading and description removed as requested */}
        </div>
      </section>

      <div className="sticky top-[72px] z-30 bg-white/95 backdrop-blur-md border-b border-ink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
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

      <section className="py-10 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <aside className="lg:col-span-3 bg-white border border-paper-300 rounded-3xl p-5 h-fit lg:sticky lg:top-28">
              <div className="mb-5">
                <h2 className="font-display text-2xl text-ink-900">Search Catalog</h2>
                <p className="text-sm text-ink-500">Filter by item name or category.</p>
              </div>

              <div>
                <label className="text-xs uppercase tracking-widest text-ink-500 font-semibold">Search</label>
                <div className="relative mt-2">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-400" size={16} />
                  <input
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search equipment"
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
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                }}
                className="mt-5 w-full rounded-xl border border-ink-200 py-2.5 text-sm font-medium text-ink-600 hover:text-ink-900"
              >
                Reset Filters
              </button>

              <div className="mt-6 rounded-2xl bg-white border border-paper-300 p-4">
                <div className="font-mono text-xs uppercase tracking-wider text-ink-500">Indexed Equipment</div>
                <div className="font-display text-3xl text-ink-900">{totalItems}</div>
              </div>
            </aside>

            <div className="lg:col-span-9">
              <div className="mb-5">
                <p className="text-sm text-ink-500 font-mono">
                  {filteredRows.length} {filteredRows.length === 1 ? 'item' : 'items'} shown
                </p>
              </div>

              {groupedRows.length === 0 ? (
                <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-ink-200">
                  <h3 className="font-display text-2xl text-ink-900 mb-2">No matching equipment</h3>
                  <p className="text-ink-500">Try broadening your search or selecting another category.</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {groupedRows.map((group, i) => (
                    <motion.article
                      key={group.name}
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.03 }}
                      className="rounded-2xl border border-paper-300 bg-white p-5"
                    >
                      <h3 className="font-display text-2xl text-ink-900 mb-4">{group.name}</h3>
                      <div className="mb-4 grid gap-3 md:grid-cols-3">
                        {group.items.slice(0, 3).map((item, imageIndex) => {
                          const imageUrl = getCategoryImages(group.name)[imageIndex] ?? getCategoryImage(group.name);

                          return (
                            <button
                              key={`${group.name}-image-${item}`}
                              type="button"
                              onClick={() =>
                                setSelectedItem({
                                  category: group.name,
                                  name: item,
                                  imageUrl
                                })
                              }
                              className="group relative rounded-xl overflow-hidden border border-paper-300 bg-white aspect-[4/3] text-left"
                            >
                              <img
                                src={imageUrl}
                                alt={item}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/55 to-transparent" />
                              <div className="absolute inset-x-0 bottom-0 p-4">
                                <div className="text-white font-semibold leading-tight mb-1">{item}</div>
                                <div className="text-white/75 text-xs leading-relaxed">

                                </div>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {group.items.slice(3).map((item) => (
                          <div
                            key={`${group.name}-${item}`}
                            className="rounded-xl border border-paper-300 bg-white p-3 flex items-center justify-between gap-2"
                          >
                            <span className="text-sm text-ink-800 leading-snug">{item}</span>
                            <div className="shrink-0 flex items-center gap-2">
                              <Link
                                to="/contact"
                                className="inline-flex items-center gap-1 text-xs font-semibold text-ink-700 hover:text-ink-900"
                              >
                                Quote <ArrowUpRight size={12} />
                              </Link>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.article>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-ink-950/80 backdrop-blur-sm p-4 overflow-y-auto"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.98 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-3xl mx-auto my-8 rounded-3xl overflow-hidden bg-white border border-paper-300"
            >
              <div className="bg-white aspect-[16/9]">
                <img
                  src={selectedItem.imageUrl ?? getCategoryImage(selectedItem.category)}
                  alt={selectedItem.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 md:p-8">
                <div className="font-mono text-[11px] uppercase tracking-widest text-ink-500 mb-3">
                  {selectedItem.category}
                </div>
                <h2 className="font-display text-3xl text-ink-900 mb-3">{selectedItem.name}</h2>

                <div className="flex flex-wrap gap-3">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-ink-950 text-white text-sm font-medium"
                    onClick={() => setSelectedItem(null)}
                  >
                    Request Quote <ArrowUpRight size={13} />
                  </Link>
                  <button
                    type="button"
                    onClick={() => setSelectedItem(null)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-paper-300 text-sm font-medium text-ink-700"
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
