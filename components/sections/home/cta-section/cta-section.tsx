"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section>
      <div className="container">
        <motion.div 
          className="rounded-lg bg-primary px-8 py-12 text-center text-primary-foreground md:py-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-4 text-3xl font-bold">
            Ready to Transform Your Healthcare Team?
          </h2>
          <p className="mb-8 text-lg">
            Let us help you find the perfect talent for your organization.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}