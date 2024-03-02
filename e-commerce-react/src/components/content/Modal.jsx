/* eslint-disable react/prop-types */
import "./modal.css";
import { useForm } from "react-hook-form";
import { XCircle } from "react-feather";

export default function Modal({
  form,
  setForm,
  setIsModalOpen,
  modalType,
  handleSubmitForm,
}) {
  const {
    register,
    // handleSubmit,
    // watch,
    formState: { errors },
    trigger,
  } = useForm();

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
          onSubmit={handleSubmitForm}
        >
          <label htmlFor="title">Title</label>
          {errors.title && (
            <p className="modal-form-error">{errors.title.message}</p>
          )}
          <input
            type="text"
            id="title"
            {...register("title", {
              required: "Please enter a title",
              onBlur: () => trigger("title"),
            })}
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />
          <label htmlFor="price">Price</label>
          {errors.price && (
            <p className="modal-form-error">{errors.price.message}</p>
          )}
          <input
            type="text"
            id="price"
            {...register("price", {
              required: "Please enter a price",
              onBlur: () => trigger("price"),
            })}
            value={form.price}
            onChange={(e) => setForm({ ...form, price: e.target.value })}
          />
          <label htmlFor="description">Description</label>
          {errors.description && (
            <p className="modal-form-error">{errors.description.message}</p>
          )}
          <textarea
            type="text"
            id="description"
            {...register("description", {
              required: "Please enter a description",
              onBlur: () => trigger("description"),
            })}
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
          />
          <label htmlFor="image">Image</label>
          {errors.image && (
            <p className="modal-form-error">{errors.image.message}</p>
          )}
          <input
            type="text"
            id="image"
            {...register("image", {
              required: "Please enter an image URL",
              validate: (value) => {
                let pattern = new RegExp(
                  "^(https?:\\/\\/)?" + // protocol
                    "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name and extension
                    "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
                    "(\\:\\d+)?" + // port
                    "(\\/[-a-z\\d%_.~+]*)*" + // path
                    "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
                    "(\\#[-a-z\\d_]*)?$",
                  "i"
                ); // fragment locator
                return !!pattern.test(value) || "Please enter a valid URL";
              },
              onBlur: () => trigger("image"),
            })}
            value={form.image}
            onChange={(e) => setForm({ ...form, image: e.target.value })}
          />
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
}
