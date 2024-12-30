"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function ServicesHero() {
  return (
    <section className="relative overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80"
        alt="Medical professionals collaborating"
        fill
        className="object-cover opacity-20"
        priority
      />
      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h1 
            className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Tailored Recruitment Solutions
          </motion.h1>
          <motion.p 
            className="mb-8 text-lg text-muted-foreground md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Expert talent acquisition services designed specifically for healthcare, pharma, and IT sectors.
          </motion.p>
        </div>
      </div>
    </section>
  )
}