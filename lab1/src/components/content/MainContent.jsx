/* eslint-disable react/prop-types */
import "./MainContent.css";
import ProductCard from "./ProductCard";
import data from "../../assets/data.json";
import { UserContext } from "../../contextos/UserContext";
import { useContext } from "react";

export default function MainContent() {
  const { user } = useContext(UserContext);

  function filteredProducts() {
    if (user.searchValue === "") {
      return data;
    } else {
      return data.filter((product) =>
        product.title.toLowerCase().includes(user.searchValue.toLowerCase())
      );
    }
  }

  const mapeo = filteredProducts().map((product) => (
    <ProductCard
      key={product.id}
      product={product}
    />
  ));

  return <main className="main-container">{mapeo}</main>;
}
