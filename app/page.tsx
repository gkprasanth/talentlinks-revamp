import { HeroSection } from '@/components/sections/home/hero-section'
import { KeyRolesSection } from '@/components/sections/home/key-roles-section'
import { CTASection } from '@/components/sections/home/cta-section'

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <KeyRolesSection />
      <CTASection />
    </div>
  )
}