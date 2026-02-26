import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import WhatsAppButton from "./components/WhatsAppButton"

export const metadata = {
  title: "F-Square Furniture | Luxury Interior Brand",
  description:
    "F-Square Furniture is a world-class luxury modern furniture brand delivering premium craftsmanship and timeless interior designs.",
  keywords: "Luxury Furniture, Modern Interior, Premium Sofa, Custom Furniture",
  authors: [{ name: "F-Square Furniture" }],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
        <SpeedInsights />
      </body>
    </html>
  )
    }
