import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Mail, Phone, Clock } from "lucide-react"

const contactDetails = [
  {
    icon: MapPin,
    title: "Address",
    details: ["Flat no 506, Sri Lakshmi Sai towers,", "bagh ameeri,", "Kukatpally. 500072"]
  },
  {
    icon: Mail,
    title: "Email",
    details: ["recruiter@talentlinks.in", "recruiter.talentlinks@gmail.com"]
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+91 87920 77514"]
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Monday - Friday", "9:00 AM - 6:00 PM IST"]
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