"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { itemVariants } from "../animations/variants"
import type { Role } from "./types"

export function RoleCard({ icon: Icon, title, description }: Role) {
  return (
    <motion.div variants={itemVariants}>
      <Card className="h-full transition-shadow hover:shadow-lg">
        <CardContent className="pt-6">
          <Icon className="mb-4 h-12 w-12 text-primary" />
          <h3 className="mb-2 text-xl font-semibold">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}