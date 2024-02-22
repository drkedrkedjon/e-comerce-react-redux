/* eslint-disable react/prop-types */
import "./ProductCard.css";
import { useContext } from "react";
import { UserContext } from "../../contextos/UserContext";
import { useNavigate } from "react-router-dom";
import { Edit2, Trash2 } from "react-feather";

export default function ProductCard({
  product,
  deleteProduct,
  editProduct,
  setModalType,
}) {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleAddToCart = (e) => {
    e.stopPropagation();
    setUser({
      ...user,
      shoppingCartItems: [...user.shoppingCartItems, product.id],
    });
  };

  const handleCardClick = () => {
    navigate(`/product/${product.id}`);
  };

  function handleEditItem(e) {
    e.stopPropagation();
    editProduct(product.id);
    setModalType("edit");
  }
  function handleDeleteItem(e) {
    e.stopPropagation();
    deleteProduct(product.id);
  }

  return (
    <div
      onClick={handleCardClick}
      className="product-card"
    >
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
      {user.isLogged && (
        <button
          onClick={handleAddToCart}
          className="card-btn"
        >
          Add to Cart
        </button>
      )}
      {user.isLogged && user.role === "admin" && (
        <div className="edit-delete-btn">
          <button onClick={handleEditItem}>
            <Edit2 />
          </button>
          <button onClick={handleDeleteItem}>
            <Trash2 color={"red"} />
          </button>
        </div>
      )}
    </div>
  );
}