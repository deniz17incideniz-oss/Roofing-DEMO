'use client';
import { useState } from 'react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeading from '@/components/ui/SectionHeading';

const faqs = [
  {
    q: 'Is the roof inspection really free?',
    a: 'Yes. Our 27-point inspection is completely free with zero obligation. We\'ll give you a full photo report of your roof\'s condition. If you decide not to proceed with any work, that\'s fine. No follow-up calls, no pressure.',
  },
  {
    q: 'How quickly can you come out?',
    a: 'We confirm appointments within 2 hours and typically schedule inspections for the next business day. For storm damage emergencies, we offer same-day response when possible.',
  },
  {
    q: 'What if the price changes after you start?',
    a: 'It doesn\'t. Your written quote is locked. If we discover unexpected issues during work, we stop immediately, explain the situation, show you the problem, and give you a revised quote for approval. No work continues without your written consent.',
  },
  {
    q: 'Do you handle insurance claims?',
    a: 'Yes. For storm damage, we document everything with photos and measurements in the format insurance companies need. We\'ll work directly with your insurer and guide you through the claim process step by step.',
  },
  {
    q: 'What does the 10-year warranty cover?',
    a: 'Our warranty covers both materials and workmanship. If your roof develops any issues related to our installation or the materials we used, we repair or replace it at our cost. The warranty is a signed legal document, not a verbal promise.',
  },
  {
    q: 'Do you use subcontractors?',
    a: 'No. Every person on your roof is a trained Atlas Roofing employee. We don\'t subcontract any part of the job. You\'ll know exactly who is working on your property.',
  },
  {
    q: 'What roofing materials do you use?',
    a: 'We use premium materials from established German and European manufacturers including Braas, Creaton, and Erlus for tiles, and Bauder and Sika for flat roofing systems. We\'ll recommend the best option for your specific roof and budget.',
  },
  {
    q: 'Can I see examples of your work?',
    a: 'Absolutely. We have a portfolio of 850+ completed projects across Berlin. During your inspection, we\'ll share before-and-after photos of similar projects in your area. You\'re also welcome to speak with past customers.',
  },
];

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div className="border-b border-slate-100 last:border-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left group"
        aria-expanded={isOpen}
      >
        <span className="font-heading font-semibold text-slate-900 pr-8 group-hover:text-brand-600 transition-colors">{item.q}</span>
        <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${isOpen ? 'bg-brand-500 text-white rotate-180' : 'bg-slate-100 text-slate-500'}`}>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-5' : 'max-h-0'}`}>
        <p className="text-slate-500 leading-relaxed pr-12">{item.a}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <SectionWrapper id="faq" className="bg-slate-50">
      <SectionHeading
        tag="Questions"
        title="Common Questions, Straight Answers"
        subtitle="No jargon, no runaround. If your question isn't here, call us — we answer within the hour."
      />

      <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-slate-100 px-6 md:px-10">
        {faqs.map((faq, i) => (
          <FAQItem
            key={i}
            item={faq}
            isOpen={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
