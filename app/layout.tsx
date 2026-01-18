import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Mohd ASif Ali | Software Developer",
  description:
    "Portfolio of Mohd Asif Ali – Software Developer specializing in Next.js, TypeScript, Node.js, and MongoDB.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  )
}