'use client';
import { useState } from 'react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeading from '@/components/ui/SectionHeading';

const PHONE = '+49 30 12345678';
const PHONE_DISPLAY = '+49 30 1234 5678';
const WHATSAPP = 'https://wa.me/493012345678';

const serviceOptions = [
  'Free Roof Inspection',
  'Roof Repair',
  'Roof Replacement',
  'Storm Damage Repair',
  'Other',
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production: connect to form handler (Formspree, Netlify Forms, API route)
    setSubmitted(true);
  };

  return (
    <SectionWrapper id="contact">
      <SectionHeading
        tag="Get Started"
        title="Request Your Free Inspection"
        subtitle="Fill out the form and we'll confirm your appointment within 2 hours. Or call us directly."
      />

      <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
        {/* Form */}
        <div className="lg:col-span-3">
          {submitted ? (
            <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </div>
              <h3 className="font-heading font-bold text-2xl text-slate-900 mb-2">Request Received</h3>
              <p className="text-slate-600 mb-1">We'll confirm your inspection appointment within 2 hours.</p>
              <p className="text-sm text-slate-400">Check your phone — we'll call or text to confirm.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 text-slate-900 placeholder:text-slate-400 bg-white transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+49 ..."
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 text-slate-900 placeholder:text-slate-400 bg-white transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Email Address</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 text-slate-900 placeholder:text-slate-400 bg-white transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Service Needed *</label>
                <select
                  required
                  defaultValue=""
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 text-slate-900 bg-white transition-all appearance-none"
                >
                  <option value="" disabled>Select a service</option>
                  {serviceOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Your Address (Berlin)</label>
                <input
                  type="text"
                  placeholder="Street, district"
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 text-slate-900 placeholder:text-slate-400 bg-white transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Describe the Issue</label>
                <textarea
                  rows={4}
                  placeholder="What's happening with your roof? When did you first notice it?"
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 text-slate-900 placeholder:text-slate-400 bg-white transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-lg bg-accent-500 hover:bg-accent-400 text-brand-950 font-bold text-base transition-colors flex items-center justify-center gap-2 cta-pulse"
              >
                Request Free Inspection
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
              </button>

              <p className="text-xs text-slate-400 text-center">
                No spam. No obligation. We respond within 2 hours during business hours.
              </p>
            </form>
          )}
        </div>

        {/* Contact info sidebar */}
        <div className="lg:col-span-2 space-y-6">
          {/* Direct contact */}
          <div className="bg-brand-950 rounded-2xl p-7 text-white">
            <h3 className="font-heading font-bold text-lg mb-4">Prefer to Talk?</h3>

            <a href={`tel:${PHONE}`} className="flex items-center gap-3 p-4 rounded-xl bg-white/10 hover:bg-white/15 transition-colors mb-3">
              <div className="w-10 h-10 rounded-lg bg-accent-500 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-brand-950" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </div>
              <div>
                <p className="text-xs text-slate-400">Call Us Directly</p>
                <p className="font-bold">{PHONE_DISPLAY}</p>
              </div>
            </a>

            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 rounded-xl bg-white/10 hover:bg-white/15 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-green-500 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /><path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a8 8 0 01-4.29-1.248l-.29-.174-3.176.944.868-3.176-.19-.302A7.962 7.962 0 014 12a8 8 0 1116 0 8 8 0 01-8 8z" /></svg>
              </div>
              <div>
                <p className="text-xs text-slate-400">WhatsApp</p>
                <p className="font-bold">Send a Message</p>
              </div>
            </a>
          </div>

          {/* Response guarantee */}
          <div className="bg-slate-50 rounded-2xl p-7 border border-slate-100">
            <h3 className="font-heading font-bold text-lg text-slate-900 mb-3">What Happens Next</h3>
            <div className="space-y-3">
              {[
                { time: '< 2 hours', text: 'We confirm your appointment' },
                { time: '1–2 days', text: 'Inspector arrives at your property' },
                { time: '24 hours', text: 'You receive your written report & quote' },
              ].map((step) => (
                <div key={step.time} className="flex items-start gap-3">
                  <span className="text-xs font-bold text-brand-500 bg-brand-50 rounded px-2 py-1 whitespace-nowrap mt-0.5">{step.time}</span>
                  <span className="text-sm text-slate-600">{step.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hours */}
          <div className="bg-slate-50 rounded-2xl p-7 border border-slate-100">
            <h3 className="font-heading font-bold text-lg text-slate-900 mb-3">Business Hours</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-slate-600">
                <span>Monday – Friday</span>
                <span className="font-semibold text-slate-900">7:00 – 19:00</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Saturday</span>
                <span className="font-semibold text-slate-900">8:00 – 16:00</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Sunday</span>
                <span className="text-slate-400">Closed</span>
              </div>
              <div className="pt-2 border-t border-slate-200 mt-2">
                <p className="text-xs text-slate-400">Emergency storm damage? Call anytime — we monitor 24/7 after severe weather.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
