import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
})

export const metadata: Metadata = {
  title: "Seb's Hub - Your Work Deserves Better Than Just Wi-Fi",
  description: 'A flexible, solar-powered coworking space built for creators, professionals, and remote teams in Lagos & Ibadan.',
  keywords: 'coworking space, Lagos, Ibadan, solar powered, flexible workspace, remote work',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body className="antialiased font-[family-name:var(--font-jakarta)]">
        {children}
      </body>
    </html>
  )
}
