/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./error.css";

export default function Error({ error }) {
  return (
    <div className="error-container">
      <h1>Error: {error}</h1>
      <p>Page not found</p>
      <Link
        className="error-link"
        to="/"
      >
        Go to home page
      </Link>
    </div>
  );
}
