"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import type { NavigationItem } from "@/config/navigation"

interface NavItemProps {
  item: NavigationItem
  onSelect?: () => void
}

export function NavItem({ item, onSelect }: NavItemProps) {
  const pathname = usePathname()
  const isActive = pathname === item.href

  if (!item.items) {
    return (
      <Link
        href={item.href}
        onClick={onSelect}
        className={cn(
          "transition-colors hover:text-foreground/80",
          isActive ? "text-foreground" : "text-foreground/60"
        )}
      >
        {item.name}
      </Link>
    )
  }

  return (
    <NavigationMenu>
      <NavigationMenuItem>
        <NavigationMenuTrigger
          className={cn(
            "bg-transparent hover:bg-transparent focus:bg-transparent",
            isActive ? "text-foreground" : "text-foreground/60"
          )}
        >
          {item.name}
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="grid w-[200px] gap-3 p-4">
            {item.items.map((subItem) => (
              <li key={subItem.href}>
                <NavigationMenuLink asChild>
                  <Link
                    href={subItem.href}
                    onClick={onSelect}
                    className={cn(
                      "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                      pathname === subItem.href ? "text-foreground" : "text-foreground/60"
                    )}
                  >
                    <div className="text-sm font-medium leading-none">{subItem.name}</div>
                  </Link>
                </NavigationMenuLink>
              </li>
            ))}
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenu>
  )
}