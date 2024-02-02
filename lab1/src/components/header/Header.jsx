/* eslint-disable react/prop-types */
import { useState } from "react";
import HeaderMenu from "./HeaderMenu";
import HeaderAccountMenu from "./HeaderAccountMenu";
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
        <button type="submit"></button>
      </form>
      <HeaderAccountMenu />
    </header>
  );
}
