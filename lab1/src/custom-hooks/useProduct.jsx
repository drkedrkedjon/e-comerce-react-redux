import data from "../assets/data.json";
import { useState } from "react";

export default function useProduct() {
  const [products, setProducts] = useState(data);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");

  const [form, setForm] = useState({
    title: "",
    price: "",
    description: "",
  });

  const deleteProduct = (id) => {
    const filteredProducts = products.filter((product) => product.id !== id);
    setProducts(filteredProducts);
  };
  const addProduct = () => {
    setIsModalOpen(true);
    setForm({
      title: "",
      price: "",
      description: "",
    });
  };

  const editProduct = (id) => {
    const filteredProduct = products.filter((product) => product.id === id);
    setForm({
      title: filteredProduct[0].title,
      price: filteredProduct[0].price,
      description: filteredProduct[0].description,
      id: filteredProduct[0].id,
    });
    setIsModalOpen(true);
  };

  return {
    products,
    setProducts,
    form,
    setForm,
    isModalOpen,
    modalType,
    setModalType,
    deleteProduct,
    addProduct,
    editProduct,
    setIsModalOpen,
  };
}
