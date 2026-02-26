export default function ProductCard({ image, title, price }) {
  return (
    <div style={{
      borderRadius: "10px",
      overflow: "hidden",
      boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
      textAlign: "center"
    }}>
      <img src={image} alt={title} style={{ width: "100%", display: "block" }} />
      <h4 style={{ margin: "10px 0", color: "#d4af37" }}>{title}</h4>
      {price && <p style={{ color: "#cfcfcf" }}>₦{price}</p>}
      <a
        href={`https://wa.me/2348051837390?text=I%20want%20to%20order%20${encodeURIComponent(title)}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          margin: "10px 0 20px",
          padding: "10px 25px",
          borderRadius: "30px",
          backgroundColor: "#d4af37",
          color: "black",
          textDecoration: "none",
          fontWeight: "bold"
        }}
      >
        Order Now
      </a>
    </div>
  );
        }
