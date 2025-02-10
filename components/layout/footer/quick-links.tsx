import Link from "next/link"

const links = [
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  // { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
] as const

export function QuickLinks() {
  return (
    <ul className="mt-4 space-y-2 text-sm">
      {links.map((link) => (
        <li key={link.href}>
          <Link 
            href={link.href} 
            className="text-muted-foreground hover:text-foreground"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  )
}