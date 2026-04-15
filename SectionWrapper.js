export default function SectionWrapper({ children, id, className = '', dark = false, noPadding = false }) {
  return (
    <section
      id={id}
      className={`
        ${noPadding ? '' : 'py-16 md:py-24'}
        ${dark ? 'section-dark' : 'bg-white'}
        ${className}
      `}
    >
      <div className="max-w-7xl mx-auto px-6">
        {children}
      </div>
    </section>
  );
}
