"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    quote: "TalentLinks helped us build our dream healthcare team in record time.",
    author: "Dr. Sarah Johnson",
    role: "Medical Director",
    company: "Healthcare Innovation Corp"
  },
  {
    quote: "Their understanding of the pharma sector is unmatched.",
    author: "Michael Chen",
    role: "HR Director",
    company: "PharmaTech Solutions"
  },
  {
    quote: "Outstanding IT talent sourcing for our healthcare platforms.",
    author: "Lisa Rodriguez",
    role: "CTO",
    company: "HealthTech Systems"
  }
]

export function Testimonials() {
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
    <section className="py-16 bg-muted/50" id="testimonials">
      <div className="container">
        <h2 className="mb-12 text-center text-3xl font-bold">
          What Our Clients Say
        </h2>
        <div className="relative mx-auto max-w-2xl">
          <Card>
            <CardContent className="pt-6">
              <blockquote className="text-center">
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
              </blockquote>
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