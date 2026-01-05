import { useParams, Link } from "react-router-dom";
import "../style/ProductDetail.css";
import { products } from "../data/products";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return <h2 style={{ padding: "40px" }}>Product not found</h2>;
  }

  return (
    <section className="product-page">
      <div className="product-grid">
        {/* LEFT IMAGE */}
        <div className="product-image">
          <img src={product.image} alt={product.title} />
        </div>

        {/* RIGHT INFO */}
        <div className="product-info">
          <h1>{product.title}</h1>

          <div className="rating">⭐⭐⭐⭐☆ {product.rating}</div>

          <p className="price">
            ₹{product.price}
            <span className="mrp"> ₹{product.mrp}</span>
          </p>

          <p className="offer">{product.offers}</p>

          <p className="desc">{product.description}</p>

          {/* QUANTITY */}
          <div className="qty">
            Quantity:
            <select>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>

          {/* BUTTONS */}
          <div className="buttons">
            <button className="cart">Add to Cart</button>
            <button className="buy">Buy Now</button>
          </div>

          <Link to="/shop" className="back">
            ← Back to Shop
          </Link>
        </div>
      </div>
    </section>
  );
}
