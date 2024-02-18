import { useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

export default function useProduct() {
  const [products, setProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");
  const [form, setForm] = useState({
    title: "",
    price: "",
    description: "",
  });

  // API
  const API_URL = "http://localhost:3000/products";
  useEffect(() => {
    getProducts();
  }, []);

  // Obtener data desde API inicialmente
  const getProducts = async () => {
    try {
      const response = await axios.get(API_URL);
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching objects", error);
    }
  };

  // borrar producto en API y local state
  const deleteProduct = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setProducts((previousProducts) =>
        previousProducts.filter((product) => product.id !== id)
      );
    } catch (error) {
      console.error("Error deleting object", error);
    }
  };

  // Manejar SUBMIT en el formulari en el MODAL para editar o crear un producto
  const handleSetForm = async (e) => {
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
        await axios.post(API_URL, newProduct);
        setProducts((prevProducts) => [...prevProducts, newProduct]);
        setIsModalOpen(false);
      } catch (error) {
        console.error("Error creating object", error);
      }
    } else if (modalType === "edit") {
      const findProduct = products.find((product) => product.id === form.id);
      const editedProduct = {
        ...findProduct,
        title: form.title,
        price: form.price,
        description: form.description,
      };

      try {
        await axios.put(`${API_URL}/${form.id}`, editedProduct);
        setProducts((prevProducts) => {
          return prevProducts.map((product) => {
            if (product.id === form.id) {
              return editedProduct;
            } else {
              return product;
            }
          });
        });
        setIsModalOpen(false);
      } catch (error) {
        console.error("Error updating object", error);
      }
    }
  };

  // API

  // Para el unico boton rojo de agregar producto fixed en MainContent
  const addProduct = () => {
    setIsModalOpen(true);
    setForm({
      title: "",
      price: "",
      description: "",
    });
  };

  // Para el boton de editar producto en el componente CARD
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
    setIsModalOpen,
    modalType,
    setModalType,
    deleteProduct,
    addProduct,
    editProduct,
    handleSetForm,
  };
}
