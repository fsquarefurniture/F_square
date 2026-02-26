import Link from "next/link";

export default function Products() {
  const categories = ["sofa", "bed", "dining"];

  return (
    <main style={{ padding: "40px" }}>
      <h1>Product Categories</h1>
      {categories.map((cat) => (
        <div key={cat}>
          <Link href={`/products/${cat}`}>
            View {cat}
          </Link>
        </div>
      ))}
    </main>
  );
}
