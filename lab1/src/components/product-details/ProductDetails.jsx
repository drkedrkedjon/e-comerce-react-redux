import "./ProductDetails.css";
import { Link, useParams } from "react-router-dom";
// import data from "../../assets/data";
import { UserContext } from "../../contextos/UserContext";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Loader from "../loader/Loader";

export default function ProductDetails() {
  const { id } = useParams();
  const { user, setUser } = useContext(UserContext);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleAddToCart = () => {
    setUser({
      ...user,
      shoppingCartItems: [...user.shoppingCartItems, findProduct.id],
    });
  };

  const API_URL = "http://localhost:3000/products";
  useEffect(() => {
    setIsLoading(true);
    const getProducts = async () => {
      try {
        const response = await axios.get(API_URL);
        setProducts(response.data);
      } catch (error) {
        if (error.response && error.response.status === 404) {
          setError("Error loading products");
        } else {
          console.error("Error fetching objects", error);
        }
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      }
    };

    getProducts();
  }, []);

  console.log(products);

  useEffect(() => {
    if (error) {
      alert(error);
      setError(null);
    }
  }, [error]);

  if (isLoading) return <Loader />;

  const findProduct = products.find(
    (product) => product.id.toString() === id.toString()
  );
  const { title, price, description, image, category } = findProduct;

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
