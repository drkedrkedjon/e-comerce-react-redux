/* eslint-disable react/prop-types */
import "./ProductCard.css";

export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img
        className="card-img-top"
        src={product.image}
        alt={product.title}
      />
      <div className="card-body">
        <h3 className="card-title">{product.title}</h3>
        <p className="card-desc">{product.description}</p>
        <p className="card-price">{product.price}€</p>
      </div>
    </div>
  );
}
