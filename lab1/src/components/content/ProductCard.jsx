/* eslint-disable react/prop-types */
import "./ProductCard.css";
import { useContext } from "react";
import { UserContext } from "../../contextos/UserContext";

export default function ProductCard({ product }) {
  const { user, setUser } = useContext(UserContext);

  const handleAddToCart = () => {
    console.log(user);
    setUser({
      ...user,
      shoppingCartItems: [...user.shoppingCartItems, product.id],
    });
  };

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
      <button
        onClick={handleAddToCart}
        className="card-btn"
      >
        Add to Cart
      </button>
    </div>
  );
}
