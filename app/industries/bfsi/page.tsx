"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, LineChart, Shield, Coins, Users, FileText } from "lucide-react"
import bfsi from "@/public/images/bsfi.avif"
const roles = [
  {
    icon: Building2,
    title: "Banking Operations",
    positions: ["Branch Manager", "Relationship Manager", "Credit Analyst", "Risk Manager"]
  },
  {
    icon: LineChart,
    title: "Investment Banking",
    positions: ["Investment Banker", "M&A Specialist", "Equity Research Analyst", "Portfolio Manager"]
  },
  {
    icon: Shield,
    title: "Insurance",
    positions: ["Insurance Underwriter", "Claims Manager", "Actuary", "Insurance Sales Manager"]
  },
  {
    icon: Coins,
    title: "Wealth Management",
    positions: ["Wealth Advisor", "Financial Planner", "Asset Manager", "Private Banker"]
  },
  {
    icon: Users,
    title: "Retail Banking",
    positions: ["Personal Banker", "Loan Officer", "Product Manager", "Digital Banking Lead"]
  },
  {
    icon: FileText,
    title: "Compliance & Risk",
    positions: ["Compliance Officer", "Risk Analyst", "AML Specialist", "Internal Auditor"]
  }
]

export default function BFSIIndustryPage() {
  return (
    <div className="flex flex-col gap-12 md:gap-16 lg:gap-20">
      <section className="relative overflow-hidden">
        <Image
          src={bfsi}
          alt="Modern financial district"
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
              BFSI Recruitment Solutions
            </motion.h1>
            <motion.p 
              className="mb-8 text-lg text-muted-foreground md:text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Specialized recruitment services for banking, financial services, and insurance sectors. Building strong teams for India's financial industry.
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
            BFSI Specializations
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
                <Card className="h-full transition-shadow hover:shadow-lg">
                  <CardHeader>
                    <role.icon className="h-12 w-12 text-primary" />
                    <CardTitle>{role.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {role.positions.map((position) => (
                        <li key={position} className="text-muted-foreground">
                          • {position}
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