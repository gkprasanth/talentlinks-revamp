import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Stethoscope, FlaskConical , Code, Microscope, Brain, Shield } from "lucide-react"

const roles = [
  {
    icon: Stethoscope,
    title: "Medical Professionals",
    positions: ["Physicians", "Nurses", "Specialists", "Surgeons"]
  },
  {
    icon: FlaskConical ,
    title: "Research & Development",
    positions: ["Clinical Researchers", "Lab Directors", "Research Scientists", "Biostatisticians"]
  },
  {
    icon: Code,
    title: "Healthcare IT",
    positions: ["Health Informatics", "Software Engineers", "Data Scientists", "Security Specialists"]
  },
  {
    icon: Microscope,
    title: "Laboratory",
    positions: ["Lab Technicians", "Pathologists", "Quality Control", "Lab Managers"]
  },
  {
    icon: Brain,
    title: "Management",
    positions: ["Medical Directors", "Department Heads", "Project Managers", "Operations Leaders"]
  },
  {
    icon: Shield,
    title: "Regulatory & Quality",
    positions: ["Quality Assurance", "Regulatory Affairs", "Compliance Officers", "Auditors"]
  }
]

export function RoleCategories() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {roles.map((role) => (
            <Card key={role.title} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <role.icon className="mb-4 h-12 w-12 text-primary" />
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
          ))}
        </div>
      </div>
    </section>
  )
}