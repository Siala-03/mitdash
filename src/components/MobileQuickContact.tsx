import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

export function MobileQuickContact() {
  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden pointer-events-none">
      <div className="mx-auto max-w-md rounded-2xl border border-ink-200/70 bg-paper-50/95 backdrop-blur-xl shadow-[0_12px_40px_-20px_rgba(7,12,30,0.55)] p-2 pointer-events-auto">
        <div className="grid grid-cols-2 gap-2">
          <a
            href="tel:+250123456789"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-ink-950 text-white py-3 text-sm font-semibold hover:bg-ink-900 transition-colors"
          >
            <Phone size={15} />
            Call Now
          </a>
          <a
            href="https://wa.me/250123456789"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-signal-400 text-ink-950 py-3 text-sm font-semibold hover:bg-signal-300 transition-colors"
          >
            <MessageCircle size={15} />
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
