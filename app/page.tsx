import { HeroSection } from '@/components/sections/home/hero-section'
import { ServicesSection } from '@/components/sections/home/services-section'
import { IndustriesSection } from '@/components/sections/home/industries-section'
import { StatsSection } from '@/components/sections/home/stats-section'
import { TestimonialsSection } from '@/components/sections/home/testimonials-section'
import { LocationsSection } from '@/components/sections/home/locations-section'
import { CTASection } from '@/components/sections/home/cta-section'

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ServicesSection />
      <IndustriesSection />
      <StatsSection />
      <TestimonialsSection />
      <LocationsSection />
      <CTASection />
    </div>
  )
}