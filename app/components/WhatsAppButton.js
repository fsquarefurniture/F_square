export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/2348051837390?text=Hello%20I%20am%20interested%20in%20F-Square%20Furniture"
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
        boxShadow: "0 8px 25px rgba(0,0,0,0.6)",
        zIndex: 999
      }}
    >
      💬
    </a>
  );
}
