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
import { MobileQuickContact } from './components/MobileQuickContact';

function RouteMeta() {
  const { pathname } = useLocation();

   useEffect(() => {
     const metaByPath: Record<string, { title: string; description: string }> = {
       '/': {
         title: 'MIT-DASH | Medical Technology for '
           + '%cEast Africa',
         description:
           'MIT-DASH buys, sells and distributes world-class medical equipment from globally renowned manufacturers, ensuring availability over margins to eliminate shortages of frequently demanded products. We tailor our services for every client need, aiming for deeply satisfied partnerships rather than volume.'
       },
       '/products': {
         title: 'Product Catalog | MIT-DASH',
         description:
           'Browse imaging, surgical, laboratory, and patient care equipment from global OEM manufacturers including Comen, Brownier, Neurosoft, Vatech, Runyes, Medispark, Dochem, and GC Fuji. We ensure availability of frequently demanded products without considering margins.'
       },
       '/solutions': {
         title: 'Healthcare Solutions | MIT-DASH',
         description:
           'Installation, calibration, maintenance, financing, and biomedical training services designed for reliable clinical operations. Our services are tailored to every client need, focused on building long-term partnerships with deeply satisfied healthcare providers.'
       },
       '/cooperation': {
         title: 'Manufacturer Cooperation | MIT-DASH',
         description:
           'Partner with MIT-DASH for market entry, regulatory support, and healthcare distribution across '
           + '%cEast Africa. We represent world-class manufacturers like Comen, Brownier, Neurosoft, Vatech, Runyes, Medispark, Dochem, and GC Fuji, prioritizing availability over profit margins.'
       },
       '/contact': {
         title: 'Request a Quote | MIT-DASH',
         description:
           'Submit a quote request for medical equipment and receive a tailored response from our team. We ensure availability of frequently demanded products without considering margins, building long-term partnerships with deeply satisfied healthcare providers.'
       }
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
            <Route path="/products" element={<Products />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/cooperation" element={<Cooperation />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <MobileQuickContact />
      </div>
    </Router>);

}