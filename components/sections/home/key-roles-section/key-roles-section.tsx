"use client"

import { motion } from "framer-motion"
import { RoleCard } from "./role-card"
import { roles } from "./data"
import { containerVariants } from "../animations/variants"

export function KeyRolesSection() {
  return (
    <section className="bg-muted/50">
      <div className="container">
        <motion.h2 
          className="mb-12 text-center text-3xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Key Healthcare Professional Roles
        </motion.h2>
        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {roles.map((role) => (
            <RoleCard key={role.title} {...role} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}