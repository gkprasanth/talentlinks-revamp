"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function IndustriesHero() {
  return (
    <section className="relative overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1581093458791-9d58e59c3e3d?auto=format&fit=crop&q=80"
        alt="Modern healthcare facility"
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
            Industries We Serve
          </motion.h1>
          <motion.p 
            className="mb-8 text-lg text-muted-foreground md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            From cutting-edge pharmaceutical research to innovative healthcare technology, we provide specialized recruitment solutions that drive industry excellence and innovation.
          </motion.p>
        </div>
      </div>
    </section>
  )
}