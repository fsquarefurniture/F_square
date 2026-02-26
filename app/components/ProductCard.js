export default function ProductCard({ product }) {
  return (
    <div style={{ border: "1px solid #ddd", padding: "20px", width: "250px" }}>
      <img
        src={product.image}
        alt={product.title}
        style={{ width: "100%", height: "200px", objectFit: "cover" }}
      />
      <h3>{product.title}</h3>
      <p>₦{product.price}</p>
    </div>
  );
}
