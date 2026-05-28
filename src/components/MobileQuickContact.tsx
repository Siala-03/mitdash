import React from 'react';
import { Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const PHONE = '+250796179826';
const WHATSAPP_URL = `https://wa.me/250796179826?text=${encodeURIComponent('Hello MIT-DASH, I would like to inquire about your medical equipment.')}`;

export function MobileQuickContact() {
  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden pointer-events-none">
      <div className="mx-auto max-w-md rounded-2xl border border-ink-200/70 bg-paper-50/95 backdrop-blur-xl shadow-[0_12px_40px_-20px_rgba(7,12,30,0.55)] p-2 pointer-events-auto">
        <div className="grid grid-cols-2 gap-2">
          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-ink-950 text-white py-3 text-sm font-semibold hover:bg-ink-900 transition-colors"
          >
            <Phone size={15} />
            Call Now
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] text-white py-3 text-sm font-semibold hover:bg-[#1ebe5d] transition-colors"
          >
            <FaWhatsapp size={16} />
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
