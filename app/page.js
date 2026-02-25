export default function Home() {
  return (
    <main style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>F-Square Furniture</h1>
      <p>Luxury modern furniture brand</p>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/2348051837390?text=Hello%20I%20am%20interested%20in%20your%20furniture"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "#25D366",
          color: "white",
          borderRadius: "50%",
          width: "60px",
          height: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "30px",
          textDecoration: "none",
          boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
          zIndex: 1000
        }}
      >
        💬
      </a>

    </main>
  )
}
