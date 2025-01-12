"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, LineChart, Settings, Clock, Shield, Zap, Target, FileCheck, BarChart, Building2 } from "lucide-react"

const metrics = [
  { value: "1M+", label: "Candidates Placed" },
  { value: "25+", label: "Enterprise Clients" },
  { value: "40%", label: "Cost Reduction" },
  { value: "60%", label: "Faster Time-to-Hire" }
]

const industries = [
  {
    title: "Technology & IT",
    image: "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&q=80",
    description: "Large-scale tech talent acquisition",
    volumes: ["100+ developers monthly", "DevOps & Cloud teams", "Product & Design roles"]
  },
  {
    title: "Manufacturing",
    image: "https://images.unsplash.com/photo-1581091226825-c6a89e7e4801?auto=format&fit=crop&q=80",
    description: "End-to-end manufacturing recruitment",
    volumes: ["Plant operations staff", "Technical specialists", "Quality teams"]
  },
  {
    title: "BFSI",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
    description: "Banking & financial services hiring",
    volumes: ["Branch operations", "Risk & compliance", "Sales teams"]
  }
]

const process = [
  {
    icon: Target,
    title: "Strategic Planning",
    description: "Customized RPO strategy development",
    details: [
      "Workforce planning",
      "Hiring roadmap creation",
      "Process optimization",
      "Technology integration"
    ]
  },
  {
    icon: Users,
    title: "Dedicated Team",
    description: "Exclusive recruitment team assignment",
    details: [
      "Industry specialists",
      "Technical recruiters",
      "Sourcing experts",
      "Account managers"
    ]
  },
  {
    icon: BarChart,
    title: "Analytics & Reporting",
    description: "Data-driven recruitment insights",
    details: [
      "Real-time dashboards",
      "Performance metrics",
      "Quality analytics",
      "Cost tracking"
    ]
  }
]

const benefits = [
  {
    icon: LineChart,
    title: "Cost Efficiency",
    description: "Reduce recruitment costs by up to 40% through optimized processes and economies of scale"
  },
  {
    icon: Clock,
    title: "Faster Hiring",
    description: "Decrease time-to-hire by 60% with streamlined workflows and dedicated resources"
  },
  {
    icon: Settings,
    title: "Process Excellence",
    description: "Standardized and optimized recruitment processes ensuring consistent quality"
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Rigorous quality checks and compliance measures at every step"
  },
  {
    icon: Building2,
    title: "Scalability",
    description: "Flexible solutions that grow with your business needs and hiring volumes"
  },
  {
    icon: Zap,
    title: "Technology Edge",
    description: "Advanced recruitment tools and analytics for better hiring decisions"
  }
]

export default function RPOSolutionsPage() {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <Image
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
          alt="Modern corporate office with team collaboration"
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
              Enterprise RPO Solutions
            </motion.h1>
            <motion.p 
              className="mb-8 text-lg text-muted-foreground md:text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Transform your hiring process with our comprehensive recruitment process outsourcing solutions. Scale your team efficiently with our proven methodologies and dedicated expertise.
            </motion.p>
            <motion.div
              className="flex flex-col gap-4 sm:flex-row sm:justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button size="lg" asChild>
                <Link href="/contact">Schedule Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#process">View Process</Link>
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
              Our RPO Process
            </h2>
            <p className="text-muted-foreground text-lg">
              A comprehensive, data-driven approach to large-scale recruitment that ensures quality, efficiency, and scalability.
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
            Industry Solutions
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
                    <p className="mb-4 font-medium">{industry.description}</p>
                    <ul className="space-y-2">
                      {industry.volumes.map((volume) => (
                        <li key={volume} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                          {volume}
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

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container">
          <motion.h2 
            className="mb-12 text-center text-3xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            RPO Benefits
          </motion.h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full transition-shadow hover:shadow-lg">
                  <CardContent className="pt-6">
                    <benefit.icon className="h-12 w-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
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
              Ready to Transform Your Hiring Process?
            </h2>
            <p className="mb-8 text-lg">
              Let's discuss how our RPO solutions can help you scale your team efficiently.
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