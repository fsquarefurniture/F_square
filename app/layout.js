import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css"

export const metadata = {
  title: "F-Square Furniture | Luxury Interior Brand",
  description:
    "F-Square Furniture is a world-class luxury furniture brand delivering premium modern interiors with elegance, precision, and excellence.",
  keywords: "Luxury Furniture, Modern Interior, Premium Sofa, Custom Furniture",
  authors: [{ name: "F-Square Furniture" }],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}
