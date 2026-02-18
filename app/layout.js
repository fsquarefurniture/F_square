import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css"

export const metadata = {
  title: "F-Square Furniture",
  description: "Luxury modern furniture brand",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}
