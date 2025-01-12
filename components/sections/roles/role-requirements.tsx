import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Award, Clock, Globe } from "lucide-react"

const requirements = [
  {
    icon: GraduationCap,
    title: "Education",
    description: "Required degrees and certifications specific to each role"
  },
  {
    icon: Award,
    title: "Experience",
    description: "Relevant industry experience and specialized skills"
  },
  {
    icon: Clock,
    title: "Commitment",
    description: "Full-time positions with growth opportunities"
  },
  {
    icon: Globe,
    title: "Location",
    description: "Remote, hybrid, and on-site positions available"
  }
]

export function RoleRequirements() {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container">
        <h2 className="mb-12 text-center text-3xl font-bold">
          General Requirements
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {requirements.map((req) => (
            <Card key={req.title}>
              <CardContent className="pt-6">
                <req.icon className="mb-4 h-12 w-12 text-primary" />
                <h3 className="mb-2 text-xl font-semibold">{req.title}</h3>
                <p className="text-muted-foreground">{req.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}