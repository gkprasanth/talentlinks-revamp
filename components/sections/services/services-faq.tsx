"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What industries do you specialize in?",
    answer: "We specialize in recruitment for healthcare, pharmaceutical, and healthcare IT sectors."
  },
  {
    question: "How long does the recruitment process typically take?",
    answer: "The timeline varies based on role complexity and requirements, typically ranging from 2-8 weeks."
  },
  {
    question: "Do you offer global recruitment services?",
    answer: "Yes, we provide global talent acquisition services with expertise in multiple regions."
  },
  {
    question: "What makes your recruitment process unique?",
    answer: "Our process combines industry expertise, advanced technology, and a global talent network."
  }
]

export function ServicesFAQ() {
  return (
    <section className="py-16">
      <div className="container">
        <h2 className="mb-12 text-center text-3xl font-bold">
          Frequently Asked Questions
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