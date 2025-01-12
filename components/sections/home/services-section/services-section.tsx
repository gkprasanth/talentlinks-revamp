"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, Users, Briefcase, UserCheck, Target, Diversity } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Search,
    title: "Executive Search",
    description: "Specialized recruitment for senior leadership and critical roles across industries.",
    href: "/services/executive-search"
  },
  {
    icon: Users,
    title: "RPO Solutions",
    description: "End-to-end recruitment process outsourcing for high-volume hiring needs.",
    href: "/services/rpo-solutions"
  },
  {
    icon: Briefcase,
    title: "Contract Staffing",
    description: "Flexible staffing solutions for project-based and temporary requirements.",
    href: "/services/contract-staffing"
  },
  {
    icon: UserCheck,
    title: "Bulk Hiring",
    description: "Large-scale recruitment drives for expanding organizations.",
    href: "/services/bulk-hiring"
  },
  {
    icon: Target,
    title: "Niche Recruitment",
    description: "Specialized talent acquisition for technical and domain-specific roles.",
    href: "/services/niche-recruitment"
  },
  {
    icon: Diversity,
    title: "Diversity Hiring",
    description: "Inclusive recruitment strategies promoting workplace diversity.",
    href: "/services/diversity-hiring"
  }
]

export function ServicesSection() {
  return (
    <section className="bg-muted/50">
      <div className="container">
        <motion.h2 
          className="mb-12 text-center text-3xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our Services
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Link href={service.href}>
                <Card className="h-full transition-shadow hover:shadow-lg">
                  <CardHeader>
                    <service.icon className="h-12 w-12 text-primary" />
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}