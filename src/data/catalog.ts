export interface Product {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  brand: string;
  image: string;
  gallery?: string[];
  description: string;
  specs: {label: string;value: string;}[];
  featured?: boolean;
  tag?: string;
}

export interface Category {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  hero: string;
  icon: string;
  subcategories: string[];
}

export interface EquipmentIndexCategory {
  name: string;
  items: string[];
}

export const categories: Category[] = [
{
  slug: 'imaging',
  name: 'Medical Imaging',
  tagline: 'See the unseen.',
  description:
  'High-resolution diagnostic imaging systems for hospitals, clinics, and field deployment.',
  hero: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=2000&q=80',
  icon: 'Activity',
  subcategories: [
  'MRI',
  'CT Scanners',
  'Ultrasound',
  'Digital X-Ray',
  'Mammography']

},
{
  slug: 'surgical',
  name: 'Surgical Equipment',
  tagline: 'Precision, by design.',
  description:
  'Operating room equipment engineered for performance, safety and clinician ergonomics.',
  hero: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=2000&q=80',
  icon: 'Stethoscope',
  subcategories: [
  'OR Tables',
  'Surgical Lights',
  'Electrosurgery',
  'Endoscopy',
  'Sterilization']

},
{
  slug: 'laboratory',
  name: 'Laboratory & IVD',
  tagline: 'Diagnostics that move.',
  description:
  'Clinical chemistry, hematology, microbiology and molecular diagnostic systems.',
  hero: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=2000&q=80',
  icon: 'Microscope',
  subcategories: [
  'Hematology',
  'Chemistry',
  'Centrifuges',
  'Microscopy',
  'Molecular']

},
{
  slug: 'patient-care',
  name: 'Patient Care & ICU',
  tagline: 'Care without interruption.',
  description:
  'Patient monitoring, respiratory support, and intensive care equipment.',
  hero: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=2000&q=80',
  icon: 'HeartPulse',
  subcategories: [
  'Ventilators',
  'Patient Monitors',
  'Infusion Pumps',
  'ICU Beds',
  'Defibrillators']

}];


export const products: Product[] = [
// IMAGING
{
  id: 'mri-3t',
  name: '3.0T Advanced MRI Suite',
  category: 'imaging',
  subcategory: 'MRI',
  brand: 'Comen',
  image:
  'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80',
  description:
  'High-field 3.0 Tesla magnetic resonance imaging system delivering exceptional anatomical detail across neurological, musculoskeletal, and cardiovascular applications.',
  specs: [
  { label: 'Field Strength', value: '3.0 Tesla' },
  { label: 'Bore Size', value: '70 cm' },
  { label: 'Gradient Strength', value: '80 mT/m' },
  { label: 'Coil Channels', value: '128' }],

  featured: true,
  tag: 'Flagship'
},
{
  id: 'ultrasound-portable',
  name: 'Portable Ultrasound Pro',
  category: 'imaging',
  subcategory: 'Ultrasound',
  brand: 'Brownier',
  image:
  'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=1200&q=80',
  description:
  'Compact, high-performance ultrasound for point-of-care, emergency, and outreach diagnostics with cloud connectivity.',
  specs: [
  { label: 'Display', value: '15" touchscreen' },
  { label: 'Battery', value: '4+ hours' },
  { label: 'Probes', value: 'Up to 3 simultaneous' },
  { label: 'Weight', value: '6.5 kg' }],

  featured: true
},
{
  id: 'xray-digital',
  name: 'Digital X-Ray System DR-X1',
  category: 'imaging',
  subcategory: 'Digital X-Ray',
  brand: 'Neurosoft',
  image:
  'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=1200&q=80',
  description:
  'Floor-mounted digital radiography with ultra-low dose technology and AI-assisted positioning.',
  specs: [
  { label: 'Detector', value: 'Wireless DR' },
  { label: 'Resolution', value: '4288 × 3520' },
  { label: 'Dose Reduction', value: 'Up to 60%' },
  { label: 'Processing', value: '< 2 seconds' }]

},
{
  id: 'ct-128',
  name: '128-Slice CT Scanner',
  category: 'imaging',
  subcategory: 'CT Scanners',
  brand: 'Vatech',
  image:
  'https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&w=1200&q=80',
  description:
  'High-throughput CT with deep learning reconstruction for cardiac, oncology and emergency imaging.',
  specs: [
  { label: 'Slices', value: '128' },
  { label: 'Rotation', value: '0.35 s' },
  { label: 'Bore', value: '78 cm' },
  { label: 'kVp Range', value: '80–135' }],

  tag: 'New'
},

// SURGICAL
{
  id: 'or-table',
  name: 'Ergonomic OR Table OT-700',
  category: 'surgical',
  subcategory: 'OR Tables',
  brand: 'Runyes',
  image:
  'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1200&q=80',
  description:
  'Multi-functional electro-hydraulic operating table for complex surgical procedures.',
  specs: [
  { label: 'Max Load', value: '400 kg' },
  { label: 'Positions', value: 'Trendelenburg ±30°' },
  { label: 'Height Range', value: '60 – 105 cm' },
  { label: 'Power', value: 'Battery + AC' }],

  featured: true
},
{
  id: 'or-lights',
  name: 'LED Surgical Light System',
  category: 'surgical',
  subcategory: 'Surgical Lights',
  brand: 'Medispark',
  image:
  'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=1200&q=80',
  description:
  'Shadowless dual-dome LED surgical lighting with adjustable color temperature.',
  specs: [
  { label: 'Illuminance', value: '160,000 lux' },
  { label: 'Color Temp', value: '3,500 – 5,000 K' },
  { label: 'CRI', value: '> 96' },
  { label: 'Lifetime', value: '50,000 hrs' }]

},
{
  id: 'electrosurg',
  name: 'Electrosurgical Generator ES-400',
  category: 'surgical',
  subcategory: 'Electrosurgery',
  brand: 'Dochem',
  image:
  'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80',
  description:
  'High-frequency electrosurgical unit with vessel sealing and advanced bipolar modes.',
  specs: [
  { label: 'Max Power', value: '400 W' },
  { label: 'Modes', value: '12 surgical modes' },
  { label: 'Display', value: '8" color touch' },
  { label: 'Safety', value: 'REM monitoring' }]

},

// LABORATORY
{
  id: 'hema-analyzer',
  name: 'Auto Hematology Analyzer BC-7500',
  category: 'laboratory',
  subcategory: 'Hematology',
  brand: 'GC Fuji',
  image:
  'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1200&q=80',
  description:
  '5-part differential hematology analyzer with 30+ reportable parameters and reticulocyte channel.',
  specs: [
  { label: 'Throughput', value: '100 samples/hr' },
  { label: 'Parameters', value: '33 reportable' },
  { label: 'Sample Volume', value: '20 µL' },
  { label: 'Auto-loader', value: '50 tubes' }],

  featured: true
},
{
  id: 'centrifuge',
  name: 'Refrigerated Centrifuge C-300R',
  category: 'laboratory',
  subcategory: 'Centrifuges',
  brand: 'Comen',
  image:
  'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
  description:
  'High-capacity refrigerated benchtop centrifuge with multiple swing-out and fixed-angle rotor options.',
  specs: [
  { label: 'Max Speed', value: '15,000 rpm' },
  { label: 'Max RCF', value: '24,500 × g' },
  { label: 'Temperature', value: '-20°C to +40°C' },
  { label: 'Capacity', value: '4 × 750 mL' }]

},
{
  id: 'microscope',
  name: 'Clinical Microscope CX-43',
  category: 'laboratory',
  subcategory: 'Microscopy',
  brand: 'Brownier',
  image:
  'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=1200&q=80',
  description:
  'Trinocular clinical microscope with semi-apochromat optics and LED Köhler illumination.',
  specs: [
  { label: 'Magnification', value: '40× – 1000×' },
  { label: 'Illumination', value: 'LED Köhler' },
  { label: 'Stage', value: 'Mechanical X-Y' },
  { label: 'Head', value: 'Trinocular 30°' }]

},

// PATIENT CARE
{
  id: 'ventilator-icu',
  name: 'ICU Ventilator V-680',
  category: 'patient-care',
  subcategory: 'Ventilators',
  brand: 'Neurosoft',
  image:
  'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80',
  description:
  'Advanced respiratory support system with invasive, non-invasive, and high-flow modes for adult, pediatric and neonatal patients.',
  specs: [
  { label: 'Modes', value: 'PCV / VCV / SIMV / HFOV' },
  { label: 'Tidal Volume', value: '2 – 2000 mL' },
  { label: 'PEEP', value: '0 – 50 cmH₂O' },
  { label: 'Battery', value: '4 hours backup' }],

  featured: true,
  tag: 'Most Requested'
},
{
  id: 'patient-monitor',
  name: 'Multi-parameter Monitor M-90',
  category: 'patient-care',
  subcategory: 'Patient Monitors',
  brand: 'Vatech',
  image:
  'https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?auto=format&fit=crop&w=1200&q=80',
  description:
  'Touchscreen vital signs monitor with ECG, SpO2, NIBP, temperature, capnography and arrhythmia analysis.',
  specs: [
  { label: 'Display', value: '15" capacitive touch' },
  { label: 'Parameters', value: 'ECG, SpO₂, NIBP, EtCO₂, IBP, Temp' },
  { label: 'Connectivity', value: 'Wi-Fi + Ethernet' },
  { label: 'Battery', value: '6 hours' }]

},
{
  id: 'infusion-pump',
  name: 'Smart Infusion Pump IP-200',
  category: 'patient-care',
  subcategory: 'Infusion Pumps',
  brand: 'Runyes',
  image:
  'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?auto=format&fit=crop&w=1200&q=80',
  description:
  'Volumetric infusion pump with drug library, dose error reduction and wireless integration to EMR.',
  specs: [
  { label: 'Flow Rate', value: '0.1 – 1200 mL/hr' },
  { label: 'Drug Library', value: '5,000+ entries' },
  { label: 'Battery', value: '10 hours' },
  { label: 'KVO', value: 'Programmable' }]
}
];

export const technologyEquipmentIndex: EquipmentIndexCategory[] = [
  {
    name: 'Surgical',
    items: [
      'Mobile X-ray Machine',
      'Mobile C-Arm with FPD',
      'Table Digital Radiography',
      'Anaesthesia Machine',
      'Mobile X-Ray',
      'Ultra-portable X-Ray Imaging',
    ]
  },
  {
    name: 'Imaging',
    items: [
      'Fluoroscopy',
      'CT Scan',
      'MRI',
      'NeuAngio Ceiling Series',
      'NeuEcho9 US Series',
      'NeuAngio Floor Series',
    ]
  },
  {
    name: 'Laboratory',
    items: [
      '-150°C Cryo Freezer',
      'Automatic Fluorescence Immunoassay Analyzer QD-S2000',
      'Automatic IHC Stainer',
      'BF-730 Flow Cytometer',
      'BH-7080 Automatic Haematology Analyzer',
      'BS-8000 Haematology Analyzer',
      'CA-640A Automatic Chemistry Analyzer',
      'URIT-560 Urine Analyzer',
      'US-1000 AI-Libre Urinalysis Analyzer',
      'US-2000 AI Modular Urinalysis',
      'VRN-Q5 Ultrasonic Scaler',
    ]
  },
  {
    name: 'Dental',
    items: [
      'Dental X-Ray',
      'Digital Sensor',
      '2D OPG',
      'UP 3D Dental Digital Laboratory',
      'Pax-i3D Green',
      'PA-i3D Smartdental',
      'Smart Plus',
      'Vatech A9',
    ]
  }
];