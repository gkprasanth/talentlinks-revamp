"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Search, Target, Users, FileCheck, Handshake, Award, BarChart, Building2, BrainCircuit } from "lucide-react"

const industries = [
  {
    title: "Technology",
    roles: ["Chief Technology Officer", "VP Engineering", "Chief Digital Officer", "Chief Information Officer"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
  },
  {
    title: "Manufacturing",
    roles: ["Chief Operations Officer", "Plant Head", "VP Manufacturing", "Director Operations"],
    image: "https://images.unsplash.com/photo-1581091226825-c6a89e7e4801?auto=format&fit=crop&q=80"
  },
  {
    title: "BFSI",
    roles: ["Chief Financial Officer", "VP Finance", "Head of Risk", "Investment Director"],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"
  }
]

const metrics = [
  { value: "500+", label: "Executive Placements" },
  { value: "45", label: "Days Average Time-to-Fill" },
  { value: "92%", label: "Retention Rate" },
  { value: "100+", label: "Active Clients" }
]

const process = [
  {
    icon: Search,
    title: "Strategic Search",
    description: "Comprehensive market mapping and targeted talent identification",
    details: [
      "Industry analysis",
      "Competitor mapping",
      "Talent pool assessment",
      "Market intelligence"
    ]
  },
  {
    icon: Target,
    title: "Precise Targeting",
    description: "Focused approach to identify and engage ideal candidates",
    details: [
      "Role profiling",
      "Competency mapping",
      "Cultural alignment",
      "Leadership assessment"
    ]
  },
  {
    icon: BrainCircuit,
    title: "Expert Assessment",
    description: "Multi-dimensional evaluation of leadership capabilities",
    details: [
      "Technical expertise",
      "Leadership competencies",
      "Strategic thinking",
      "Change management"
    ]
  }
]

export default function ExecutiveSearchPage() {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      {/* Rest of the component remains the same */}
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <Image
          src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80"
          alt="Executive leadership meeting"
          fill
          className="object-cover opacity-10"
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
              Executive Search Excellence
            </motion.h1>
            <motion.p 
              className="mb-8 text-lg text-muted-foreground md:text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Strategic talent acquisition for visionary leaders. Building exceptional C-suite and senior leadership teams that drive organizational success.
            </motion.p>
            <motion.div
              className="flex flex-col gap-4 sm:flex-row sm:justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button size="lg" asChild>
                <Link href="/contact">Start Your Search</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#process">Learn Our Process</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric) => (
              <Card key={metric.label} className="bg-transparent border-primary-foreground/20">
                <CardContent className="pt-6 text-center">
                  <p className="text-4xl font-bold mb-2">{metric.value}</p>
                  <p className="text-primary-foreground/80">{metric.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-16">
        <div className="container">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">
              Our Executive Search Process
            </h2>
            <p className="text-muted-foreground text-lg">
              A comprehensive approach combining industry expertise with advanced search methodologies to identify and secure exceptional leadership talent.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {process.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="h-full transition-shadow hover:shadow-lg">
                  <CardHeader>
                    <step.icon className="h-12 w-12 text-primary" />
                    <CardTitle>{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-muted-foreground">{step.description}</p>
                    <ul className="space-y-2">
                      {step.details.map((detail) => (
                        <li key={detail} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <motion.h2 
            className="mb-12 text-center text-3xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Industry Expertise
          </motion.h2>
          <div className="grid gap-8 md:grid-cols-3">
            {industries.map((industry) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={industry.image}
                      alt={industry.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white">
                      {industry.title}
                    </h3>
                  </div>
                  <CardContent className="pt-6">
                    <ul className="space-y-2">
                      {industry.roles.map((role) => (
                        <li key={role} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                          {role}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container">
          <motion.div 
            className="rounded-lg bg-primary px-8 py-12 text-center text-primary-foreground md:py-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4 text-3xl font-bold">
              Ready to Build Your Leadership Team?
            </h2>
            <p className="mb-8 text-lg">
              Let's discuss how we can help you find exceptional leaders for your organization.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Schedule a Consultation</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}