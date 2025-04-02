import type { Metadata } from 'next'
import { Source_Serif_4 } from 'next/font/google'
import './globals.css'

const serif = Source_Serif_4({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-serif',
  weight: ['400', '500', '600'],
})

export const metadata: Metadata = {
  title: 'Your Portfolio',
  description: 'Personal portfolio and work experience',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={serif.variable}>
      <body className={`${serif.className} antialiased`}>{children}</body>
    </html>
  )
} 