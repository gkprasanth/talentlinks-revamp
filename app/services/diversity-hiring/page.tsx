"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Heart, Target, BarChart, Award, Globe, Sparkles, ArrowRight } from "lucide-react"

const impactStats = [
  { value: "45%", label: "Average Gender Diversity Achieved" },
  { value: "30+", label: "D&I Programs Implemented" },
  { value: "90%", label: "Client Satisfaction Rate" },
  { value: "1000+", label: "Diverse Hires Placed" }
]

const initiatives = [
  {
    title: "Women in Leadership",
    description: "Empowering women in senior roles",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80",
    stats: {
      placement: "40% women in leadership roles",
      retention: "85% retention rate",
      satisfaction: "92% satisfaction score"
    }
  },
  {
    title: "Inclusive Tech Teams",
    description: "Building diverse tech workforce",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80",
    stats: {
      placement: "35% diverse tech hires",
      retention: "88% retention rate",
      satisfaction: "90% satisfaction score"
    }
  },
  {
    title: "Cross-Cultural Teams",
    description: "Creating multicultural workplaces",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80",
    stats: {
      placement: "25+ nationalities placed",
      retention: "82% retention rate",
      satisfaction: "89% satisfaction score"
    }
  }
]

const services = [
  {
    icon: Target,
    title: "Strategic D&I Planning",
    description: "Develop comprehensive diversity hiring strategies aligned with organizational goals",
    features: [
      "Goal setting and metrics",
      "Timeline planning",
      "Budget optimization",
      "Stakeholder alignment"
    ]
  },
  {
    icon: Users,
    title: "Inclusive Sourcing",
    description: "Access diverse talent pools through specialized channels and partnerships",
    features: [
      "Diverse talent networks",
      "Community partnerships",
      "Targeted outreach",
      "Inclusive job descriptions"
    ]
  },
  {
    icon: Heart,
    title: "Cultural Integration",
    description: "Ensure successful onboarding and integration of diverse talent",
    features: [
      "Cultural awareness training",
      "Mentorship programs",
      "Support networks",
      "Integration workshops"
    ]
  },
  {
    icon: BarChart,
    title: "Impact Measurement",
    description: "Track and measure the effectiveness of diversity hiring initiatives",
    features: [
      "Diversity metrics",
      "Progress tracking",
      "ROI analysis",
      "Regular reporting"
    ]
  }
]

const benefits = [
  {
    title: "Innovation & Creativity",
    description: "Diverse teams bring varied perspectives leading to increased innovation",
    icon: Sparkles
  },
  {
    title: "Market Understanding",
    description: "Better connect with diverse customer bases through representative teams",
    icon: Globe
  },
  {
    title: "Enhanced Performance",
    description: "Diverse teams show 35% better business performance",
    icon: Award
  }
]

export default function DiversityHiringPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section with Gradient Mesh Background */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(200,200,255,0.1),transparent)] pointer-events-none" />
        <div className="container relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
                Build Inclusive & High-Performing Teams
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Transform your workplace with our specialized diversity hiring solutions. Create an inclusive environment that drives innovation and growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">Start Your D&I Journey</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="#initiatives">View Success Stories</Link>
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative h-[400px] hidden lg:block"
            >
              <Image
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
                alt="Diverse team collaboration"
                fill
                className="object-cover rounded-2xl shadow-2xl"
                priority
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-background/20 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center h-full hover:shadow-lg transition-all border-primary/20">
                  <CardContent className="pt-6">
                    <p className="text-4xl font-bold text-primary mb-2">{stat.value}</p>
                    <p className="text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section id="initiatives" className="py-20 bg-muted/50">
        <div className="container">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
            <p className="text-lg text-muted-foreground">
              Real impact through inclusive hiring practices
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {initiatives.map((initiative, index) => (
              <motion.div
                key={initiative.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="overflow-hidden h-full hover:shadow-lg transition-all">
                  <div className="relative h-48">
                    <Image
                      src={initiative.image}
                      alt={initiative.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white mb-1">{initiative.title}</h3>
                      <p className="text-white/80">{initiative.description}</p>
                    </div>
                  </div>
                  <CardContent className="pt-6">
                    <div className="space-y-2">
                      {Object.entries(initiative.stats).map(([key, value]) => (
                        <div key={key} className="flex items-center gap-2 text-sm">
                          <ArrowRight className="h-4 w-4 text-primary" />
                          <span>{value}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section with Gradient Cards */}
      <section className="py-20">
        <div className="container">
          <motion.h2
            className="text-3xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our D&I Services
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg h-fit">
                        <service.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                        <p className="text-muted-foreground mb-4">{service.description}</p>
                        <ul className="space-y-2">
                          {service.features.map((feature) => (
                            <li key={feature} className="flex items-center gap-2 text-sm">
                              <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted">
        <div className="container">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Benefits of Diverse Teams</h2>
            <p className="text-lg text-muted-foreground">
              Drive business success through workplace diversity
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="text-center h-full hover:shadow-lg transition-all">
                  <CardContent className="p-6">
                    <div className="bg-primary/10 p-4 rounded-full w-fit mx-auto mb-6">
                      <benefit.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">
              Ready to Build a More Inclusive Workplace?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's create a customized diversity hiring strategy for your organization.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">Schedule a Consultation</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}