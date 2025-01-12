import { Card, CardContent } from "@/components/ui/card"
import { Shield, Heart, TrendingUp, Lightbulb, Microscope } from "lucide-react"

const roles = [
  {
    icon: Shield,
    title: "Disease Prevention & Control",
    description: "Leading the fight against diseases through innovative prevention strategies and control measures."
  },
  {
    icon: TrendingUp,
    title: "Economic Growth",
    description: "Driving economic development through healthcare innovation and efficiency."
  },
  {
    icon: Heart,
    title: "Improved Patient Outcomes",
    description: "Enhancing healthcare delivery for better patient care and recovery."
  },
  {
    icon: Lightbulb,
    title: "Enhanced Quality of Life",
    description: "Creating solutions that improve overall community well-being."
  },
  {
    icon: Microscope,
    title: "Technological Advancements",
    description: "Pioneering healthcare technology for advanced medical solutions."
  }
]

export function KeyRolesSection() {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container">
        <h2 className="mb-12 text-center text-3xl font-bold">
          Key Healthcare Professional Roles
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {roles.map((role) => (
            <Card key={role.title}>
              <CardContent className="pt-6">
                <role.icon className="mb-4 h-12 w-12 text-primary" />
                <h3 className="mb-2 text-xl font-semibold">{role.title}</h3>
                <p className="text-muted-foreground">{role.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}