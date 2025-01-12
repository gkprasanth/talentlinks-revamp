"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { MobileNav } from "./mobile-nav"
import { navigationLinks } from "@/config/navigation"

export function Navigation() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block">
              TalentLinks
            </span>
          </Link>
              
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              {navigationLinks.map((item) => (
                <NavigationMenuItem key={item.href}>
                  {item.items ? (
                    <>
                      <NavigationMenuTrigger className={cn(
                        "bg-transparent hover:bg-transparent focus:bg-transparent",
                        pathname === item.href ? "text-foreground" : "text-foreground/60"
                      )}>
                        {item.name}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="w-[400px] md:w-[500px] lg:w-[600px]">
                          <div className="p-4 pb-2 border-b">
                            <Link 
                              href={item.href}
                              className={cn(
                                "inline-flex items-center gap-2 text-lg font-semibold hover:text-primary transition-colors",
                                pathname === item.href ? "text-primary" : "text-foreground"
                              )}
                            >
                              {item.name}
                              <span className="text-sm text-muted-foreground">→</span>
                            </Link>
                          </div>
                          <ul className="grid gap-3 p-4 md:grid-cols-2">
                            {item.items.map((subItem) => (
                              <li key={subItem.href}>
                                <NavigationMenuLink asChild>
                                  <Link
                                    href={subItem.href}
                                    className={cn(
                                      "block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                                      pathname === subItem.href ? "text-foreground" : "text-foreground/60"
                                    )}
                                  >
                                    <div className="text-sm font-medium leading-none">{subItem.name}</div>
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className={cn(
                        "px-4 py-2 text-sm font-medium transition-colors hover:text-foreground/80",
                        pathname === item.href ? "text-foreground" : "text-foreground/60"
                      )}
                    >
                      {item.name}
                    </Link>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <MobileNav items={navigationLinks} />
      </div>
    </header>
  )
}