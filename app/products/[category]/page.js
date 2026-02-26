import ProductCard from "../../../components/ProductCard";

export default function CategoryPage({ params }) {
  const { category } = params;

  // Example products by category
  const productsByCategory = {
    sofa: [{ title: "Luxury Sofa Set", price: 500000, image: "/images/sofa1.jpg" }],
    dining: [{ title: "Dining Set Modern", price: 350000, image: "/images/dining1.jpg" }],
    bedroom: [{ title: "King Bedroom Set", price: 700000, image: "/images/bedroom1.jpg" }],
  };

  const products = productsByCategory[category.toLowerCase()] || [];

  return (
    <main style={{ paddingTop: "120px", textAlign: "center" }}>
      <h1 style={{ fontSize: "48px", marginBottom: "40px", color: "#d4af37" }}>
        {category.charAt(0).toUpperCase() + category.slice(1)} Products
      </h1>

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
