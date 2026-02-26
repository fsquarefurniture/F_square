export default function GalleryItem({ image, title }) {
  return (
    <div style={{
      borderRadius: "10px",
      overflow: "hidden",
      boxShadow: "0 4px 20px rgba(0,0,0,0.4)"
    }}>
      <img src={image} alt={title} style={{ width: "100%", display: "block" }} />
      <h4 style={{
        textAlign: "center",
        marginTop: "10px",
        fontWeight: "bold",
        color: "#d4af37"
      }}>{title}</h4>
    </div>
  )
}
