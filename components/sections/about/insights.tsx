import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const insights = [
  {
    title: "Future of Healthcare Recruitment",
    date: "March 15, 2024",
    description: "Exploring emerging trends in healthcare talent acquisition"
  },
  {
    title: "Digital Transformation in Pharma",
    date: "March 10, 2024",
    description: "How technology is reshaping pharmaceutical recruitment"
  },
  {
    title: "Building IT Teams in Healthcare",
    date: "March 5, 2024",
    description: "Strategies for assembling high-performing healthcare IT teams"
  }
]

export function Insights() {
  return (
    <section className="py-16" id="insights">
      <div className="container">
        <h2 className="mb-12 text-center text-3xl font-bold">
          Latest Insights
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {insights.map((insight) => (
            <Card key={insight.title} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{insight.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{insight.date}</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{insight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}