import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeading from '@/components/ui/SectionHeading';

const projects = [
  { title: 'Full Replacement — Charlottenburg Villa', type: 'Roof Replacement', duration: '5 days', area: '180 m²' },
  { title: 'Storm Repair — Kreuzberg Apartment', type: 'Storm Damage', duration: '1 day', area: '65 m²' },
  { title: 'Flat Roof Overhaul — Mitte Office', type: 'Commercial Roof', duration: '7 days', area: '320 m²' },
];

const reviews = [
  {
    name: 'Markus W.',
    location: 'Prenzlauer Berg',
    text: 'Called on Monday, inspection on Tuesday, quote on Wednesday. They replaced 40 tiles and fixed the flashing in one day. Clean, fast, and exactly the price they quoted.',
    rating: 5,
  },
  {
    name: 'Katharina S.',
    location: 'Charlottenburg',
    text: 'After the hailstorm I panicked. Atlas came out the next morning, documented everything, and handled our insurance claim. The roof looks better than before the storm.',
    rating: 5,
  },
  {
    name: 'Stefan M.',
    location: 'Friedrichshain',
    text: 'Third roofer I called. First two didn\'t even show up for the quote. Atlas was on time, professional, and their inspection report was incredibly detailed. Wish I called them first.',
    rating: 5,
  },
  {
    name: 'Julia R.',
    location: 'Schöneberg',
    text: 'Full roof replacement on our 1920s building. They found structural issues the previous roofer missed. Transparent about costs, finished on schedule, 10-year warranty. Outstanding.',
    rating: 5,
  },
];

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-accent-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
      ))}
    </div>
  );
}

export default function Proof() {
  return (
    <SectionWrapper id="proof" className="bg-slate-50">
      <SectionHeading
        tag="Results"
        title="850+ Berlin Roofs. Zero Unfinished Jobs."
        subtitle="Every project documented. Every customer can verify. Here's recent work."
      />

      {/* Projects */}
      <div className="grid md:grid-cols-3 gap-6 mb-16 md:mb-20">
        {projects.map((project) => (
          <div key={project.title} className="card-lift rounded-2xl overflow-hidden bg-white border border-slate-100">
            <div className="h-48 bg-gradient-to-br from-brand-700 to-brand-900 flex items-center justify-center">
              <div className="text-center text-white/60">
                <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                <span className="text-sm">Project Photo</span>
              </div>
            </div>
            <div className="p-6">
              <span className="text-xs font-bold text-brand-500 uppercase tracking-wider">{project.type}</span>
              <h3 className="font-heading font-bold text-lg text-slate-900 mt-1 mb-3">{project.title}</h3>
              <div className="flex gap-4 text-sm text-slate-500">
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  {project.duration}
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg>
                  {project.area}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Reviews */}
      <div>
        <h3 className="font-heading font-bold text-2xl text-slate-900 text-center mb-8">What Berlin Homeowners Say</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((review) => (
            <div key={review.name} className="bg-white rounded-2xl p-7 border border-slate-100">
              <StarRating count={review.rating} />
              <p className="text-slate-600 leading-relaxed mt-4 mb-5">"{review.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center font-bold text-sm">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm">{review.name}</p>
                  <p className="text-xs text-slate-400">{review.location}, Berlin</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
