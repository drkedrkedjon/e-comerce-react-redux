/* eslint-disable react/prop-types */
import { useState } from "react";
import HeaderMenu from "./HeaderMenu";
import HeaderAccountMenu from "./HeaderAccountMenu";
import { Search } from "react-feather";
import "./Header.css";

export default function Header({ setSearchInputValue }) {
  const [formValue, setFormValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setSearchInputValue(formValue);
  }

  return (
    <header className="header-container">
      <h1>MiTienda</h1>
      <HeaderMenu />
      <form onSubmit={handleSubmit}>
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          className="search-input"
          type="text"
          placeholder="Buscar productos"
        />
        <button
          className="header-submit-btn"
          type="submit"
        >
          {" "}
          <Search size={18} />{" "}
        </button>
      </form>
      <HeaderAccountMenu />
    </header>
  );
}
