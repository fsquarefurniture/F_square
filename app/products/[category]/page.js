import ProductCard from "../../../components/ProductCard";

const allProducts = [
  {
    title: "Luxury Sofa",
    price: "500,000",
    category: "sofa",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7"
  },
  {
    title: "Modern Bed Frame",
    price: "450,000",
    category: "bed",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
  },
  {
    title: "Dining Set",
    price: "600,000",
    category: "dining",
    image: "https://images.unsplash.com/photo-1616628182506-9a7c1d3d1d45"
  }
];

export default function CategoryPage({ params }) {
  const filtered = allProducts.filter(
    (product) => product.category === params.category
  );

  return (
    <main style={{ padding: "40px", display: "flex", gap: "20px" }}>
      {filtered.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </main>
  );
}
