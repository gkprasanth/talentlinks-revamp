"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin } from "lucide-react"

const locations = [
  {
    city: "Mumbai",
    image: "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?auto=format&fit=crop&q=80&w=400",
    description: "Financial hub with focus on BFSI and IT sectors",
    address: "Bandra Kurla Complex"
  },
  {
    city: "Delhi NCR",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&q=80&w=400",
    description: "Major center for IT, manufacturing, and services",
    address: "Cyber City, Gurugram"
  },
  {
    city: "Bengaluru",
    image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&q=80&w=400",
    description: "Tech hub with focus on startups and IT",
    address: "Whitefield"
  },
  {
    city: "Hyderabad",
    image: "https://images.unsplash.com/photo-1572445271230-a78b5944a659?auto=format&fit=crop&q=80&w=400",
    description: "Growing IT and pharma recruitment center",
    address: "HITEC City"
  }
]

export function LocationsSection() {
  return (
    <section>
      <div className="container">
        <motion.h2 
          className="mb-12 text-center text-3xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our Locations
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {locations.map((location) => (
            <motion.div
              key={location.city}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Link href={`/locations/${location.city.toLowerCase()}`}>
                <Card className="h-full transition-shadow hover:shadow-lg">
                  <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                    <Image
                      src={location.image}
                      alt={location.city}
                      fill
                      className="object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      {location.city}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{location.description}</p>
                    <p className="mt-2 text-sm text-muted-foreground">{location.address}</p>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}