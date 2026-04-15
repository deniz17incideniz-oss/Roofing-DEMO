import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeading from '@/components/ui/SectionHeading';

const services = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" /></svg>
    ),
    title: 'Roof Repair',
    desc: 'Leaks, missing tiles, flashing damage — fixed fast. We identify the root cause, not just the symptom. Most repairs completed same-day.',
    fear: 'No temporary patches that fail in 6 months.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
    ),
    title: 'Roof Replacement',
    desc: 'Full tear-off and installation with premium materials. Detailed scope of work before we start. Clear timeline, zero hidden costs.',
    fear: "You'll know the exact price and schedule upfront.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
    ),
    title: 'Storm Damage Repair',
    desc: 'Emergency response for hail, wind, and weather damage. We document everything for your insurance claim and handle the process with you.',
    fear: "We help with insurance paperwork — you're not alone.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    ),
    title: 'Roof Inspection',
    desc: "Comprehensive 27-point inspection with photo documentation. Know exactly what's happening with your roof — no guesswork, no pressure to buy.",
    fear: 'Free inspection with zero obligation. Period.',
  },
];

export default function Services() {
  return (
    <SectionWrapper id="services">
      <SectionHeading
        tag="What We Do"
        title="Roofing Services That Remove the Guesswork"
        subtitle="Every service includes a written scope, fixed price, and clear timeline. You approve everything before we touch your roof."
      />

      <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
        {services.map((service) => (
          <div key={service.title} className="card-lift group bg-white border border-slate-100 rounded-2xl p-8 hover:border-brand-200">
            <div className="w-14 h-14 rounded-xl bg-brand-50 text-brand-500 flex items-center justify-center mb-5 group-hover:bg-brand-500 group-hover:text-white transition-colors">
              {service.icon}
            </div>
            <h3 className="font-heading font-bold text-xl text-slate-900 mb-3">{service.title}</h3>
            <p className="text-slate-500 leading-relaxed mb-4">{service.desc}</p>
            <p className="text-sm font-semibold text-brand-600 flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              {service.fear}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
