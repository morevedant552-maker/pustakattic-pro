import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { Providers } from '@/components/providers'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'PUSTAKATTIC PRO - Premium Online Bookstore',
  description:
    'Discover thousands of books from the worlds greatest authors. Premium online bookstore experience.',
  keywords: [
    'books',
    'online bookstore',
    'ebooks',
    'fiction',
    'fantasy',
    'science fiction',
  ],
  authors: [{ name: 'PUSTAKATTIC PRO' }],
  creator: 'PUSTAKATTIC PRO',
  metadataBase: new URL('https://pustakattic.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://pustakattic.com',
    siteName: 'PUSTAKATTIC PRO',
    title: 'PUSTAKATTIC PRO - Premium Online Bookstore',
    description:
      'Discover thousands of books from the worlds greatest authors. Premium online bookstore experience.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PUSTAKATTIC PRO - Premium Online Bookstore',
    description:
      'Discover thousands of books from the worlds greatest authors. Premium online bookstore experience.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} font-inter`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
