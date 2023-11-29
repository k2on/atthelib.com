import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'

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
        {process.env.NODE_ENV == "production" && (
        <><Script id="ganalytics" src="https://www.googletagmanager.com/gtag/js?id=G-7ZGZMGWYW1" />
        <Script id="ganalytics-config">
            {`window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-7ZGZMGWYW1');`}
        </Script></>)}
      <body className={inter.className}>{children}</body>
    </html>
  )
}
