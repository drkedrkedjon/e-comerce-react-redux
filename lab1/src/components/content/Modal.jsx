/* eslint-disable react/prop-types */
import "./modal.css";
import { XCircle } from "react-feather";
import { v4 as uuidv4 } from "uuid";

export default function Modal({
  form,
  setForm,
  setIsModalOpen,
  modalType,
  setProducts,
}) {
  const handleSetForm = (e) => {
    e.preventDefault();
    if (modalType === "new") {
      setProducts((prevProducts) => {
        return [
          ...prevProducts,
          {
            id: uuidv4(),
            title: form.title,
            price: form.price,
            description: form.description,
            image: "https://via.placeholder.com/150/92c952",
          },
        ];
      });
      setIsModalOpen(false);
    } else if (modalType === "edit") {
      setProducts((prevProducts) => {
        return prevProducts.map((product) => {
          if (product.id === form.id) {
            return {
              ...product,
              title: form.title,
              price: form.price,
              description: form.description,
            };
          } else {
            return product;
          }
        });
      });
      setIsModalOpen(false);
    }
  };

  return (
    <div className="edit-modal">
      <div className="edit-modal-content">
        <button
          onClick={() => setIsModalOpen(false)}
          className="edit-modal-close-btn"
        >
          <XCircle />
        </button>
        {modalType === "new" ? (
          <h2>Add New Product</h2>
        ) : (
          <h2>Edit Producto</h2>
        )}
        <form
          className="modal-form-container"
          onSubmit={handleSetForm}
        >
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />
          <label htmlFor="price">Price</label>
          <input
            type="text"
            id="price"
            value={form.price}
            onChange={(e) => setForm({ ...form, price: e.target.value })}
          />
          <label htmlFor="description">Description</label>
          <textarea
            type="text"
            id="description"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
          />
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
}
