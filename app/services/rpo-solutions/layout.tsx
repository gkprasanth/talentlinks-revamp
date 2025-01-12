import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'RPO Solutions | TalentLinks',
  description: 'End-to-end recruitment process outsourcing solutions for enterprises in India. Specialized in IT, Manufacturing, BFSI sectors with scalable hiring solutions.',
  keywords: [
    'RPO services India',
    'recruitment process outsourcing',
    'bulk hiring solutions',
    'enterprise recruitment',
    'scalable hiring',
    'end-to-end recruitment',
    'recruitment outsourcing India',
    'hiring solutions'
  ]
}

export default function RPOSolutionsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}