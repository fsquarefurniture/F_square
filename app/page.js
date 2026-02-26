export default function Home() {
  return (
    <main style={{
      margin: 0,
      padding: 0,
      fontFamily: "Helvetica, Arial, sans-serif",
      backgroundColor: "#0c0c0c",
      color: "white"
    }}>

      {/* NAVBAR */}
      <nav style={{
        position: "fixed",
        top: 0,
        width: "100%",
        padding: "20px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.8)",
        backdropFilter: "blur(10px)",
        zIndex: 1000
      }}>
        <h2 style={{ letterSpacing: "2px" }}>F-SQUARE</h2>

        <a
          href="https://wa.me/2348051837390"
          target="_blank"
          style={{
            color: "#d4af37",
            textDecoration: "none",
            fontWeight: "bold"
          }}
        >
          Contact
        </a>
      </nav>


      {/* HERO */}
      <section style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "20px"
      }}>
        <h1 style={{
          fontSize: "64px",
          letterSpacing: "4px",
          marginBottom: "20px"
        }}>
          F-Square Furniture
        </h1>

        <p style={{
          fontSize: "22px",
          color: "#cfcfcf",
          maxWidth: "750px",
          marginBottom: "40px"
        }}>
          Where Luxury Meets Precision Craftsmanship.
        </p>

        <a
          href="https://wa.me/2348051837390?text=Hello%20I%20am%20interested%20in%20F-Square%20Furniture"
          target="_blank"
          style={{
            padding: "18px 40px",
            border: "2px solid #d4af37",
            color: "#d4af37",
            textDecoration: "none",
            borderRadius: "40px",
            fontSize: "18px",
            fontWeight: "bold"
          }}
        >
          Request Private Consultation
        </a>
      </section>


      {/* ABOUT */}
      <section style={{
        padding: "120px 20px",
        textAlign: "center",
        backgroundColor: "#111"
      }}>
        <h2 style={{
          fontSize: "42px",
          marginBottom: "30px",
          color: "#d4af37"
        }}>
          About Our Brand
        </h2>

        <p style={{
          maxWidth: "800px",
          margin: "auto",
          fontSize: "19px",
          lineHeight: "1.8",
          color: "#cfcfcf"
        }}>
          F-Square Furniture is a luxury design house dedicated to
          crafting timeless furniture pieces that elevate living
          environments. Our philosophy blends premium materials,
          architectural elegance, and refined craftsmanship to create
          extraordinary spaces.
        </p>
      </section>


      {/* SERVICES */}
      <section style={{
        padding: "120px 20px",
        textAlign: "center"
      }}>
        <h2 style={{
          fontSize: "42px",
          marginBottom: "60px",
          color: "#d4af37"
        }}>
          Signature Services
        </h2>

        <div style={{
          display: "grid",
          gap: "40px",
          maxWidth: "900px",
          margin: "auto",
          fontSize: "18px",
          color: "#cfcfcf"
        }}>
          <p>Luxury Residential Furniture Design</p>
          <p>Executive & Corporate Interior Solutions</p>
          <p>Custom Commissioned Pieces</p>
          <p>Architectural Space Consultation</p>
        </div>
      </section>


      {/* CALL TO ACTION */}
      <section style={{
        padding: "150px 20px",
        textAlign: "center",
        backgroundColor: "#111"
      }}>
        <h2 style={{
          fontSize: "48px",
          marginBottom: "30px"
        }}>
          Elevate Your Standard of Living
        </h2>

        <a
          href="https://wa.me/2348051837390?text=I%20want%20luxury%20furniture%20consultation"
          target="_blank"
          style={{
            padding: "20px 50px",
            backgroundColor: "#d4af37",
            color: "black",
            borderRadius: "50px",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "18px"
          }}
        >
          Begin Consultation
        </a>
      </section>


      {/* FOOTER */}
      <footer style={{
        padding: "50px 20px",
        textAlign: "center",
        backgroundColor: "#000",
        color: "#777"
      }}>
        <h3 style={{ marginBottom: "10px" }}>F-Square Furniture</h3>
        <p>Luxury Design House</p>
        <p style={{ marginTop: "20px", fontSize: "14px" }}>
          © {new Date().getFullYear()} F-Square. All rights reserved.
        </p>
      </footer>


      {/* FLOATING WHATSAPP */}
      <a
        href="https://wa.me/2348051837390"
        target="_blank"
        style={{
          position: "fixed",
          bottom: "25px",
          right: "25px",
          backgroundColor: "#25D366",
          color: "white",
          borderRadius: "50%",
          width: "70px",
          height: "70px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "32px",
          textDecoration: "none",
          boxShadow: "0 8px 25px rgba(0,0,0,0.6)",
          zIndex: 999
        }}
      >
        💬
      </a>

    </main>
  )
            }
