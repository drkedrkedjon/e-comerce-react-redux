import "./ShoppingCart.css";
import Card from "./Card";
// import data from "../../assets/data.json";
import { UserContext } from "../../contextos/UserContext";
import { useContext, useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Loader from "../loader/Loader";
import { getAllProducts } from "../../redux/reducers/productsReducer";
import { useSelector } from "react-redux";

export default function ShoppingCart() {
  const { user, setUser } = useContext(UserContext);
  // const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const products = useSelector(getAllProducts);

  const productCounter = {};
  user.shoppingCartItems.forEach((id) => {
    productCounter[id] = productCounter[id] ? productCounter[id] + 1 : 1;
  });

  const mapeo = Object.keys(productCounter).map((id) => {
    const product = products.products.find(
      (product) => product.id.toString() === id.toString()
    );
    return {
      ...product,
      quantity: productCounter[id],
    };
  });

  const totalToPay = mapeo.reduce((acc, product) => {
    return acc + product.price * product.quantity;
  }, 0);

  const handleCheckout = () => {
    alert("You will be directed to payment provider!");
    setUser({ ...user, shoppingCartItems: [] });
  };
  const handleReset = () => {
    setUser({ ...user, shoppingCartItems: [] });
  };

  // const API_URL = "http://localhost:3000/products";
  // useEffect(() => {
  //   setIsLoading(true);
  //   const getProducts = async () => {
  //     try {
  //       const response = await axios.get(API_URL);
  //       setProducts(response.data);
  //     } catch (error) {
  //       if (error.response && error.response.status === 404) {
  //         setError("Error loading products");
  //       } else {
  //         console.error("Error fetching objects", error);
  //       }
  //     } finally {
  //       setTimeout(() => {
  //         setIsLoading(false);
  //       }, 1000);
  //     }
  //   };

  //   getProducts();
  // }, []);

  useEffect(() => {
    if (error) {
      alert(error);
      setError(null);
    }
  }, [error]);

  if (isLoading) return <Loader />;

  return (
    <main className="shopping-cart-container">
      <h2>Your Shopping Cart</h2>
      {mapeo.map((product) => (
        <Card
          key={product.id}
          product={product}
        />
      ))}

      <p className="total">Total to pay: {Number(totalToPay)?.toFixed(2)}€</p>

      <div className="cart-btn-container">
        <button
          onClick={handleCheckout}
          className="btn-checkout"
        >
          Proceed to checkout...
        </button>
        <button
          onClick={handleReset}
          className="btn-reset"
        >
          Reset Cart
        </button>
      </div>
    </main>
  );
}
