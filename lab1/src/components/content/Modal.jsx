/* eslint-disable react/prop-types */
import "./modal.css";
import { XCircle } from "react-feather";

export default function Modal({ form, setIsModalOpen }) {
  return (
    <div className="edit-modal">
      <div className="edit-modal-content">
        <button
          onClick={() => setIsModalOpen(false)}
          className="edit-modal-close-btn"
        >
          <XCircle />
        </button>
        <h2>Modal</h2>
        <p>{form.title}</p>
      </div>
    </div>
  );
}
