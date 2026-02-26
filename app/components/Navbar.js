export default function Navbar() {
  return (
    <nav style={{
      position: "fixed",
      top: 0,
      width: "100%",
      padding: "20px 40px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "rgba(0,0,0,0.85)",
      backdropFilter: "blur(10px)",
      zIndex: 1000
    }}>
      <h2 style={{ letterSpacing: "2px" }}>F-SQUARE</h2>
      <div style={{ display: "flex", gap: "25px" }}>
        <a href="/" style={{ color: "white", textDecoration: "none" }}>Home</a>
        <a href="/about" style={{ color: "white", textDecoration: "none" }}>About</a>
        <a href="/services" style={{ color: "white", textDecoration: "none" }}>Services</a>
        <a href="/portfolio" style={{ color: "white", textDecoration: "none" }}>Portfolio</a>
        <a href="/contact" style={{ color: "#d4af37", textDecoration: "none" }}>Contact</a>
      </div>
    </nav>
  )
  }
