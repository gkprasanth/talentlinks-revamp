"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Industries", href: "/industries" },
  { name: "Why Choose Us", href: "/why-choose-us" },
  { name: "Roles", href: "/roles" },
  { name: "Insights", href: "/insights" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
]

export function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block">
              TalentLinks
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  pathname === item.href ? "text-foreground" : "text-foreground/60"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10">
              <div className="flex flex-col space-y-3">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "px-2 py-1 text-lg transition-colors hover:text-foreground/80",
                      pathname === item.href ? "text-foreground" : "text-foreground/60"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </ScrollArea>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}