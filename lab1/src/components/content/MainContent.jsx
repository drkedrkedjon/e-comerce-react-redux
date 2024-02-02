/* eslint-disable react/prop-types */
import "./MainContent.css";
import ProductCard from "./ProductCard";
import data from "../../assets/data.json";

export default function MainContent({ searchInputValue }) {
  function filteredProducts() {
    if (searchInputValue === "") {
      return data;
    } else {
      return data.filter((product) =>
        product.title.toLowerCase().includes(searchInputValue.toLowerCase())
      );
    }
  }

  const mapeo = filteredProducts().map((product) => (
    <ProductCard
      key={product.id}
      product={product}
    />
  ));

  return <main className="main-continer">{mapeo}</main>;
}
