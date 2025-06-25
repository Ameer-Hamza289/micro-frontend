import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Providers } from '../components/Providers'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'MicroMart - Micro Frontend E-commerce Platform',
  description: 'Modern e-commerce built with micro frontends, React, Next.js, and Tailwind CSS v4.1',
  keywords: ['e-commerce', 'micro frontend', 'react', 'nextjs', 'tailwind'],
  authors: [{ name: 'MicroMart Team' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col">
        <Providers>
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
} 