import ProductCard from "../components/ProductCard";

const allProducts = [
  { title: "Luxury Sofa Set", price: 500000, category: "sofa", image: "/images/sofa1.jpg" },
  { title: "Modern L-Shape Sofa", price: 650000, category: "sofa", image: "/images/sofa2.jpg" },
  { title: "Royal King Bedroom Set", price: 900000, category: "bedroom", image: "/images/bedroom1.jpg" },
  { title: "Premium Dining Table", price: 450000, category: "dining", image: "/images/dining1.jpg" },
  { title: "Executive Office Desk", price: 300000, category: "office", image: "/images/office1.jpg" },
];

export default function ProductsPage() {
  return (
    <main style={{ paddingTop: "120px", textAlign: "center" }}>
      <h1 style={{ fontSize: "48px", marginBottom: "40px", color: "#d4af37" }}>
        All Products
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "30px",
          maxWidth: "1200px",
          margin: "auto",
        }}
      >
        {allProducts.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </main>
  );
}
