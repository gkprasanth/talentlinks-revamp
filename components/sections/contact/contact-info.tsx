import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Mail, Phone, Clock } from "lucide-react"

const contactDetails = [
  {
    icon: MapPin,
    title: "Address",
    details: ["123 Business Avenue", "Suite 100", "New York, NY 10001"]
  },
  {
    icon: Mail,
    title: "Email",
    details: ["contact@talentlinks.com", "support@talentlinks.com"]
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+1 (555) 123-4567", "+1 (555) 765-4321"]
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Monday - Friday", "9:00 AM - 6:00 PM EST"]
  }
]

export function ContactInfo() {
  return (
    <div className="space-y-6">
      {contactDetails.map((item) => (
        <Card key={item.title}>
          <CardContent className="flex items-start gap-4 pt-6">
            <item.icon className="h-6 w-6 text-primary shrink-0" />
            <div>
              <h3 className="font-semibold">{item.title}</h3>
              {item.details.map((detail, index) => (
                <p key={index} className="text-muted-foreground">
                  {detail}
                </p>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}