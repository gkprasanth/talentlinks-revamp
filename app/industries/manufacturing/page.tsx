"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Factory, Settings, TrendingUp, Truck, Shield, LineChart, LucideIcon } from "lucide-react"
import manufacturing from "@/public/images/manufacturing.avif"

interface ManufacturingRole {
  icon: LucideIcon;
  title: string;
  positions: string[];
}

const roles: ManufacturingRole[] = [
  {
    icon: Factory,
    title: "Production & Operations",
    positions: ["Plant Manager", "Production Supervisor", "Process Engineer", "Quality Manager"]
  },
  {
    icon: Settings,
    title: "Engineering",
    positions: ["Manufacturing Engineer", "Design Engineer", "Maintenance Engineer", "Automation Engineer"]
  },
  {
    icon: TrendingUp,
    title: "Quality & Compliance",
    positions: ["Quality Control Manager", "Quality Assurance Lead", "Compliance Officer", "ISO Specialist"]
  },
  {
    icon: Truck,
    title: "Supply Chain",
    positions: ["Supply Chain Manager", "Logistics Coordinator", "Procurement Manager", "Inventory Manager"]
  },
  {
    icon: Shield,
    title: "Health & Safety",
    positions: ["HSE Manager", "Safety Officer", "Environmental Specialist", "EHS Coordinator"]
  },
  {
    icon: LineChart,
    title: "Operations Excellence",
    positions: ["Lean Manager", "Six Sigma Black Belt", "Continuous Improvement Lead", "Operations Analyst"]
  }
]

export default function ManufacturingIndustryPage() {
  return (
    <div className="flex flex-col gap-12 md:gap-16 lg:gap-20">
      <section className="relative overflow-hidden">
        <Image
          src={manufacturing}
          alt="Modern manufacturing facility"
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
              Manufacturing Recruitment
            </motion.h1>
            <motion.p 
              className="mb-8 text-lg text-muted-foreground md:text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Expert talent acquisition for India's manufacturing sector. From production to quality control, we help build efficient manufacturing teams.
            </motion.p>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <motion.h2 
            className="mb-12 text-center text-3xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Manufacturing Specializations
          </motion.h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {roles.map((role) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card className="bg-white shadow-md rounded-lg transition-transform transform hover:scale-105">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">{role.title}</h3>
                    <ul className="list-disc list-inside space-y-2">
                      {role.positions.map((position) => (
                        <li key={position} className="text-muted-foreground">
                          {position}
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
    </div>
  )
}