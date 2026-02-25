export default function Home() {
  return (
    <main style={{
      fontFamily: "Helvetica, Arial, sans-serif",
      background: "#0b0b0b",
      color: "white"
    }}>

      {/* NAVBAR */}
      <nav style={{
        padding: "22px 60px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid #222",
        position: "sticky",
        top: 0,
        background: "#0b0b0b",
        zIndex: 1000
      }}>
        <h2 style={{ letterSpacing: "2px" }}>F-SQUARE</h2>

        <div style={{ display: "flex", gap: "35px", fontSize: "15px" }}>
          <a href="#" style={{ color: "white", textDecoration: "none" }}>Home</a>
          <a href="#collection" style={{ color: "white", textDecoration: "none" }}>Collection</a>
          <a href="#projects" style={{ color: "white", textDecoration: "none" }}>Projects</a>
          <a href="#about" style={{ color: "white", textDecoration: "none" }}>Brand</a>
          <a href="#contact" style={{ color: "white", textDecoration: "none" }}>Contact</a>
        </div>
      </nav>


      {/* HERO */}
      <section style={{
        height: "90vh",
        background: "url('https://images.unsplash.com/photo-1618220179428-22790b461013') center/cover",
        display: "flex",
        alignItems: "center",
        paddingLeft: "8%"
      }}>
        <div style={{ maxWidth: "650px" }}>
          <h1 style={{
            fontSize: "72px",
            lineHeight: "1.1",
            marginBottom: "25px"
          }}>
            Furniture for <br /> Extraordinary Spaces
          </h1>

          <p style={{ fontSize: "20px", opacity: 0.85 }}>
            Global luxury furniture crafted for elite homes, offices,
            hotels, and architectural masterpieces.
          </p>
        </div>
      </section>


      {/* COLLECTION */}
      <section id="collection" style={{ padding: "120px 8%" }}>
        <h2 style={{ fontSize: "42px", marginBottom: "60px" }}>
          Signature Collection
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "40px"
        }}>

          {[
            ["https://images.unsplash.com/photo-1505693416388-ac5ce068fe85", "Presidential Beds"],
            ["https://images.unsplash.com/photo-1582582621959-48d27397dc69", "Royal Sofas"],
            ["https://images.unsplash.com/photo-1493666438817-866a91353ca9", "Executive Dining"],
            ["https://images.unsplash.com/photo-1616628188859-7a11abb6fcc9", "Custom Interiors"]
          ].map((item, i) => (
            <div key={i} style={{ background: "#111" }}>
              <img
                src={item[0]}
                style={{ width: "100%", height: "260px", objectFit: "cover" }}
              />
              <div style={{ padding: "20px" }}>
                <h3>{item[1]}</h3>
              </div>
            </div>
          ))}

        </div>
      </section>


      {/* PROJECTS */}
      <section id="projects" style={{
        background: "#111",
        padding: "120px 8%"
      }}>
        <h2 style={{ fontSize: "42px", marginBottom: "50px" }}>
          Global Projects
        </h2>

        <p style={{ maxWidth: "800px", fontSize: "19px", opacity: 0.9 }}>
          F-Square Furniture delivers luxury interior solutions for villas,
          penthouses, hotels, corporate headquarters, and government residences
          across Africa and internationally.
        </p>
      </section>


      {/* ABOUT BRAND */}
      <section id="about" style={{ padding: "120px 8%" }}>
        <h2 style={{ fontSize: "42px", marginBottom: "40px" }}>
          The Brand
        </h2>

        <p style={{
          maxWidth: "850px",
          fontSize: "19px",
          lineHeight: "1.7",
          opacity: 0.9
        }}>
          F-Square Furniture represents the intersection of architecture,
          craftsmanship, and luxury living. Our pieces are designed for
          individuals and institutions that demand excellence without compromise.
          Every product is engineered for durability, prestige, and timeless appeal.
        </p>
      </section>


      {/* CLIENT TESTIMONIAL */}
      <section style={{
        background: "#111",
        padding: "120px 8%",
        textAlign: "center"
      }}>
        <h2 style={{ fontSize: "38px" }}>Client Experience</h2>

        <p style={{
          maxWidth: "700px",
          margin: "40px auto",
          fontSize: "22px",
          fontStyle: "italic",
          opacity: 0.9
        }}>
          “F-Square transformed our residence into a palace.
          The quality rivals the finest European brands.”
        </p>

        <strong>— Private Estate Owner</strong>
      </section>


      {/* CONTACT */}
      <section id="contact" style={{
        padding: "120px 8%",
        textAlign: "center"
      }}>
        <h2 style={{ fontSize: "42px" }}>Contact & Commissions</h2>

        <p style={{ marginTop: "30px", fontSize: "20px", opacity: 0.9 }}>
          Abuja, Nigeria <br />
          Global Delivery Available <br /><br />
          📞 +234 805 183 7390 <br />
          ✉️ fsquarefurniture@gmail.com
        </p>
      </section>


      {/* FOOTER */}
      <footer style={{
        borderTop: "1px solid #222",
        padding: "30px",
        textAlign: "center",
        opacity: 0.7
      }}>
        © {new Date().getFullYear()} F-Square Furniture — Global Luxury Brand
      </footer>


      {/* WHATSAPP BUTTON */}
      <a
        href="https://wa.me/2348051837390?text=Hello%20I%20want%20luxury%20furniture"
        target="_blank"
        rel="noopener noreferrer"
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
          boxShadow: "0 8px 25px rgba(0,0,0,0.5)",
          zIndex: 1000
        }}
      >
        💬
      </a>

    </main>
  )
        }
