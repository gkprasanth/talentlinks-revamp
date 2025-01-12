"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
        alt="Corporate office in India"
        fill
        className="object-cover opacity-10"
        priority
      />
      <div className="container relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h1 
            className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            India's Trusted Partner in Talent Acquisition
          </motion.h1>
          <motion.p 
            className="mb-8 text-lg text-muted-foreground md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Connecting exceptional talent with leading organizations across IT, Manufacturing, BFSI, and Healthcare sectors. Specialized in executive search, RPO solutions, and bulk hiring services.
          </motion.p>
          <motion.div 
            className="flex flex-col gap-4 sm:flex-row sm:justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button size="lg" asChild>
              <Link href="/contact">Request Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/services">Explore Services</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}