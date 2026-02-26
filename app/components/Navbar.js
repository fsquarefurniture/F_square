import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{ padding: "20px", background: "#111", color: "#fff" }}>
      <Link href="/" style={{ marginRight: "20px", color: "#fff" }}>
        Home
      </Link>
      <Link href="/products" style={{ color: "#fff" }}>
        Products
      </Link>
    </nav>
  );
}
