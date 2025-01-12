"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function NewsletterForm() {
  return (
    <form className="mt-4 flex gap-2">
      <Input
        type="email"
        placeholder="Enter your email"
        className="max-w-[220px]"
      />
      <Button type="submit">Subscribe</Button>
    </form>
  )
}