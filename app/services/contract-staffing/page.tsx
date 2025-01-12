"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Clock, FileCheck, Briefcase, Building2, Coins, Shield, LineChart } from "lucide-react"

const features = [
  {
    title: "Flexible Workforce",
    description: "Scale your team up or down based on project needs",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
  },
  {
    title: "Cost Control",
    description: "Optimize staffing costs with flexible hiring solutions",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80"
  },
  {
    title: "Quick Deployment",
    description: "Access skilled professionals ready to start immediately",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
  }
]

const services = [
  {
    icon: Briefcase,
    title: "IT Contract Staffing",
    points: [
      "Software Developers",
      "Project Managers",
      "System Administrators",
      "Data Scientists"
    ]
  },
  {
    icon: Building2,
    title: "Corporate Functions",
    points: [
      "Finance & Accounting",
      "HR & Administration",
      "Marketing & Sales",
      "Operations"
    ]
  },
  {
    icon: Shield,
    title: "Compliance Management",
    points: [
      "Contract Documentation",
      "Statutory Compliance",
      "Payroll Processing",
      "Benefits Administration"
    ]
  }
]

const benefits = [
  {
    icon: Clock,
    title: "Rapid Deployment",
    description: "Get skilled professionals onboard within days, not weeks"
  },
  {
    icon: Coins,
    title: "Cost Savings",
    description: "Reduce overhead costs and optimize staffing expenses"
  },
  {
    icon: LineChart,
    title: "Scalability",
    description: "Easily scale your workforce based on business needs"
  },
  {
    icon: Shield,
    title: "Risk Mitigation",
    description: "Comprehensive compliance and contract management"
  }
]

export default function ContractStaffingPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section with Split Design */}
      <section className="min-h-screen relative">
        <div className="grid lg:grid-cols-2 min-h-screen">
          <div className="flex items-center p-8 lg:p-16 bg-background">
            <div className="max-w-xl">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Contract Staffing Solutions
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-8">
                  Flexible workforce solutions for modern businesses. Get skilled professionals for your temporary and project-based needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild>
                    <Link href="/contact">Hire Contract Staff</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="#services">Explore Services</Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <Image
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80"
              alt="Professional team collaboration"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-primary/20" />
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-muted">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="relative h-64 mb-6 rounded-lg overflow-hidden">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40" />
                  <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">
              Our Contract Staffing Services
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive staffing solutions tailored to your business needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="relative h-full hover:shadow-lg transition-shadow">
                  <CardContent className="pt-12">
                    <div className="absolute top-0 -translate-y-1/2 left-6">
                      <div className="bg-primary text-primary-foreground p-4 rounded-full">
                        <service.icon className="h-6 w-6" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                    <ul className="space-y-2">
                      {service.points.map((point) => (
                        <li key={point} className="flex items-center gap-2 text-muted-foreground">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                          {point}
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

      {/* Benefits Section with Alternating Layout */}
      <section className="py-20 bg-muted">
        <div className="container">
          <motion.h2
            className="text-3xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Why Choose Contract Staffing
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 flex items-start gap-4">
                    <benefit.icon className="h-8 w-8 text-primary shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">
              Ready to Build Your Flexible Workforce?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss how our contract staffing solutions can help you achieve your business goals.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">Get Started Today</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}