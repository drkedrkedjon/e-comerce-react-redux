import "./ShoppingCart.css";
import Card from "./Card";
import data from "../../assets/data.json";

export default function ShoppingCart() {
  console.log(data[1]);
  return (
    <main className="shopping-cart-container">
      <h2>Your Shopping Cart</h2>
      <Card product={data[1]} />
      <Card product={data[2]} />
      <Card product={data[3]} />
    </main>
  );
}
