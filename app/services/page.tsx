import { Metadata } from 'next'
import { ServicesHero } from "@/components/sections/services/services-hero"
import { ServiceCategories } from "@/components/sections/services/service-categories"
import { RecruitmentProcess } from "@/components/sections/services/recruitment-process"
import { ServicesFAQ } from "@/components/sections/services/services-faq"

export const metadata: Metadata = {
  title: 'Services | TalentLinks',
  description: 'Comprehensive recruitment services for pharma, healthcare, and IT sectors.',
}

export default function ServicesPage() {
  return (
    <div className="flex flex-col gap-12 md:gap-16 lg:gap-20">
      <ServicesHero />
      <ServiceCategories />
      <RecruitmentProcess />
      <ServicesFAQ />
    </div>
  )
}