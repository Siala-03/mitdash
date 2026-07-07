import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation } from
'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollProgress } from './components/ScrollProgress';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { Contact } from './pages/Contact';
import { Solutions } from './pages/Solutions';
import { Cooperation } from './pages/Cooperation';
import { Team } from './pages/Team';
import { MobileQuickContact } from './components/MobileQuickContact';

function RouteMeta() {
  const { pathname } = useLocation();

   useEffect(() => {
     const metaByPath: Record<string, { title: string; description: string }> = {
       '/': {
         title: 'MIT-DASH | Medical Equipment Distributor — Rwanda, Burundi & DRC',
         description:
           'MIT-DASH buys, sells and distributes world-class medical equipment from globally renowned manufacturers, ensuring availability over margins. We tailor every engagement to the specific client need across Rwanda, Burundi and the DRC.',
       },
       '/home': {
         title: 'MIT-DASH | Medical Equipment Distributor — Rwanda, Burundi & DRC',
         description:
           'MIT-DASH buys, sells and distributes world-class medical equipment from globally renowned manufacturers, ensuring availability over margins. We tailor every engagement to the specific client need across Rwanda, Burundi and the DRC.',
       },
       '/products': {
         title: 'Product Catalog | MIT-DASH',
         description:
           'Browse imaging, surgical, laboratory, and dental equipment from global manufacturers including Comen, Brownier, Neurosoft, Vatech, Runyes, Medispark, Dochem, and GC Fuji. Availability without margin compromise.',
       },
       '/solutions': {
         title: 'Healthcare Solutions | MIT-DASH',
         description:
           'Installation, calibration, maintenance, financing, and biomedical training services designed for reliable clinical operations. Every service tailored to the specific needs of your facility.',
       },
       '/cooperation': {
         title: 'Manufacturer Cooperation | MIT-DASH',
         description:
           'Partner with MIT-DASH for market entry, regulatory support, and healthcare distribution across East Africa. We represent world-class manufacturers, prioritizing availability over profit margins.',
       },
       '/team': {
         title: 'Our Team | MIT-DASH',
         description:
           'Meet the leadership, sales, and biomedical engineering team behind MIT-DASH, driving dependable medical equipment access across Rwanda, Burundi and the DRC.',
       },
       '/contact': {
         title: 'Request a Quote | MIT-DASH',
         description:
           'Submit a quote request for medical equipment and receive a tailored response within 2 business hours. Call +250 796 179 826 or WhatsApp us.',
       },
     };

    const fallback = metaByPath['/'];
    const current = metaByPath[pathname] ?? fallback;
    document.title = current.title;

    let descriptionEl = document.querySelector('meta[name="description"]');
    if (!descriptionEl) {
      descriptionEl = document.createElement('meta');
      descriptionEl.setAttribute('name', 'description');
      document.head.appendChild(descriptionEl);
    }
    descriptionEl.setAttribute('content', current.description);
  }, [pathname]);

  return null;
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
export function App() {
  return (
    <Router>
      <RouteMeta />
      <ScrollToTop />
      <ScrollProgress />
      <div className="flex flex-col min-h-screen font-sans bg-paper-100">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/team" element={<Team />} />
            <Route path="/cooperation" element={<Cooperation />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <MobileQuickContact />
      </div>
    </Router>);

}