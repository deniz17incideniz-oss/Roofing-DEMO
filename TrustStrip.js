export default function TrustStrip() {
  const badges = [
    { icon: '🛡️', label: 'Fully Licensed & Insured' },
    { icon: '⭐', label: '4.9 Google Rating' },
    { icon: '🏆', label: '15+ Years Experience' },
    { icon: '✅', label: '10-Year Warranty' },
    { icon: '⚡', label: '48h Inspection' },
  ];

  return (
    <section className="bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6 py-5">
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 md:gap-x-12">
          {badges.map((badge) => (
            <div key={badge.label} className="flex items-center gap-2 text-sm font-medium text-slate-600">
              <span className="text-lg">{badge.icon}</span>
              <span>{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
