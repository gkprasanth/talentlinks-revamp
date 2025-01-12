"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Server, Database, Cloud, Lock, Brain } from "lucide-react"
import it from "@/public/images/it.avif"
const roles = [
  {
    icon: Code,
    title: "Software Development",
    positions: ["Full Stack Developer", "Frontend Developer", "Backend Developer", "Mobile Developer"]
  },
  {
    icon: Server,
    title: "DevOps & Infrastructure",
    positions: ["DevOps Engineer", "Cloud Architect", "SRE", "Platform Engineer"]
  },
  {
    icon: Database,
    title: "Data & Analytics",
    positions: ["Data Scientist", "Data Engineer", "Analytics Manager", "ML Engineer"]
  },
  {
    icon: Cloud,
    title: "Cloud Computing",
    positions: ["Cloud Engineer", "AWS Specialist", "Azure Developer", "GCP Expert"]
  },
  {
    icon: Lock,
    title: "Cybersecurity",
    positions: ["Security Engineer", "InfoSec Manager", "Security Analyst", "Compliance Specialist"]
  },
  {
    icon: Brain,
    title: "Emerging Tech",
    positions: ["AI Engineer", "Blockchain Developer", "IoT Specialist", "AR/VR Developer"]
  }
]

export default function ITIndustryPage() {
  return (
    <div className="flex flex-col gap-12 md:gap-16 lg:gap-20">
      <section className="relative overflow-hidden">
        <Image
          src={it}
          alt="IT professionals collaborating"
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
              IT & Technology Recruitment
            </motion.h1>
            <motion.p 
              className="mb-8 text-lg text-muted-foreground md:text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Connecting top tech talent with innovative companies across India. From startups to enterprises, we help build high-performing tech teams.
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
            Key Technology Domains
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