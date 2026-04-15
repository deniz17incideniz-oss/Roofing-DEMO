export default function CTAButton({ href = '#contact', children, size = 'md', variant = 'primary', full = false, pulse = false, className = '' }) {
  const sizes = {
    sm: 'px-5 py-2.5 text-sm',
    md: 'px-7 py-3.5 text-sm',
    lg: 'px-9 py-4 text-base',
    xl: 'px-10 py-5 text-lg',
  };

  const variants = {
    primary: 'bg-accent-500 hover:bg-accent-400 text-brand-950 font-bold shadow-lg shadow-amber-500/20',
    secondary: 'bg-brand-500 hover:bg-brand-400 text-white font-bold shadow-lg shadow-blue-500/20',
    outline: 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-brand-900 font-bold',
  };

  return (
    <a
      href={href}
      className={`
        inline-flex items-center justify-center gap-2 rounded-lg transition-all duration-200
        ${sizes[size]} ${variants[variant]}
        ${full ? 'w-full' : ''}
        ${pulse ? 'cta-pulse' : ''}
        ${className}
      `}
    >
      {children}
      {variant === 'primary' && (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
      )}
    </a>
  );
}
