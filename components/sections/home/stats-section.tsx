"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

const stats = [
  { value: "1000+", label: "Successful Placements" },
  { value: "200+", label: "Active Clients" },
  { value: "15+", label: "Industries Served" },
  { value: "98%", label: "Client Satisfaction" }
]

export function StatsSection() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="container">
        <motion.h2 
          className="mb-12 text-center text-3xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our Impact in Numbers
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-transparent border-primary-foreground/20">
                <CardContent className="pt-6 text-center">
                  <p className="text-4xl font-bold mb-2">{stat.value}</p>
                  <p className="text-primary-foreground/80">{stat.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}