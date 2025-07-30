import type { Metadata } from 'next'
import './globals.css'

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
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
