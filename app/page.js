export default function Home() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", background: "#f5f5f5" }}>

      {/* HERO SECTION */}
      <section style={{
        background: "#111",
        color: "white",
        padding: "80px 20px",
        textAlign: "center"
      }}>
        <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>
          F-Square Furniture
        </h1>
        <p style={{ fontSize: "20px", maxWidth: "700px", margin: "0 auto" }}>
          Luxury modern furniture crafted for comfort, elegance, and timeless style.
        </p>
      </section>


      {/* ABOUT SECTION */}
      <section style={{
        padding: "60px 20px",
        textAlign: "center",
        background: "white"
      }}>
        <h2>About Us</h2>
        <p style={{ maxWidth: "800px", margin: "20px auto", fontSize: "18px" }}>
          F-Square Furniture specializes in premium modern furniture for homes,
          offices, hotels, and luxury spaces. We combine high-quality materials,
          expert craftsmanship, and elegant designs to create pieces that last.
        </p>
      </section>


      {/* SERVICES / PRODUCTS */}
      <section style={{
        padding: "60px 20px",
        textAlign: "center"
      }}>
        <h2>Our Products</h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          marginTop: "30px"
        }}>

          <div style={{ background: "white", padding: "30px" }}>
            <h3>Sofas</h3>
            <p>Luxury modern sofas designed for comfort and elegance.</p>
          </div>

          <div style={{ background: "white", padding: "30px" }}>
            <h3>Beds</h3>
            <p>Premium beds crafted for restful sleep and stylish bedrooms.</p>
          </div>

          <div style={{ background: "white", padding: "30px" }}>
            <h3>Dining Sets</h3>
            <p>Beautiful dining furniture perfect for family and guests.</p>
          </div>

          <div style={{ background: "white", padding: "30px" }}>
            <h3>Custom Furniture</h3>
            <p>Made-to-measure furniture tailored to your space.</p>
          </div>

        </div>
      </section>


      {/* WHY CHOOSE US */}
      <section style={{
        background: "#111",
        color: "white",
        padding: "60px 20px",
        textAlign: "center"
      }}>
        <h2>Why Choose F-Square?</h2>
        <p style={{ maxWidth: "800px", margin: "20px auto", fontSize: "18px" }}>
          ✔ Premium materials  
          ✔ Expert craftsmanship  
          ✔ Modern luxury designs  
          ✔ Custom orders available  
          ✔ Nationwide delivery  
        </p>
      </section>


      {/* CONTACT SECTION */}
      <section style={{
        padding: "60px 20px",
        textAlign: "center",
        background: "white"
      }}>
        <h2>Contact Us</h2>
        <p style={{ fontSize: "18px" }}>
          📍 Abuja, Nigeria <br />
          📞 0805 183 7390
        </p>
      </section>


      {/* FOOTER */}
      <footer style={{
        background: "#000",
        color: "white",
        textAlign: "center",
        padding: "20px"
      }}>
        © {new Date().getFullYear()} F-Square Furniture. All rights reserved.
      </footer>


      {/* WHATSAPP FLOAT BUTTON */}
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
          width: "65px",
          height: "65px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "30px",
          textDecoration: "none",
          boxShadow: "0 6px 15px rgba(0,0,0,0.3)",
          zIndex: 1000
        }}
      >
        💬
      </a>

    </main>
  )
            }
