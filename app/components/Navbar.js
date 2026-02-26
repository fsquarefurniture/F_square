import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 bg-black border-b border-gray-800">
      <h1 className="text-xl font-bold">F-Square</h1>
      <div className="space-x-6">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  )
}
