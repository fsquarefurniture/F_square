import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main style={{ paddingTop: "120px", textAlign: "center" }}>
      <h1 style={{ fontSize: "64px", marginBottom: "20px" }}>F-Square Furniture</h1>
      <p style={{ fontSize: "22px", color: "#cfcfcf", maxWidth: "700px", margin: "auto" }}>
        Crafting luxury furniture with elegance and precision.
      </p>
      <a
        href="https://wa.me/2348051837390?text=Hello%20I%20am%20interested%20in%20F-Square%20Furniture"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          marginTop: "30px",
          display: "inline-block",
          backgroundColor: "#d4af37",
          color: "black",
          padding: "18px 40px",
          borderRadius: "40px",
          fontWeight: "bold",
          textDecoration: "none",
          fontSize: "18px"
        }}
      >
        Request Private Consultation
      </a>

      {/* Featured Products */}
      <section style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "30px",
        maxWidth: "1200px",
        margin: "80px auto"
      }}>
        <ProductCard image="/images/sofa1.jpg" title="Luxury Sofa Set" price="500000" />
        <ProductCard image="/images/dining1.jpg" title="Dining Set Modern" price="350000" />
        <ProductCard image="/images/bedroom1.jpg" title="King Bedroom Set" price="700000" />
      </section>
    </main>
  );
}
