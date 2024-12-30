"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import hero from '@/public/images/hero-bg.jpg'

export function HeroSection() {
  return (
    <header className="relative py-20 md:py-32">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={hero} 
          alt="Hero background"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Optional: Add an overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="container relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h1
            className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hire the Global Minds to Transform Your Healthcare Legacy
          </motion.h1>
          <motion.p
            className="mb-8 text-lg text-white/90 md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Connecting exceptional talent with leading healthcare, pharma, and IT organizations worldwide.
          </motion.p>
          <motion.nav
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
          </motion.nav>
        </div>
      </div>
    </header>
  );
}
