import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'
import { Suspense } from 'react'
import { PostHogFeature } from 'posthog-js/react'
import { PHProvider, PostHogPageview } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'At The Lib',
  description: 'Find me at the library',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Suspense>
        <PostHogPageview />
      </Suspense>
      <PHProvider>
          <body className={inter.className}>{children}</body>
      </PHProvider>
    </html>
  )
}
