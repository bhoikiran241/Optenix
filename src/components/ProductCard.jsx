export default function ProductCard({ title }) {
  return (
    <div className="product-card">
      <div className="img-placeholder"></div>
      <h3>{title}</h3>
      <button>BUY NOW</button>
    </div>
  );
}
