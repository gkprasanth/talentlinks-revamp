import { RolesHero } from "@/components/sections/roles/roles-hero"
import { RoleCategories } from "@/components/sections/roles/role-categories"
import { RoleRequirements } from "@/components/sections/roles/role-requirements"
import { RolesFAQ } from "@/components/sections/roles/roles-faq"

export const metadata = {
  title: 'Roles | TalentLinks',
  description: 'Explore specialized healthcare, pharma, and IT roles we recruit for.',
}

export default function RolesPage() {
  return (
    <>
      <RolesHero />
      <RoleCategories />
      <RoleRequirements />
      <RolesFAQ />
    </>
  )
}