import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeading from '@/components/ui/SectionHeading';

const steps = [
  {
    num: '01',
    title: 'You Request an Inspection',
    desc: 'Fill out the form or call us. We confirm your appointment within 2 hours — usually for the next business day.',
    detail: 'Takes 30 seconds. No obligation.',
  },
  {
    num: '02',
    title: 'We Inspect Your Roof',
    desc: 'Our inspector arrives on time, checks 27 critical points, takes photos, and explains what they find — on the spot.',
    detail: '45–60 minutes. Completely free.',
  },
  {
    num: '03',
    title: 'You Get a Written Quote',
    desc: 'Within 24 hours you receive a detailed, itemized quote with materials, labor, timeline, and warranty terms. No pressure.',
    detail: 'Clear pricing. No surprises.',
  },
  {
    num: '04',
    title: 'We Do the Work',
    desc: 'Scheduled at your convenience. Our crew arrives on time, protects your property, and completes the work to code.',
    detail: 'Daily progress updates.',
  },
  {
    num: '05',
    title: 'Final Walkthrough & Warranty',
    desc: 'We walk you through the completed work. You sign off only when satisfied. Then your 10-year warranty kicks in.',
    detail: 'You pay after approval.',
  },
];

export default function Process() {
  return (
    <SectionWrapper id="process" className="bg-slate-50">
      <SectionHeading
        tag="How It Works"
        title="5 Steps. Zero Confusion."
        subtitle="We designed our process to eliminate every frustration you've heard about with contractors. Here's exactly what happens."
      />

      <div className="max-w-3xl mx-auto">
        <div className="relative">
          {steps.map((step, i) => (
            <div key={step.num} className="relative flex gap-6 md:gap-8 pb-10 last:pb-0">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="absolute left-[27px] top-[56px] w-[2px] h-[calc(100%-56px)] bg-gradient-to-b from-brand-300 to-brand-100"></div>
              )}
              {/* Step number */}
              <div className="counter-badge flex-shrink-0 relative z-10">{step.num}</div>
              {/* Content */}
              <div className="pt-1">
                <h3 className="font-heading font-bold text-lg md:text-xl text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-500 leading-relaxed mb-2">{step.desc}</p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  {step.detail}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
