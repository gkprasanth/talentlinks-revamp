"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Stethoscope, Heart, Brain, Microscope, Hospital, Shield } from "lucide-react"

const roles = [
  {
    icon: Stethoscope,
    title: "Clinical Care",
    positions: ["Medical Officers", "Specialists", "Nursing Staff", "Clinical Coordinators"]
  },
  {
    icon: Hospital,
    title: "Hospital Administration",
    positions: ["Hospital Managers", "Operations Directors", "Quality Managers", "Department Heads"]
  },
  {
    icon: Brain,
    title: "Research & Development",
    positions: ["Clinical Researchers", "Research Scientists", "Lab Directors", "Research Coordinators"]
  },
  {
    icon: Microscope,
    title: "Diagnostics",
    positions: ["Lab Technicians", "Pathologists", "Radiologists", "Diagnostic Specialists"]
  },
  {
    icon: Heart,
    title: "Patient Care",
    positions: ["Care Coordinators", "Therapists", "Support Staff", "Patient Relations"]
  },
  {
    icon: Shield,
    title: "Quality & Compliance",
    positions: ["Quality Officers", "Compliance Managers", "Regulatory Affairs", "Accreditation Specialists"]
  }
]

export default function HealthcareIndustryPage() {
  return (
    <div className="flex flex-col gap-12 md:gap-16 lg:gap-20">
      <section className="relative overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&q=80"
          alt="Modern healthcare facility"
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
              Healthcare Recruitment
            </motion.h1>
            <motion.p 
              className="mb-8 text-lg text-muted-foreground md:text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Expert talent acquisition for healthcare providers. From clinical professionals to administrative staff, we help build exceptional healthcare teams.
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
            Healthcare Specializations
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