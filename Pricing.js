import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeading from '@/components/ui/SectionHeading';
import CTAButton from '@/components/ui/CTAButton';

const priceRanges = [
  { service: 'Roof Inspection', range: 'Free', note: '27-point check with photo report' },
  { service: 'Minor Repairs', range: '€200 – €1,500', note: 'Tile replacement, flashing, minor leaks' },
  { service: 'Storm Damage', range: '€500 – €5,000', note: 'Insurance documentation included' },
  { service: 'Full Replacement', range: '€8,000 – €25,000+', note: 'Depends on roof size and material choice' },
];

const guarantees = [
  'Written quote before any work — no verbal estimates',
  'Price locked once you approve — no surprise invoices',
  'Itemized breakdown of labor, materials, and timeline',
  'Pay only after final inspection and your sign-off',
];

export default function Pricing() {
  return (
    <SectionWrapper id="pricing">
      <SectionHeading
        tag="Transparent Pricing"
        title="Know the Cost Before We Start"
        subtitle="We don't play pricing games. Every quote is written, itemized, and locked before any work begins."
      />

      <div className="grid lg:grid-cols-2 gap-10 items-start">
        {/* Price ranges */}
        <div>
          <h3 className="font-heading font-bold text-xl text-slate-900 mb-6">Typical Price Ranges</h3>
          <div className="space-y-4">
            {priceRanges.map((item) => (
              <div key={item.service} className="flex items-start justify-between p-5 rounded-xl bg-slate-50 border border-slate-100">
                <div>
                  <p className="font-semibold text-slate-900">{item.service}</p>
                  <p className="text-sm text-slate-500 mt-0.5">{item.note}</p>
                </div>
                <span className={`font-bold whitespace-nowrap ml-4 ${item.range === 'Free' ? 'text-green-600 text-lg' : 'text-slate-900'}`}>
                  {item.range}
                </span>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-400 mt-4">
            * Final price depends on roof condition, materials, and scope. Your written quote will be exact.
          </p>
        </div>

        {/* Guarantees */}
        <div className="bg-brand-950 rounded-2xl p-8 lg:p-10 text-white">
          <h3 className="font-heading font-bold text-xl mb-2">Our Pricing Promise</h3>
          <p className="text-slate-400 text-sm mb-6">
            The price you approve is the price you pay. If we discover additional work is needed, we stop, explain, and get your written approval before continuing.
          </p>
          <ul className="space-y-4 mb-8">
            {guarantees.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span className="text-slate-200 text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          <CTAButton href="#contact" variant="primary" size="md">
            Get Your Free Quote
          </CTAButton>
        </div>
      </div>
    </SectionWrapper>
  );
}
