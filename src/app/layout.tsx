import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { NextAuthProvider } from '@/providers/auth'
import Header from '../components/Header'
import Footer from '@/components/Footer'
import ToastProvider from '@/providers/toast'

const poppins = Poppins({
  subsets: ['latin'], weight: [
    '400',
    '500',
    '600',
    '700',
    '800',
    '900'
  ]
})

export const metadata: Metadata = {
  title: 'Best Trip',
  description: 'Sistema de Reserva de Viagens',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="flex h-full flex-col">
          <NextAuthProvider>
            <ToastProvider>
              <Header />
              <div className="flex-1">{children}</div>
              <Footer />
            </ToastProvider>
          </NextAuthProvider>
        </div>
      </body>
    </html >
  )
}
