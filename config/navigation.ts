export type NavigationItem = {
  name: string
  href: string
  items?: NavigationItem[]
}

export const navigationLinks: NavigationItem[] = [
  { name: "Home", href: "/" },
  { 
    name: "Services",
    href: "/services",
    items: [
      { name: "Executive Search", href: "/services/executive-search" },
      { name: "RPO Solutions", href: "/services/rpo-solutions" },
      { name: "Contract Staffing", href: "/services/contract-staffing" },
      { name: "Bulk Hiring", href: "/services/bulk-hiring" },
      { name: "Diversity Hiring", href: "/services/diversity-hiring" }
    ]
  },
  {
    name: "Industries",
    href: "/industries",
    items: [
      { name: "Information Technology", href: "/industries/it" },
      { name: "Manufacturing", href: "/industries/manufacturing" },
      { name: "BFSI", href: "/industries/bfsi" },
      { name: "Healthcare", href: "/industries/healthcare" },
      { name: "E-commerce", href: "/industries/e-commerce" }
    ]
  },
  // {
  //   name: "Locations",
  //   href: "/locations",
  //   items: [
  //     { name: "Mumbai", href: "/locations/mumbai" },
  //     { name: "Delhi NCR", href: "/locations/delhi-ncr" },
  //     { name: "Bengaluru", href: "/locations/bengaluru" },
  //     { name: "Hyderabad", href: "/locations/hyderabad" },
  //     { name: "Chennai", href: "/locations/chennai" },
  //     { name: "Pune", href: "/locations/pune" }
  //   ]
  // },
  {
    name: "Resources",
    href: "/resources",
    items: [
      { name: "Case Studies", href: "/resources/case-studies" },
      { name: "Blog", href: "/resources/blog" },
      { name: "Insights", href: "/resources/insights" },
      { name: "HR Trends", href: "/resources/hr-trends" }
    ]
  },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" }
]