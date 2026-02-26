export default function Footer() {
  return (
    <footer style={{
      padding: "50px 20px",
      textAlign: "center",
      backgroundColor: "#000",
      color: "#777"
    }}>
      <h3 style={{ marginBottom: "10px" }}>F-Square Furniture</h3>
      <p>Luxury Modern Furniture Brand</p>
      <p style={{ marginTop: "20px", fontSize: "14px" }}>
        © {new Date().getFullYear()} F-Square. All rights reserved.
      </p>
    </footer>
  )
  }
