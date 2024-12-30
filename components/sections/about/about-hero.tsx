"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import hero from '@/public/images/hero-bg.jpg'

export function AboutHero() {
  return (
    <section className="relative overflow-hidden">
      <Image
        src={hero}
        alt="Medical team collaboration"
        fill
        className="object-cover aspect-square object-center opacity-20"
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
            Redefining Talent Acquisition
          </motion.h1>
          <motion.p 
            className="mb-8 text-lg text-muted-foreground md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            At TalentLinks, we're revolutionizing how organizations find and retain top talent in healthcare, pharma, and IT sectors. Our mission is to connect visionary companies with exceptional professionals who drive innovation and excellence in healthcare delivery.
          </motion.p>
        </div>
      </div>
    </section>
  )
}