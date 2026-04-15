import CTAButton from '@/components/ui/CTAButton';

const PHONE = '+49 30 12345678';
const PHONE_DISPLAY = '+49 30 1234 5678';

export default function Hero() {
  return (
    <section className="relative min-h-[600px] md:min-h-[680px] flex items-center overflow-hidden">
      {/* Background placeholder - dark gradient simulating roof image */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-950 via-brand-800 to-brand-900"></div>
      {/* Noise texture */}
      <div className="absolute inset-0 noise-overlay"></div>
      {/* Gradient overlay */}
      <div className="absolute inset-0 hero-gradient"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-28 w-full">
        <div className="max-w-2xl">
          {/* Trust micro-badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-sm text-white/80 font-medium">Serving Berlin since 2009 — 850+ roofs completed</span>
          </div>

          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] mb-6">
            Your Roof Protected.
            <br />
            <span className="text-accent-400">No Surprises.</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-xl leading-relaxed">
            Free inspection within 48 hours. Transparent pricing before any work begins. Licensed, insured, and backed by a 10-year warranty.
          </p>

          {/* CTA group */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <CTAButton href="#contact" size="lg" pulse>
              Book Free Inspection
            </CTAButton>
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-lg border-2 border-white/30 text-white font-bold hover:bg-white/10 transition-all text-base"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              {PHONE_DISPLAY}
            </a>
          </div>

          {/* Social proof micro-strip */}
          <div className="flex items-center gap-4 text-white/70 text-sm">
            <div className="flex -space-x-2">
              {[1,2,3,4].map(i => (
                <div key={i} className="w-9 h-9 rounded-full bg-brand-600 border-2 border-brand-900 flex items-center justify-center text-xs font-bold text-white">
                  {['M','K','S','J'][i-1]}
                </div>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-0.5 mb-0.5">
                {[1,2,3,4,5].map(i => (
                  <svg key={i} className="w-4 h-4 text-accent-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>
              <span>4.9/5 from 230+ reviews</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
