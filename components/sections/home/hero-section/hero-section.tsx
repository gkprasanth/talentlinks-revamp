"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&q=80"
        alt="Healthcare professionals"
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
            Hire the Global Minds to Transform Your Healthcare Legacy
          </motion.h1>
          <motion.p 
            className="mb-8 text-lg text-muted-foreground md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Connecting exceptional talent with leading healthcare, pharma, and IT organizations worldwide.
          </motion.p>
          <motion.div 
            className="flex flex-col gap-4 sm:flex-row sm:justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button size="lg" asChild>
              <Link href="/contact">Get Started</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Schedule a Consultation</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}