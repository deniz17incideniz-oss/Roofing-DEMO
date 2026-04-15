import CTAButton from '@/components/ui/CTAButton';

const PHONE = '+49 30 12345678';
const PHONE_DISPLAY = '+49 30 1234 5678';

export default function CTABand() {
  return (
    <section className="relative overflow-hidden bg-brand-500">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-16 md:py-20 text-center">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">
          Worried About Your Roof? Get Answers in 48 Hours.
        </h2>
        <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
          Book your free 27-point inspection. No obligation, no pressure, no cost. Just clarity about your roof's condition.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <CTAButton href="#contact" size="lg" pulse>
            Book Free Inspection
          </CTAButton>
          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border-2 border-white/40 text-white font-bold hover:bg-white/10 transition-all text-base"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            Call {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </section>
  );
}
