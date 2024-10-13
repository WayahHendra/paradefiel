import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "@/styles/globals.css"

import Header from "@/components/Header"
import Footer from "@/components/Footer"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Paradefiel",
  description: "",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={inter.className} 
      >
        <Header />
          {children}
        <Footer />
      </body>
    </html>
  )
}
