import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "tmvstudentportal",
  description: "Tilak Maharashtra Vidyapeeth Student Portal",
  icons: {
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tmvlogo-oUqkRVW3nXxREA2BVzQsP1i7zP8G8K.png",
    shortcut: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tmvlogo-oUqkRVW3nXxREA2BVzQsP1i7zP8G8K.png",
    apple: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tmvlogo-oUqkRVW3nXxREA2BVzQsP1i7zP8G8K.png",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tmvlogo-oUqkRVW3nXxREA2BVzQsP1i7zP8G8K.png"
          type="image/png"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
