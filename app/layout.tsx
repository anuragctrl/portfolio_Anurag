import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Anurag Kumar | Full-Stack Developer & AI Developer',
  description: 'Portfolio of Anurag Kumar, a Computer Application student and aspiring Full-Stack & AI Developer building modern web applications, AI-powered systems and automation workflows.',
  generator: 'v0.app',
  openGraph: {
    title: 'Anurag Kumar | Full-Stack Developer & AI Developer',
    description: 'Building modern web applications, AI-powered systems and practical automation solutions.',
    type: 'website',
    url: 'https://anuragctrl.dev',
  },
  icons: { icon: '/icon.svg' },
}

export const viewport: Viewport = { colorScheme: 'dark', themeColor: '#08090b', userScalable: true }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className="bg-background"><body className="antialiased">{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
