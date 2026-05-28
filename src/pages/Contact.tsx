import React, { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  ShieldCheck,
  BadgeDollarSign,
  Settings,
  MessageCircle
} from 'lucide-react';

const PHONE        = '+250796179826';
const PHONE_DISPLAY = '+250 796 179 826';
const EMAIL        = 'sales@mitdash.com';
const WHATSAPP_URL = `https://wa.me/250796179826?text=${encodeURIComponent('Hello MIT-DASH, I would like to inquire about your medical equipment.')}`;

type QuoteFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  facilityType: string;
  department: string;
  urgency: string;
  budgetBand: string;
  country: string;
  needsInstallation: string;
  message: string;
};

const initialForm: QuoteFormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  facilityType: 'Hospital',
  department: 'Imaging',
  urgency: 'Within 3 months',
  budgetBand: 'USD 25k-100k',
  country: 'Rwanda',
  needsInstallation: 'Yes',
  message: ''
};

const DEPT_OPTIONS = ['Imaging', 'Surgical', 'Laboratory', 'Dental', 'Patient Care / ICU', 'Multi-department'];

export function Contact() {
  const [searchParams] = useSearchParams();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<QuoteFormData>(initialForm);

  // Pre-fill message & department when arriving from "Download Catalogue" buttons
  useEffect(() => {
    const catalogue = searchParams.get('catalogue');
    if (catalogue) {
      setFormData((prev) => ({
        ...prev,
        department: DEPT_OPTIONS.includes(catalogue) ? catalogue : prev.department,
        message: `I would like to request the ${catalogue} catalogue and learn more about available products in this category.`,
      }));
    }
  }, [searchParams]);

  const completion = useMemo(() => (step / 3) * 100, [step]);

  const updateField = (field: keyof QuoteFormData, value: string) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
  const previousStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = `Quote Request — ${formData.firstName} ${formData.lastName} · ${formData.facilityType}, ${formData.country}`;
    const body = [
      `Name:              ${formData.firstName} ${formData.lastName}`,
      `Email:             ${formData.email}`,
      `Phone:             ${formData.phone}`,
      `Country:           ${formData.country}`,
      `Facility Type:     ${formData.facilityType}`,
      `Department:        ${formData.department}`,
      `Urgency:           ${formData.urgency}`,
      `Budget Band:       ${formData.budgetBand}`,
      `Installation:      ${formData.needsInstallation}`,
      ``,
      `Project Notes:`,
      formData.message,
    ].join('\n');

    // Open the user's email client pre-addressed to sales@mitdash.com
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData(initialForm);
      setStep(1);
    }, 7000);
  };

  return (
    <div className="pt-24 pb-24 min-h-screen bg-paper-100">
      {/* ── HERO ── */}
      <section className="relative bg-ink-950 text-white py-20 mb-12 overflow-hidden grain">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg"
            alt="Contact hero background"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute top-0 -left-24 w-72 h-72 bg-signal-400/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 right-0 w-96 h-96 bg-signal-300/10 rounded-full blur-3xl pointer-events-none" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-signal-300 mb-5">
              Request A Quote
            </p>
            <h1 className="font-display text-4xl md:text-6xl font-light leading-[1.05] mb-6">
              Tell us what your facility needs. We will map the right solution.
            </h1>
            <p className="text-white/75 text-lg max-w-2xl">
              Share your clinical, budget, and timeline requirements in under 2 minutes. Our team
              returns with a tailored proposal and delivery plan.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* ── SIDEBAR ── */}
          <div className="lg:col-span-4 space-y-6">

            {/* Response commitments */}
            <div className="bg-paper-50 border border-paper-300 rounded-3xl p-6">
              <h3 className="font-display text-2xl text-ink-900 mb-6">Response Commitments</h3>
              <ul className="space-y-4 text-sm text-ink-700">
                <li className="flex items-start gap-3">
                  <Clock size={16} className="text-signal-700 shrink-0 mt-0.5" />
                  Initial response within 2 business hours.
                </li>
                <li className="flex items-start gap-3">
                  <Settings size={16} className="text-signal-700 shrink-0 mt-0.5" />
                  Technical recommendation within 48 hours.
                </li>
                <li className="flex items-start gap-3">
                  <BadgeDollarSign size={16} className="text-signal-700 shrink-0 mt-0.5" />
                  Procurement and financing options included.
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck size={16} className="text-signal-700 shrink-0 mt-0.5" />
                  Compliance support for import and commissioning.
                </li>
              </ul>
            </div>

            {/* Contact details */}
            <div className="bg-white rounded-3xl p-6 border border-paper-300 space-y-6">

              {/* Address */}
              <div className="flex items-start gap-3 text-sm text-ink-700">
                <MapPin size={18} className="text-signal-600 shrink-0 mt-0.5" />
                <span>
                  Iriba House 1st Floor<br />
                  Gikondo, Kigali, Rwanda<br />
                  <span className="text-ink-500">Serving Rwanda, Burundi &amp; DRC</span>
                </span>
              </div>

              {/* Phone + Call Now + WhatsApp */}
              <div className="flex items-start gap-3">
                <Phone size={18} className="text-signal-600 shrink-0 mt-0.5" />
                <div className="space-y-2">
                  <a
                    href={`tel:${PHONE}`}
                    className="block text-sm font-medium text-ink-800 hover:text-ink-900"
                  >
                    {PHONE_DISPLAY}
                  </a>
                  <div className="flex flex-wrap gap-2">
                    <a
                      href={`tel:${PHONE}`}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-ink-950 text-white text-xs font-semibold hover:bg-ink-800 transition-colors"
                    >
                      <Phone size={12} />
                      Call Now
                    </a>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#25D366] text-white text-xs font-semibold hover:bg-[#1ebe5d] transition-colors"
                    >
                      {/* WhatsApp icon */}
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3 text-sm text-ink-700">
                <Mail size={18} className="text-signal-600 shrink-0" />
                <a
                  href={`mailto:${EMAIL}`}
                  className="font-medium text-ink-800 hover:text-signal-600 transition-colors break-all"
                >
                  {EMAIL}
                </a>
              </div>
            </div>
          </div>

          {/* ── FORM ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-8 bg-white rounded-3xl border border-paper-300 p-6 md:p-8"
          >
            <div className="mb-8">
              <div className="flex items-center justify-between mb-3">
                <h2 className="font-display text-3xl text-ink-900">Quote Workflow</h2>
                <span className="font-mono text-xs text-ink-500">Step {step} / 3</span>
              </div>
              <div className="w-full h-2 rounded-full bg-paper-200 overflow-hidden">
                <div
                  className="h-full bg-signal-500 transition-all duration-500"
                  style={{ width: `${completion}%` }}
                />
              </div>
            </div>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 mb-4">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-2xl font-semibold text-ink-900 mb-3">Request Received</h3>
                <p className="text-ink-700 max-w-xl mx-auto mb-4">
                  Your email client has opened with your inquiry pre-filled and addressed to{' '}
                  <strong>{EMAIL}</strong>. Send it to complete your request — our team will respond
                  within 2 business hours.
                </p>
                <div className="flex flex-wrap gap-3 justify-center">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] text-white text-sm font-semibold hover:bg-[#1ebe5d] transition-colors"
                  >
                    <MessageCircle size={15} />
                    Or reach us on WhatsApp
                  </a>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {step === 1 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-medium text-ink-700">First Name</label>
                      <input id="firstName" required value={formData.firstName} onChange={(e) => updateField('firstName', e.target.value)} className="w-full px-4 py-3 rounded-xl border border-paper-300 focus:outline-none focus:ring-2 focus:ring-signal-400" placeholder="Aline" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium text-ink-700">Last Name</label>
                      <input id="lastName" required value={formData.lastName} onChange={(e) => updateField('lastName', e.target.value)} className="w-full px-4 py-3 rounded-xl border border-paper-300 focus:outline-none focus:ring-2 focus:ring-signal-400" placeholder="Mukamana" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-ink-700">Work Email</label>
                      <input id="email" type="email" required value={formData.email} onChange={(e) => updateField('email', e.target.value)} className="w-full px-4 py-3 rounded-xl border border-paper-300 focus:outline-none focus:ring-2 focus:ring-signal-400" placeholder="procurement@facility.rw" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-ink-700">Phone Number</label>
                      <input id="phone" type="tel" required value={formData.phone} onChange={(e) => updateField('phone', e.target.value)} className="w-full px-4 py-3 rounded-xl border border-paper-300 focus:outline-none focus:ring-2 focus:ring-signal-400" placeholder="+250 ..." />
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label htmlFor="facilityType" className="text-sm font-medium text-ink-700">Facility Type</label>
                      <select id="facilityType" value={formData.facilityType} onChange={(e) => updateField('facilityType', e.target.value)} className="w-full px-4 py-3 rounded-xl border border-paper-300 bg-white focus:outline-none focus:ring-2 focus:ring-signal-400">
                        <option>Hospital</option>
                        <option>Clinic</option>
                        <option>Diagnostic Center</option>
                        <option>Laboratory</option>
                        <option>Government Tender</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="department" className="text-sm font-medium text-ink-700">Department</label>
                      <select id="department" value={formData.department} onChange={(e) => updateField('department', e.target.value)} className="w-full px-4 py-3 rounded-xl border border-paper-300 bg-white focus:outline-none focus:ring-2 focus:ring-signal-400">
                        {DEPT_OPTIONS.map((d) => <option key={d}>{d}</option>)}
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="urgency" className="text-sm font-medium text-ink-700">Urgency</label>
                      <select id="urgency" value={formData.urgency} onChange={(e) => updateField('urgency', e.target.value)} className="w-full px-4 py-3 rounded-xl border border-paper-300 bg-white focus:outline-none focus:ring-2 focus:ring-signal-400">
                        <option>Immediately</option>
                        <option>Within 1 month</option>
                        <option>Within 3 months</option>
                        <option>Within 6 months</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="country" className="text-sm font-medium text-ink-700">Country</label>
                      <select id="country" value={formData.country} onChange={(e) => updateField('country', e.target.value)} className="w-full px-4 py-3 rounded-xl border border-paper-300 bg-white focus:outline-none focus:ring-2 focus:ring-signal-400">
                        <option>Rwanda</option>
                        <option>Burundi</option>
                        <option>DRC</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label htmlFor="budgetBand" className="text-sm font-medium text-ink-700">Budget Band</label>
                        <select id="budgetBand" value={formData.budgetBand} onChange={(e) => updateField('budgetBand', e.target.value)} className="w-full px-4 py-3 rounded-xl border border-paper-300 bg-white focus:outline-none focus:ring-2 focus:ring-signal-400">
                          <option>Below USD 25k</option>
                          <option>USD 25k-100k</option>
                          <option>USD 100k-250k</option>
                          <option>USD 250k+</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="needsInstallation" className="text-sm font-medium text-ink-700">Need Installation &amp; Training?</label>
                        <select id="needsInstallation" value={formData.needsInstallation} onChange={(e) => updateField('needsInstallation', e.target.value)} className="w-full px-4 py-3 rounded-xl border border-paper-300 bg-white focus:outline-none focus:ring-2 focus:ring-signal-400">
                          <option>Yes</option>
                          <option>No</option>
                          <option>Need advice</option>
                        </select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-ink-700">Project Notes</label>
                      <textarea id="message" rows={5} required value={formData.message} onChange={(e) => updateField('message', e.target.value)} className="w-full px-4 py-3 rounded-xl border border-paper-300 focus:outline-none focus:ring-2 focus:ring-signal-400 resize-none" placeholder="What equipment do you need, quantity, expected delivery date, or tender details?" />
                    </div>
                  </div>
                )}

                <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-3 pt-2">
                  <button
                    type="button"
                    onClick={previousStep}
                    disabled={step === 1}
                    className="inline-flex items-center justify-center px-5 py-3 rounded-xl border border-paper-300 text-ink-700 font-medium disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    Back
                  </button>
                  {step < 3 ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-ink-950 text-white font-semibold hover:bg-ink-900 transition-colors"
                    >
                      Continue
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-signal-600 text-white font-semibold hover:bg-signal-700 transition-colors"
                    >
                      Send to {EMAIL} <Send size={16} />
                    </button>
                  )}
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
