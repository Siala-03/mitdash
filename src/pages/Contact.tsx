import React, { useMemo, useState } from 'react';
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
  Settings
} from 'lucide-react';

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

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<QuoteFormData>(initialForm);

  const completion = useMemo(() => (step / 3) * 100, [step]);

  const updateField = (field: keyof QuoteFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
  const previousStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData(initialForm);
      setStep(1);
    }, 7000);
  };

  return (
    <div className="pt-24 pb-24 min-h-screen bg-paper-100">
      <section className="relative bg-ink-950 text-white py-20 mb-12 overflow-hidden grain">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg"
            alt="Contact hero background"
            className="w-full h-full object-cover opacity-30" />
          <div className="absolute top-0 -left-24 w-72 h-72 bg-signal-400/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 right-0 w-96 h-96 bg-signal-300/10 rounded-full blur-3xl pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-signal-300 mb-5">Request A Quote</p>
            <h1 className="font-display text-4xl md:text-6xl font-light leading-[1.05] mb-6">
              Tell us what your facility needs. We will map the right solution.
            </h1>
            <p className="text-white/75 text-lg max-w-2xl">
              Share your clinical, budget, and timeline requirements in under 2 minutes. Our team returns with a tailored proposal and delivery plan.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4 space-y-6">
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

            <div className="bg-white rounded-3xl p-6 border border-paper-300 space-y-5">
              <div className="flex items-start gap-3 text-sm text-ink-700">
                <MapPin size={18} className="text-signal-700 shrink-0 mt-0.5" />
                <span>Kigali, Rwanda<br />Serving Rwanda, Burundi, and DRC</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-ink-700">
                <Phone size={18} className="text-signal-700 shrink-0" />
                <a href="tel:+250123456789" className="hover:text-ink-900">+250 (0) 123 456 789</a>
              </div>
              <div className="flex items-center gap-3 text-sm text-ink-700">
                <Mail size={18} className="text-signal-700 shrink-0" />
                <a href="mailto:info@mitdash.com" className="hover:text-ink-900">info@mitdash.com</a>
              </div>
            </div>
          </div>

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
                <div className="h-full bg-signal-500 transition-all duration-500" style={{ width: `${completion}%` }} />
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
                <p className="text-ink-700 max-w-xl mx-auto">
                  Thank you. A solutions specialist will contact you within 2 business hours with an initial recommendation and procurement path.
                </p>
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
                        <option>Imaging</option>
                        <option>Surgical</option>
                        <option>Laboratory</option>
                        <option>Patient Care / ICU</option>
                        <option>Multi-department</option>
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
                        <label htmlFor="needsInstallation" className="text-sm font-medium text-ink-700">Need Installation & Training?</label>
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
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-signal-400 text-ink-950 font-semibold hover:bg-signal-300 transition-colors"
                    >
                      Submit Quote Request <Send size={16} />
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
