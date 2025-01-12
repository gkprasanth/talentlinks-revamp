"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Monitor, Factory, Building2, Stethoscope, ShoppingBag } from "lucide-react"

const industries = [
  {
    icon: Monitor,
    title: "Information Technology",
    description: "Tech talent for software development, data science, and digital transformation.",
    roles: ["Software Engineers", "Data Scientists", "Product Managers", "DevOps Engineers"]
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description: "Skilled professionals for production, operations, and supply chain.",
    roles: ["Production Managers", "Quality Engineers", "Supply Chain Experts", "R&D Specialists"]
  },
  {
    icon: Building2,
    title: "BFSI",
    description: "Expert talent for banking, financial services, and insurance sectors.",
    roles: ["Financial Analysts", "Risk Managers", "Investment Bankers", "Insurance Specialists"]
  },
  {
    icon: Stethoscope,
    title: "Healthcare",
    description: "Healthcare professionals and administrative staff for medical institutions.",
    roles: ["Medical Officers", "Healthcare Administrators", "Clinical Research", "Biotech Experts"]
  },
  {
    icon: ShoppingBag,
    title: "E-commerce",
    description: "Digital talent for online retail and marketplace operations.",
    roles: ["E-commerce Managers", "Digital Marketers", "Category Managers", "Operations Leads"]
  }
]

export function IndustriesSection() {
  return (
    <section>
      <div className="container">
        <motion.h2 
          className="mb-12 text-center text-3xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Industries We Serve
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full transition-shadow hover:shadow-lg">
                <CardHeader>
                  <industry.icon className="h-12 w-12 text-primary" />
                  <CardTitle>{industry.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-muted-foreground">{industry.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {industry.roles.map((role) => (
                      <div key={role} className="text-sm text-muted-foreground">
                        • {role}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}