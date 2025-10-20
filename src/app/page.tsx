
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { HeroSection } from '@/components/landing/hero-section';
import { PlansSection } from '@/components/landing/plans-section';
import { ProviderSearchSection } from '@/components/landing/provider-search-section';
import { HowItWorksSection } from '@/components/landing/how-it-works-section';
import { FaqSection } from '@/components/landing/faq-section';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <PlansSection />
        <HowItWorksSection />
        <ProviderSearchSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}

    