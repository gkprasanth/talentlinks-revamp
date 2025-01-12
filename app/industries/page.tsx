import { Metadata } from 'next'
import { IndustriesHero } from "@/components/sections/industries/industries-hero"
import { IndustryCategories } from "@/components/sections/industries/industry-categories"
import { IndustryStats } from "@/components/sections/industries/industry-stats"
import { IndustryPartners } from "@/components/sections/industries/industry-partners"

export const metadata: Metadata = {
  title: 'Industries | TalentLinks',
  description: 'Specialized recruitment solutions for pharma, healthcare providers, and healthcare IT sectors.',
}

export default function IndustriesPage() {
  return (
    <div className="flex flex-col gap-12 md:gap-16 lg:gap-20">
      <IndustriesHero />
      <IndustryCategories />
      <IndustryStats />
      <IndustryPartners />
    </div>
  )
}