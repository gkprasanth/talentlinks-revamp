import { Card, CardContent } from "@/components/ui/card"

const stats = [
  { value: "500+", label: "Healthcare Facilities" },
  { value: "200+", label: "Pharma Companies" },
  { value: "150+", label: "Tech Partners" },
  { value: "50k+", label: "Professionals Placed" }
]

export function IndustryStats() {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container">
        <h2 className="mb-12 text-center text-3xl font-bold">
          Our Industry Impact
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <Card key={stat.label}>
              <CardContent className="pt-6 text-center">
                <p className="text-4xl font-bold text-primary mb-2">{stat.value}</p>
                <p className="text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}