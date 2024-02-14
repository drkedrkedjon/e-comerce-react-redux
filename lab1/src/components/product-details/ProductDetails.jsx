import "./ProductDetails.css";
import { Link, useParams } from "react-router-dom";
import data from "../../assets/data";
import { UserContext } from "../../contextos/UserContext";
import { useContext } from "react";

export default function ProductDetails() {
  const { id } = useParams();
  const { user, setUser } = useContext(UserContext);

  const findProduct = data.find((product) => product.id === Number(id));
  const { title, price, description, image, category } = findProduct;

  const handleAddToCart = () => {
    setUser({
      ...user,
      shoppingCartItems: [...user.shoppingCartItems, findProduct.id],
    });
  };

  return (
    <main className="product-detail-container">
      <img
        src={image}
        alt={title}
      />
      <div className="product-detail-description">
        <Link to="/">Back to Products</Link>
        <h2>{title}</h2>
        <p className="product-detail-price">Price: {price}€</p>
        <p>{description}</p>
        <p>Category: {category}</p>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </main>
  );
}
