/* eslint-disable react/prop-types */
import "./modal.css";
import { useForm } from "react-hook-form";
import { XCircle } from "react-feather";

export default function Modal({
  form,
  setIsModalOpen,
  modalType,
  handleSubmitForm,
}) {
  const {
    register,
    formState: { errors },
    trigger,
    handleSubmit,
  } = useForm({ defaultValues: form });

  const onSubmit = (formData) => {
    handleSubmitForm(formData);
  };

  // Verificaciones de errores en el formulario
  const title = {
    required: "Please enter a title",
    maxLength: {
      value: 40,
      message: "Please enter a title with less than 40 characters",
    },
    minLength: {
      value: 5,
      message: "Please enter a title with more than 5 characters",
    },
    onBlur: () => trigger("title"),
  };
  const price = {
    required: "Please enter a price",
    min: {
      value: 0.01,
      message: "Please enter a price greater than 0",
    },
    onBlur: () => trigger("price"),
  };
  const description = {
    required: "Please enter a description",
    maxLength: {
      value: 200,
      message: "Please enter a description with less than 20 characters",
    },
    minLength: {
      value: 10,
      message: "Please enter a description with more than 10 characters",
    },
    onBlur: () => trigger("description"),
  };
  const category = {
    required: "Please enter a category",
    maxLength: {
      value: 20,
      message: "Please enter a category with less than 20 characters",
    },
    minLength: {
      value: 3,
      message: "Please enter a category with more than 3 characters",
    },
    onBlur: () => trigger("category"),
  };
  const image = {
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
          onSubmit={handleSubmit(onSubmit)}
        >
          <label htmlFor="title">Title</label>
          {errors.title && (
            <p className="modal-form-error">{errors.title.message}</p>
          )}
          <input
            type="text"
            id="title"
            {...register("title", title)}
          />
          <label htmlFor="price">Price</label>
          {errors.price && (
            <p className="modal-form-error">{errors.price.message}</p>
          )}
          <input
            type="number"
            id="price"
            {...register("price", price)}
          />
          <label htmlFor="description">Description</label>
          {errors.description && (
            <p className="modal-form-error">{errors.description.message}</p>
          )}
          <textarea
            type="text"
            id="description"
            {...register("description", description)}
          />

          <label htmlFor="category">Category</label>
          {errors.category && (
            <p className="modal-form-error">{errors.category.message}</p>
          )}
          <input
            type="text"
            id="category"
            {...register("category", category)}
          />

          <label htmlFor="image">Image</label>
          {errors.image && (
            <p className="modal-form-error">{errors.image.message}</p>
          )}
          <input
            type="text"
            id="image"
            {...register("image", image)}
          />
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
}
