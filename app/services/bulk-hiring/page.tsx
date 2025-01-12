"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Target, BarChart, Briefcase, GraduationCap, Building2, Clock, FileCheck, CheckCircle2 } from "lucide-react"

const volumeStats = [
  { value: "10K+", label: "Positions Filled Annually" },
  { value: "95%", label: "Fulfillment Rate" },
  { value: "30+", label: "Days Average TAT" },
  { value: "50+", label: "Active Bulk Hiring Programs" }
]

const solutions = [
  {
    title: "Campus Recruitment",
    description: "Large-scale campus hiring programs",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80",
    features: [
      "Multi-campus drives",
      "Virtual hiring events",
      "Assessment programs",
      "Campus relationships"
    ]
  },
  {
    title: "Project-based Hiring",
    description: "Volume staffing for major projects",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80",
    features: [
      "Project teams",
      "Skill-based hiring",
      "Quick ramp-up",
      "Flexible scaling"
    ]
  },
  {
    title: "Location-based Hiring",
    description: "Multi-location recruitment drives",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
    features: [
      "Pan-India presence",
      "Local talent pools",
      "Regional expertise",
      "Cultural alignment"
    ]
  }
]

const process = [
  {
    phase: "Planning",
    steps: [
      {
        icon: Target,
        title: "Requirements Analysis",
        description: "Detailed understanding of volume hiring needs and timelines"
      },
      {
        icon: BarChart,
        title: "Strategy Development",
        description: "Custom hiring strategy and resource planning"
      }
    ]
  },
  {
    phase: "Execution",
    steps: [
      {
        icon: Users,
        title: "Mass Sourcing",
        description: "Multi-channel candidate sourcing and screening"
      },
      {
        icon: FileCheck,
        title: "Batch Processing",
        description: "Efficient handling of large candidate volumes"
      }
    ]
  },
  {
    phase: "Delivery",
    steps: [
      {
        icon: CheckCircle2,
        title: "Quality Checks",
        description: "Standardized quality assurance processes"
      },
      {
        icon: BarChart,
        title: "Analytics",
        description: "Real-time tracking and reporting"
      }
    ]
  }
]

const industries = [
  {
    icon: Building2,
    title: "IT & Technology",
    roles: [
      "Software Engineers",
      "Support Engineers",
      "QA Teams",
      "Technical Support"
    ]
  },
  {
    icon: Briefcase,
    title: "BFSI",
    roles: [
      "Sales Teams",
      "Operations Staff",
      "Customer Service",
      "Back Office"
    ]
  },
  {
    icon: GraduationCap,
    title: "Manufacturing",
    roles: [
      "Production Staff",
      "Quality Teams",
      "Supervisors",
      "Technical Operators"
    ]
  }
]

export default function BulkHiringPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section with Parallax Effect */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80"
            alt="Large team collaboration"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/50" />
        </div>
        <div className="container relative">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Scale Your Team with Bulk Hiring Solutions
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              End-to-end mass recruitment services for large-scale hiring needs. From campus drives to project-based staffing, we deliver quality at scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">Start Bulk Hiring</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#solutions">View Solutions</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {volumeStats.map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Card className="bg-transparent border-primary-foreground/20">
                  <CardContent className="p-6 text-center">
                    <p className="text-4xl font-bold mb-2">{stat.value}</p>
                    <p className="text-primary-foreground/80">{stat.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20">
        <div className="container">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">
              Bulk Hiring Solutions
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive solutions for different volume hiring scenarios
            </p>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-3">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="overflow-hidden h-full hover:shadow-lg transition-all">
                  <div className="relative h-48">
                    <Image
                      src={solution.image}
                      alt={solution.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-2xl font-bold">{solution.title}</h3>
                      <p className="text-muted-foreground">{solution.description}</p>
                    </div>
                  </div>
                  <CardContent className="pt-6">
                    <ul className="space-y-2">
                      {solution.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-primary" />
                          {feature}
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

      {/* Process Timeline Section */}
      <section className="py-20 bg-muted">
        <div className="container">
          <motion.h2
            className="text-3xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Bulk Hiring Process
          </motion.h2>
          <div className="relative">
            <div className="absolute left-1/2 h-full w-px bg-border hidden lg:block" />
            <div className="space-y-20">
              {process.map((phase, phaseIndex) => (
                <div key={phase.phase} className="relative">
                  <motion.h3
                    className="text-2xl font-bold text-center mb-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                  >
                    {phase.phase}
                  </motion.h3>
                  <div className="grid lg:grid-cols-2 gap-8">
                    {phase.steps.map((step, stepIndex) => (
                      <motion.div
                        key={step.title}
                        className={`${stepIndex % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16'}`}
                        initial={{ opacity: 0, x: stepIndex % 2 === 0 ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: stepIndex * 0.2 }}
                      >
                        <Card className="relative h-full hover:shadow-lg transition-shadow">
                          <CardContent className="p-6">
                            <step.icon className="h-12 w-12 text-primary mb-4" />
                            <h4 className="text-xl font-semibold mb-2">{step.title}</h4>
                            <p className="text-muted-foreground">{step.description}</p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20">
        <div className="container">
          <motion.h2
            className="text-3xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Industries We Serve
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <industry.icon className="h-12 w-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-4">{industry.title}</h3>
                    <ul className="space-y-2">
                      {industry.roles.map((role) => (
                        <li key={role} className="flex items-center gap-2 text-muted-foreground">
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
      <section className="py-20 bg-muted">
        <div className="container">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">
              Ready to Scale Your Team?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss your bulk hiring requirements and create a customized solution.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}