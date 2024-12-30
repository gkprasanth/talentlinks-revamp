export type NavigationItem = {
  name: string
  href: string
  items?: NavigationItem[]
}

export const navigationLinks: NavigationItem[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Industries", href: "/industries" },
  { name: "Roles", href: "/roles" },
  { name: "Contact", href: "/contact" }
]