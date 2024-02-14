/* eslint-disable react/prop-types */
import "./ProductCard.css";
import { useContext } from "react";
import { UserContext } from "../../contextos/UserContext";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  const { user, setUser } = useContext(UserContext);

  const handleAddToCart = () => {
    setUser({
      ...user,
      shoppingCartItems: [...user.shoppingCartItems, product.id],
    });
  };

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`}>
        <img
          className="card-img-top"
          src={product.image}
          alt={product.title}
        />
      </Link>
      <div className="card-body">
        <h3 className="card-title">{product.title}</h3>
        <p className="card-desc">{product.description}</p>
        <p className="card-price">{product.price}€</p>
      </div>
      {user.isLogged && (
        <button
          onClick={handleAddToCart}
          className="card-btn"
        >
          Add to Cart
        </button>
      )}
    </div>
  );
}
