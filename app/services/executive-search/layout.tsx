import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Executive Search Services | TalentLinks',
  description: 'Premium executive search services for senior leadership and C-suite positions in India. Specialized in IT, Manufacturing, BFSI sectors.',
  keywords: [
    'executive search India',
    'C-suite recruitment',
    'leadership hiring',
    'senior management recruitment',
    'executive headhunting',
    'CXO search firm'
  ]
}

export default function ExecutiveSearchLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}