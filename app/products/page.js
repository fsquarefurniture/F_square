import ProductCard from "../components/ProductCard";

export default function Products() {
  const products = [
    { title: "Luxury Sofa Set", price: 500000, image: "/images/sofa1.jpg" },
    { title: "Dining Set Modern", price: 350000, image: "/images/dining1.jpg" },
    { title: "King Bedroom Set", price: 700000, image: "/images/bedroom1.jpg" },
    { title: "Office Executive Chair", price: 120000, image: "/images/office1.jpg" },
  ];

  return (
    <main style={{ paddingTop: "120px", textAlign: "center" }}>
      <h1 style={{ fontSize: "48px", marginBottom: "40px", color: "#d4af37" }}>All Products</h1>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "30px",
        maxWidth: "1200px",
        margin: "auto"
      }}>
        {products.map((p, i) => (
          <ProductCard key={i} {...p} />
        ))}
      </div>
    </main>
  );
  }
