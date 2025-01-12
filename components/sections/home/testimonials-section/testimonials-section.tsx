"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    quote: "TalentLinks has been instrumental in building our tech team. Their understanding of the IT sector is exceptional.",
    author: "Rajesh Kumar",
    role: "CTO",
    company: "Leading IT Services Company, Bangalore"
  },
  {
    quote: "Their RPO solutions helped us scale our operations efficiently. The quality of candidates is consistently high.",
    author: "Priya Sharma",
    role: "HR Director",
    company: "Manufacturing Giant, Mumbai"
  },
  {
    quote: "The team's expertise in BFSI recruitment has helped us find specialized talent for critical roles.",
    author: "Amit Patel",
    role: "VP HR",
    company: "Top Private Bank, Delhi NCR"
  }
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((current) => 
      current === testimonials.length - 1 ? 0 : current + 1
    )
  }

  const previous = () => {
    setCurrentIndex((current) => 
      current === 0 ? testimonials.length - 1 : current - 1
    )
  }

  return (
    <section className="py-16 bg-muted/50">
      <div className="container">
        <motion.h2 
          className="mb-12 text-center text-3xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Client Testimonials
        </motion.h2>
        <div className="relative mx-auto max-w-3xl">
          <Card>
            <CardContent className="pt-6">
              <motion.blockquote 
                className="text-center"
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-xl font-medium mb-4">
                  "{testimonials[currentIndex].quote}"
                </p>
                <footer>
                  <p className="font-semibold">{testimonials[currentIndex].author}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonials[currentIndex].role}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonials[currentIndex].company}
                  </p>
                </footer>
              </motion.blockquote>
            </CardContent>
          </Card>
          <div className="flex justify-center gap-4 mt-6">
            <Button
              variant="outline"
              size="icon"
              onClick={previous}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}