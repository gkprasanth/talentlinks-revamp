import { MapPin, Mail, Phone } from "lucide-react"

export function ContactInfo() {
  return (
    <ul className="mt-4 space-y-2 text-sm">
      <li className="flex items-center gap-2 text-muted-foreground">
        <MapPin className="h-4 w-4" />
        Flat no 506 Sri Lakshmi Sai towers
      </li>
      <li className="flex items-center gap-2 text-muted-foreground">
        <Mail className="h-4 w-4" />
        recruiter@talentlinks.in
      </li>
      <li className="flex items-center gap-2 text-muted-foreground">
        <Phone className="h-4 w-4" />
        +91 87920 77514
      </li>
    </ul>
  )
}