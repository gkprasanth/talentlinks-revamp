"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What qualifications are required for healthcare roles?",
    answer: "Requirements vary by position but typically include relevant degrees, certifications, and experience in the healthcare sector."
  },
  {
    question: "Do you offer remote positions?",
    answer: "Yes, we offer remote, hybrid, and on-site positions depending on the role and organization requirements."
  },
  {
    question: "How long is the hiring process?",
    answer: "The hiring process typically takes 2-8 weeks, depending on the role's seniority and specific requirements."
  },
  {
    question: "What support do you provide during the application process?",
    answer: "We provide guidance throughout the entire process, from application to offer negotiation and onboarding."
  }
]

export function RolesFAQ() {
  return (
    <section className="py-16">
      <div className="container">
        <h2 className="mb-12 text-center text-3xl font-bold">
          Common Questions
        </h2>
        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}