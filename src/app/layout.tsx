import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
import Favicon from '@/app/favicon.ico';

export const metadata: Metadata = {
  title: 'Google Clone',
  description: 'google clone',
  icons: [{ rel: 'icon', url: Favicon.src }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link rel="icon" href="favicon.ico" sizes="any" />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
