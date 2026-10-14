import HomeHero from '@/app/components/ui-components/home/home-hero';
import OurCapabilities from '@/app/components/ui-components/home/our-capabilites';
import WhyDPG from '@/app/components/ui-components/home/why-dpg';
import FeaturedOpportunities from '@/app/components/ui-components/home/featured-opportunities';
import OurProcess from '@/app/components/ui-components/home/our-process';
import CurrentListings from '@/app/components/ui-components/home/current-listings';
import DPGInsight from '@/app/components/ui-components/home/dpg-insight';
import DPGTestimonials from '@/app/components/ui-components/home/dpg-testimonials';

export default function Home() {
  return (
    <>
      <HomeHero />
      <OurCapabilities />
      <WhyDPG />
      <FeaturedOpportunities />
      <OurProcess />
      <CurrentListings />
      <DPGInsight />
      <DPGTestimonials />
    </>
  );
}
