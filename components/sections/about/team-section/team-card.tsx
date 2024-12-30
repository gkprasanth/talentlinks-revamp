"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Linkedin } from "lucide-react"
import { itemVariants } from "./variants"
import type { TeamMember } from "./types"

interface TeamCardProps {
  member: TeamMember
}

export function TeamCard({ member }: TeamCardProps) {
  return (
    <motion.div variants={itemVariants}>
      <Card className="overflow-hidden transition-shadow hover:shadow-lg">
        <div className="aspect-square relative">
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover"
          />
        </div>
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold">{member.name}</h3>
          <p className="text-muted-foreground">{member.role}</p>
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-primary hover:text-primary/80"
          >
            <Linkedin className="h-5 w-5" />
            <span>Connect on LinkedIn</span>
          </a>
        </CardContent>
      </Card>
    </motion.div>
  )
}