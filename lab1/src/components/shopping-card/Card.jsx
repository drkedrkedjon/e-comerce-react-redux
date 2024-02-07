/* eslint-disable react/prop-types */
import "./Card.css";

export default function Card({ product }) {
  const { image, title, price } = product;
  return (
    <div className="shopping-card-container">
      <div className="notificacion-bubble-container">
        <img
          className="shopping-card-image"
          src={image}
          alt={title}
        />
        <span className="notification-bubble">5</span>
      </div>
      <div className="shopping-card-body">
        <p>{title}</p>
        <p>Unit Price: {price}</p>
        <p>Total Price: $345.00</p>
      </div>
    </div>
  );
}
