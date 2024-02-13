/* eslint-disable react/prop-types */
import { useState, useContext } from "react";
import HeaderMenu from "./HeaderMenu";
import HeaderAccountMenu from "./HeaderAccountMenu";
import { Search } from "react-feather";
import "./Header.css";
import { UserContext } from "../../contextos/UserContext";
import { Link } from "react-router-dom";

export default function Header() {
  const [formValue, setFormValue] = useState("");
  const { user, setUser } = useContext(UserContext);

  function handleSubmit(e) {
    e.preventDefault();
    setUser({
      ...user,
      searchValue: formValue,
    });
  }

  return (
    <header
      className={`header-container ${user.isDarkMode ? "dark-mode" : "light-mode"}`}
    >
      <Link to="/">
        <h1 className="header-title">MiTienda</h1>
      </Link>
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

// formValue;
