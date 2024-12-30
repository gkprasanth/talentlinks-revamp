import { Card, CardContent } from "@/components/ui/card"
import { Search, Users, FileCheck, UserCheck } from "lucide-react"

const steps = [
  {
    icon: Search,
    title: "Sourcing",
    description: "Identifying top talent through our global network"
  },
  {
    icon: FileCheck,
    title: "Screening",
    description: "Thorough assessment of skills and experience"
  },
  {
    icon: Users,
    title: "Selection",
    description: "Matching candidates with organizational needs"
  },
  {
    icon: UserCheck,
    title: "Onboarding",
    description: "Ensuring smooth transition into new roles"
  }
]

export function RecruitmentProcess() {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container">
        <h2 className="mb-12 text-center text-3xl font-bold">
          Our Recruitment Process
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <Card key={step.title}>
              <CardContent className="pt-6">
                <step.icon className="mb-4 h-12 w-12 text-primary" />
                <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}