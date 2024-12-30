"use client"

import { motion } from "framer-motion"
import { ServiceCard } from "./service-card"
import { serviceCategories } from "./data/categories"
import { containerVariants } from "./animations/variants"

export function ServiceCategories() {
  return (
    <section className="bg-muted/50">
      <div className="container">
        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {serviceCategories.map((category) => (
            <ServiceCard key={category.title} {...category} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}