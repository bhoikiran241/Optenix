import { Link } from "react-router-dom";
import "../style/Shop.css";
import { products } from "../data/products";

export default function Shop() {
  return (
    <section className="amazon-shop">
      <h2>Best Sellers</h2>

      <div className="amazon-products">
        {products.map((p) => (
          <div key={p.id} className="amazon-card">
            <img src={p.image} alt={p.title} />

            <h4>{p.title}</h4>
            <div className="rating">⭐⭐⭐⭐☆ {p.rating}</div>

            <p className="price">₹{p.price}</p>

            <Link to={`/shop/${p.id}`} className="view-btn">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
