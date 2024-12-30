import Link from "next/link"
import { NavItem } from "./nav-item"
import { MobileNav } from "./mobile-nav"
import { navigationLinks } from "@/config/navigation"

export function Navigation() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block">
              TalentLinks
            </span>
          </Link>
          <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
            {navigationLinks.map((item) => (
              <NavItem key={item.href} item={item} />
            ))}
          </nav>
        </div>
        <MobileNav items={navigationLinks} />
      </div>
    </header>
  )
}