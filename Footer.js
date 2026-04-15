const PHONE = '+49 30 12345678';
const PHONE_DISPLAY = '+49 30 1234 5678';

const footerLinks = {
  services: [
    { label: 'Roof Repair', href: '#services' },
    { label: 'Roof Replacement', href: '#services' },
    { label: 'Storm Damage', href: '#services' },
    { label: 'Roof Inspection', href: '#services' },
  ],
  company: [
    { label: 'Our Process', href: '#process' },
    { label: 'Projects', href: '#proof' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-brand-950 text-slate-400">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-brand-500 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0h4" /></svg>
              </div>
              <div>
                <span className="font-heading font-bold text-white text-base leading-tight block">Atlas Roofing</span>
                <span className="text-[10px] text-slate-500 font-medium tracking-wider uppercase">Solutions</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Berlin's trusted roofing experts since 2009. Licensed, insured, and committed to transparent, quality work.
            </p>
            <a href={`tel:${PHONE}`} className="text-accent-400 font-bold hover:text-accent-300 transition-colors">
              {PHONE_DISPLAY}
            </a>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm hover:text-white transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm hover:text-white transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service area */}
          <div>
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-4">Service Area</h4>
            <p className="text-sm leading-relaxed mb-3">
              We serve all districts of Berlin and surrounding Brandenburg areas within 30 km.
            </p>
            <div className="flex flex-wrap gap-2 text-xs">
              {['Mitte', 'Charlottenburg', 'Kreuzberg', 'Prenzlauer Berg', 'Schöneberg', 'Friedrichshain', 'Steglitz', 'Spandau'].map((area) => (
                <span key={area} className="bg-white/5 border border-white/10 rounded px-2 py-1">{area}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Atlas Roofing Solutions. Registered in Berlin, Germany. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Impressum</a>
            <a href="#" className="hover:text-white transition-colors">Datenschutz</a>
            <a href="#" className="hover:text-white transition-colors">AGB</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
