import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileStickyCTA from '@/components/ui/MobileStickyCTA';
import Hero from '@/components/sections/Hero';
import TrustStrip from '@/components/sections/TrustStrip';
import Services from '@/components/sections/Services';
import Proof from '@/components/sections/Proof';
import Pricing from '@/components/sections/Pricing';
import Process from '@/components/sections/Process';
import TrustBuilding from '@/components/sections/TrustBuilding';
import CTABand from '@/components/sections/CTABand';
import FAQ from '@/components/sections/FAQ';
import ContactForm from '@/components/sections/ContactForm';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <Services />
        <Proof />
        <Pricing />
        <Process />
        <TrustBuilding />
        <CTABand />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
