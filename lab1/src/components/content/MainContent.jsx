/* eslint-disable react/prop-types */
import "./MainContent.css";
import ProductCard from "./ProductCard";
import data from "../../assets/data.json";
import { useSearchParams } from "react-router-dom";
import Modal from "./Modal";
import useProduct from "../../custom-hooks/useProduct";

export default function MainContent() {
  const {
    form,
    isModalOpen,
    setIsModalOpen,
    deleteProduct,
    addProduct,
    editProduct,
  } = useProduct();

  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");

  function filteredProducts() {
    if (!search) {
      return data;
    } else {
      return data.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
      );
    }
  }

  const mapeo = filteredProducts().map((product) => (
    <ProductCard
      setIsModalOpen={setIsModalOpen}
      key={product.id}
      product={product}
      deleteProduct={deleteProduct}
      addProduct={addProduct}
      editProduct={editProduct}
    />
  ));

  return (
    <>
      <main className="main-container">{mapeo}</main>
      {isModalOpen && (
        <Modal
          form={form}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </>
  );
}
