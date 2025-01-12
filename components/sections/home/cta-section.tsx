"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-16">
      <div className="container">
        <motion.div 
          className="rounded-lg bg-primary px-8 py-12 text-center text-primary-foreground md:py-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-4 text-3xl font-bold">
            Ready to Transform Your Hiring Process?
          </h2>
          <p className="mb-8 text-lg">
            Let's discuss how we can help you find the perfect talent for your organization.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent" asChild>
              <Link href="/services">View Services</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}