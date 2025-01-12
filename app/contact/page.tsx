import { ContactHero } from "@/components/sections/contact/contact-hero"
import { ContactForm } from "@/components/sections/contact/contact-form"
import { ContactInfo } from "@/components/sections/contact/contact-info"

export const metadata = {
  title: 'Contact Us | TalentLinks',
  description: 'Get in touch with TalentLinks for your healthcare and IT recruitment needs.',
}

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <div className="container py-16 grid gap-8 md:grid-cols-2">
        <ContactForm />
        <ContactInfo />
      </div>
    </>
  )
}