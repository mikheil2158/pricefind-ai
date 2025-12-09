import { Inter } from 'next/font/google'
import { Metadata } from 'next'
import { Toaster } from '@/components/ui/toaster'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'PriceFind AI - Intelligent Price Comparison',
  description: 'Find the best prices across multiple e-commerce platforms with AI-powered price comparison',
  keywords: ['price comparison', 'AI', 'ecommerce', 'Amazon', 'eBay', 'smart shopping'],
  authors: [{ name: 'MiniMax Agent' }],
  creator: 'MiniMax Agent',
  publisher: 'PriceFind AI',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://pricefind-ai.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'PriceFind AI - Intelligent Price Comparison',
    description: 'Find the best prices across multiple e-commerce platforms with AI-powered price comparison',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://pricefind-ai.vercel.app',
    siteName: 'PriceFind AI',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PriceFind AI - Intelligent Price Comparison',
    description: 'Find the best prices across multiple e-commerce platforms with AI-powered price comparison',
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} font-sans antialiased min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800`}>
        <div className="flex flex-col min-h-screen">
          <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-gray-900/95 dark:supports-[backdrop-filter]:bg-gray-900/60">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">PF</span>
                  </div>
                  <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                    PriceFind AI
                  </h1>
                </div>
              </div>
              <nav className="hidden md:flex items-center space-x-6">
                <a href="#features" className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                  Features
                </a>
                <a href="#about" className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                  About
                </a>
                <a href="#contact" className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                  Contact
                </a>
              </nav>
            </div>
          </header>
          <main className="flex-1">
            {children}
          </main>
          <footer className="border-t bg-white dark:bg-gray-900">
            <div className="container mx-auto px-4 py-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="col-span-1 md:col-span-2">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">PF</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      PriceFind AI
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Intelligent price comparison powered by AI. Find the best deals across multiple platforms.
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">
                    © 2025 PriceFind AI. All rights reserved. Built by MiniMax Agent.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Features</h4>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li>Multi-platform search</li>
                    <li>AI price recommendations</li>
                    <li>Real-time price tracking</li>
                    <li>Price history graphs</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Supported Platforms</h4>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li>Amazon</li>
                    <li>eBay</li>
                    <li>AliExpress</li>
                    <li>+ More coming soon</li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
        </div>
        <Toaster />
      </body>
    </html>
  )
}