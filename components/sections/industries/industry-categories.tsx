import { FlaskConical, Hospital, Server, Microscope } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const industries = [
  {
    icon: FlaskConical,
    title: "Pharma & Biotechnology",
    description: "Supporting pharmaceutical companies and biotech firms with specialized talent acquisition.",
    areas: ["Drug Development", "Clinical Research", "Quality Control", "Regulatory Affairs"]
  },
  {
    icon: Hospital,
    title: "Healthcare Providers",
    description: "Connecting healthcare facilities with qualified medical professionals.",
    areas: ["Hospitals", "Clinics", "Rehabilitation Centers", "Diagnostic Centers"]
  },
  {
    icon: Server,
    title: "Healthcare IT",
    description: "Sourcing tech talent for healthcare technology solutions.",
    areas: ["Health Tech", "Medical Software", "Telemedicine", "Health Analytics"]
  },
  {
    icon: Microscope,
    title: "Research & Development",
    description: "Finding specialized talent for medical research institutions.",
    areas: ["Medical Research", "Clinical Trials", "Lab Operations", "Data Analysis"]
  }
]

export function IndustryCategories() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-2">
          {industries.map((industry) => (
            <Card key={industry.title} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <industry.icon className="mb-4 h-12 w-12 text-primary" />
                <CardTitle>{industry.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">{industry.description}</p>
                <div className="grid grid-cols-2 gap-2">
                  {industry.areas.map((area) => (
                    <div key={area} className="text-sm text-muted-foreground">
                      • {area}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}