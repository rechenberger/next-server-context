import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <div className="container flex flex-col gap-8">
            Layout:
            <nav className="flex flex-row gap-4">
              <Link className="px-2 py-1 border rounded" href="/">
                /
              </Link>
              <Link
                className="px-2 py-1 border rounded"
                href="/a/b/c?p1=a&p2=b&p2=3"
              >
                /a/b/c?p1=a&p2=b&p2=3
              </Link>
              <Link
                className="px-2 py-1 border rounded"
                href="/zod/a/b/c?p1=a&p2=b&p2=3&p3=abc"
              >
                /zod/a/b/c?p1=a&p2=b&p2=3&p3=abc
              </Link>
            </nav>
            <hr />
            Page:
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
