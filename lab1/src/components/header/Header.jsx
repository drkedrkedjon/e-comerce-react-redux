/* eslint-disable react/prop-types */
import { useState, useContext } from "react";
import HeaderMenu from "./HeaderMenu";
import HeaderAccountMenu from "./HeaderAccountMenu";
import { Search } from "react-feather";
import "./Header.css";
import { UserContext } from "../../contextos/UserContext";

export default function Header({ setSearchInputValue, setRutas }) {
  const [formValue, setFormValue] = useState("");
  const { user } = useContext(UserContext);

  function handleSubmit(e) {
    e.preventDefault();
    setSearchInputValue(formValue);
  }

  return (
    <header
      className={`header-container ${user.isDarkMode ? "dark-mode" : "light-mode"}`}
    >
      <h1 onClick={() => setRutas("content")}>MiTienda</h1>
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
      <HeaderAccountMenu setRutas={setRutas} />
    </header>
  );
}
