import { Metadata } from 'next'
import { AboutHero } from "@/components/sections/about/about-hero"
import { WhyChooseUs } from "@/components/sections/about/why-choose-us"
import { TeamSection } from "@/components/sections/about/team-section"
import { Testimonials } from "@/components/sections/about/testimonials"

export const metadata: Metadata = {
  title: 'About Us | TalentLinks',
  description: 'Learn about TalentLinks\' mission to redefine talent acquisition for healthcare and IT sectors.',
}

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-12 md:gap-16 lg:gap-20">
      <AboutHero />
      <WhyChooseUs />
      <TeamSection />
      <Testimonials />
    </div>
  )
}