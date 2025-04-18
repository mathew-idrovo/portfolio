import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Navbar } from './components/layout/navbar'
import { Footer } from './components/layout/Footer'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})
export const metadata: Metadata = {
  title: 'Mateo Idrovo | Web Developer',
  description:
    'Portfolio de Mateo Idrovo, Frontend Developer especializado en React y Next.js, creando interfaces dinámicas, responsivas y optimizadas.',
  keywords: [
    'frontend',
    'developer',
    'React',
    'Next.js',
    'TypeScript',
    'portfolio',
    'Mateo Idrovo',
  ],
  authors: [{ name: 'Mateo Idrovo' }],
  creator: 'Mateo Idrovo',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://www.mateo-idrovo.com/',
    title: 'Mateo Idrovo | Frontend Developer',
    description:
      'Portfolio de Mateo Idrovo, Frontend Developer especializado en React y Next.js, creando interfaces dinámicas, responsivas y optimizadas.',
    siteName: 'Mateo Idrovo Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Mateo Idrovo Portfolio Preview',
      },
    ],
  },
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
