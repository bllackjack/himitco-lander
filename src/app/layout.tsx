import type { Metadata } from 'next'
import './globals.css'
import Providers from '@/components/Providers'
import { Montserrat, Inter } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'HIMITCO - Building Your Digital Future',
  description: 'HIMITCO specializes in cutting-edge web development, mobile apps, and AI platforms. Transform your business with our innovative technology solutions.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${montserrat.variable} ${inter.variable}`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
} 