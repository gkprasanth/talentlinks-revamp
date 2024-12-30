import Link from "next/link"
import { ContactInfo } from "./contact-info"
import { QuickLinks } from "./quick-links"
import { NewsletterForm } from "./newsletter-form"

export function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container grid gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="text-lg font-semibold">About TalentLinks</h3>
          <p className="mt-4 text-sm text-muted-foreground">
            Global capability center specializing in talent acquisition for pharma, healthcare, and IT sectors.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <QuickLinks />
        </div>
        <div>
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <ContactInfo />
        </div>
        <div>
          <h3 className="text-lg font-semibold">Newsletter</h3>
          <p className="mt-4 text-sm text-muted-foreground">
            Subscribe to our newsletter for the latest updates.
          </p>
          <NewsletterForm />
        </div>
      </div>
      <div className="border-t">
        <div className="container flex flex-col items-center justify-between gap-4 py-6 md:h-16 md:flex-row md:py-0">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} TalentLinks. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <Link href="/privacy" className="hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-foreground">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}