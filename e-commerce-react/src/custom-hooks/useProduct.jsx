import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { getAllProducts } from "../redux/reducers/productsReducer";
import { useSelector } from "react-redux";
import useProductActions from "./useProductActions";

export default function useProduct() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");
  const [form, setForm] = useState({
    title: "",
    price: "",
    description: "",
    image: "",
  });
  const { addProductMiddleware, updateProductMiddleware } = useProductActions();
  const products = useSelector(getAllProducts);

  // Manejar SUBMIT en el formulari en el MODAL para editar o crear un producto
  const handleSubmitForm = async (e) => {
    e.preventDefault();
    if (modalType === "new") {
      const newProduct = {
        id: uuidv4(),
        title: form.title,
        price: form.price,
        description: form.description,
        image: "https://via.placeholder.com/150/92c952",
      };

      try {
        addProductMiddleware(newProduct);
        setIsModalOpen(false);
      } catch (error) {
        console.error("Error creating object", error);
      }
    } else if (modalType === "edit") {
      const findProduct = products.products.find(
        (product) => product.id.toString() === form.id.toString()
      );
      const editedProduct = {
        ...findProduct,
        title: form.title,
        price: form.price,
        description: form.description,
      };

      try {
        updateProductMiddleware(editedProduct);
        setIsModalOpen(false);
      } catch (error) {
        console.error("Error updating object", error);
      }
    }
  };

  // Para el boton de editar producto en el componente CARD
  const openEditProductModal = (id) => {
    const filteredProduct = products.products.filter(
      (product) => product.id.toString() === id.toString()
    );
    setForm({
      title: filteredProduct[0].title,
      price: filteredProduct[0].price,
      description: filteredProduct[0].description,
      id: filteredProduct[0].id,
    });
    setIsModalOpen(true);
  };

  return {
    form,
    setForm,
    isModalOpen,
    setIsModalOpen,
    modalType,
    setModalType,
    openEditProductModal,
    handleSubmitForm,
  };
}
