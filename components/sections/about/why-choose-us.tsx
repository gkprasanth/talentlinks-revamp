import { Shield, Target, Users, Globe } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const reasons = [
  {
    icon: Shield,
    title: "Industry Expertise",
    description: "Deep understanding of healthcare, pharma, and IT sectors"
  },
  {
    icon: Target,
    title: "Precision Matching",
    description: "Advanced algorithms to match the right talent with the right roles"
  },
  {
    icon: Users,
    title: "Global Network",
    description: "Access to a vast network of qualified professionals worldwide"
  },
  {
    icon: Globe,
    title: "End-to-End Solutions",
    description: "Comprehensive recruitment services from sourcing to onboarding"
  }
]

export function WhyChooseUs() {
  return (
    <section className="py-16 bg-muted/50" id="why-choose-us">
      <div className="container">
        <h2 className="mb-12 text-center text-3xl font-bold">
          Why Choose TalentLinks
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <Card key={reason.title}>
              <CardContent className="pt-6">
                <reason.icon className="mb-4 h-12 w-12 text-primary" />
                <h3 className="mb-2 text-xl font-semibold">{reason.title}</h3>
                <p className="text-muted-foreground">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}