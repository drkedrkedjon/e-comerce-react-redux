/* eslint-disable react/prop-types */
import "./MainContent.css";
import ProductCard from "./ProductCard";
import { useSearchParams } from "react-router-dom";
import Modal from "./Modal";
import useProduct from "../../custom-hooks/useProduct";

export default function MainContent() {
  const {
    products,
    setProducts,
    form,
    setForm,
    isModalOpen,
    modalType,
    setModalType,
    setIsModalOpen,
    deleteProduct,
    addProduct,
    editProduct,
  } = useProduct();

  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");

  function filteredProducts() {
    if (!search) {
      return products;
    } else {
      return products.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
      );
    }
  }

  function handleNewItem(e) {
    e.stopPropagation();
    addProduct();
    setModalType("new");
  }

  const mapeo = filteredProducts().map((product) => (
    <ProductCard
      setIsModalOpen={setIsModalOpen}
      key={product.id}
      product={product}
      deleteProduct={deleteProduct}
      addProduct={addProduct}
      editProduct={editProduct}
      setModalType={setModalType}
    />
  ));

  return (
    <>
      <main className="main-container">{mapeo}</main>
      <button
        onClick={handleNewItem}
        className="new-item-btn"
      >
        Add New Item
      </button>
      {isModalOpen && (
        <Modal
          form={form}
          setForm={setForm}
          setIsModalOpen={setIsModalOpen}
          modalType={modalType}
          setProducts={setProducts}
        />
      )}
    </>
  );
}
