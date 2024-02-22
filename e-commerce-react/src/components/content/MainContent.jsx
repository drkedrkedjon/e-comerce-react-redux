/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import "./MainContent.css";
import ProductCard from "./ProductCard";
import { useSearchParams } from "react-router-dom";
import Modal from "./Modal";
import Loader from "../loader/Loader";
import useProduct from "../../custom-hooks/useProduct";
import { UserContext } from "../../contextos/UserContext";
import { useContext, useEffect } from "react";
import { getAllProducts } from "../../redux/reducers/productsReducer";
import { useDispatch, useSelector } from "react-redux";

export default function MainContent() {
  const {
    // products,
    setProducts,
    form,
    setForm,
    isModalOpen,
    setIsModalOpen,
    modalType,
    setModalType,
    error,
    setError,
    isLoading,
    deleteProduct,
    addProduct,
    editProduct,
    handleSubmitForm,
  } = useProduct();

  const products = useSelector(getAllProducts);
  const dispatch = useDispatch();

  const { user } = useContext(UserContext);
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");

  function filteredProducts(data) {
    if (!search) {
      return data.products;
    } else {
      return data.products.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
      );
    }
  }

  function handleNewItem() {
    setForm({
      title: "",
      price: "",
      description: "",
    });
    setModalType("new");
    setIsModalOpen(true);
  }

  const mapeo = filteredProducts(products).map((product) => (
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

  useEffect(() => {
    if (error) {
      alert(error);
      setError(null);
    }
  }, [error]);

  if (isLoading) return <Loader />;

  return (
    <>
      <main className="main-container">{mapeo}</main>
      {user.isLogged && user.role === "admin" && (
        <button
          onClick={handleNewItem}
          className="new-item-btn"
        >
          Add New Item
        </button>
      )}
      {isModalOpen && (
        <Modal
          form={form}
          setForm={setForm}
          setIsModalOpen={setIsModalOpen}
          modalType={modalType}
          setProducts={setProducts}
          handleSubmitForm={handleSubmitForm}
        />
      )}
    </>
  );
}
