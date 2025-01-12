import { MapPin, Mail, Phone } from "lucide-react"

export function ContactInfo() {
  return (
    <ul className="mt-4 space-y-2 text-sm">
      <li className="flex items-center gap-2 text-muted-foreground">
        <MapPin className="h-4 w-4" />
        123 Business Avenue, Suite 100
      </li>
      <li className="flex items-center gap-2 text-muted-foreground">
        <Mail className="h-4 w-4" />
        contact@talentlinks.com
      </li>
      <li className="flex items-center gap-2 text-muted-foreground">
        <Phone className="h-4 w-4" />
        +1 (555) 123-4567
      </li>
    </ul>
  )
}