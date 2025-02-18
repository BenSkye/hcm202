
import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "../styles/globals.css"
import Header from "@/components/common/Header"
import Footer from "@/components/common/Footer"
import MusicPlayer from "@/components/MusicPlayer";

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Chủ tịch Hồ Chí Minh",
  description: "Tìm hiểu về hành trình cứu nước của Chủ tịch Hồ Chí Minh và các cột mốc lịch sử quan trọng",
  icons: {
    icon: '/vietnam-flag-icon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Header />
        <MusicPlayer />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
