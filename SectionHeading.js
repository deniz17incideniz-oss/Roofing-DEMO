export default function SectionHeading({ tag, title, subtitle, light = false, center = true }) {
  return (
    <div className={`${center ? 'text-center' : ''} mb-12 md:mb-16`}>
      {tag && (
        <span className={`inline-block text-xs font-bold tracking-[0.2em] uppercase mb-3 ${light ? 'text-accent-400' : 'text-brand-500'}`}>
          {tag}
        </span>
      )}
      <h2 className={`font-heading font-bold text-3xl md:text-4xl lg:text-[2.75rem] leading-tight text-balance ${light ? 'text-white' : 'text-slate-900'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg max-w-2xl ${center ? 'mx-auto' : ''} ${light ? 'text-slate-300' : 'text-slate-500'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
