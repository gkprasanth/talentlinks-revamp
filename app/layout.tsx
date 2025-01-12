import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { Navigation } from '@/components/layout/navigation/navigation'
import { Footer } from '@/components/layout/footer'
import { Toaster } from '@/components/ui/toaster'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true
})

export const metadata: Metadata = {
  metadataBase: new URL('https://talentlinks.in'),
  title: {
    default: 'TalentLinks - Leading Talent Acquisition Partner in India',
    template: '%s | TalentLinks'
  },
  description: 'Premier talent acquisition partner in India specializing in IT, manufacturing, BFSI & healthcare recruitment. Expert RPO services & executive search solutions.',
  keywords: [
    'talent acquisition India',
    'recruitment agency India',
    'IT recruitment',
    'manufacturing hiring',
    'BFSI recruitment',
    'RPO services India',
    'executive search firm',
    'bulk hiring solutions',
    'contract staffing India',
    'diversity hiring'
  ],
  authors: [{ name: 'TalentLinks' }],
  creator: 'TalentLinks',
  publisher: 'TalentLinks',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://talentlinks.in',
    title: 'TalentLinks - Leading Talent Acquisition Partner in India',
    description: 'Premier talent acquisition partner in India specializing in IT, manufacturing, BFSI & healthcare recruitment. Expert RPO services & executive search solutions.',
    siteName: 'TalentLinks',
    images: [{
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'TalentLinks - India\'s Trusted Recruitment Partner'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TalentLinks - Leading Talent Acquisition Partner in India',
    description: 'Premier talent acquisition partner in India specializing in IT, manufacturing, BFSI & healthcare recruitment.',
    images: ['/twitter-image.jpg'],
    creator: '@talentlinks',
    site: '@talentlinks'
  },
  manifest: '/site.webmanifest',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
    other: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        url: '/favicon-32x32.png',
      },
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#5bbad5',
      },
    ],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  verification: {
    google: 'your-google-site-verification',
    yandex: 'your-yandex-verification',
    yahoo: 'your-yahoo-verification',
    other: {
      me: ['your-personal-site'],
    },
  },
  alternates: {
    canonical: 'https://talentlinks.in',
    languages: {
      'en-IN': 'https://talentlinks.in',
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-IN" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      </head>
      <body className={inter.className}>
        <ThemeProvider 
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Navigation />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}