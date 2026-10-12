import HomeHero from '@/app/components/ui-components/home/home-hero';
import OurCapabilities from '@/app/components/ui-components/home/our-capabilites';
import WhyDPG from '@/app/components/ui-components/home/why-dpg';
import FeaturedOpportunities from '@/app/components/ui-components/home/featured-opportunities';

export default function Home() {
  return (
    <>
      <HomeHero />
      <OurCapabilities />
      <WhyDPG />
      <FeaturedOpportunities />
    </>
  );
}
