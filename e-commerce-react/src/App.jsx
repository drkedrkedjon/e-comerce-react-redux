import "./App.css";
import { useState, useContext } from "react";
import Footer from "./components/footer/Footer";
import Promotion from "./components/content/Promotion";
import Header from "./components/header/Header";
import MainContent from "./components/content/MainContent";
import LoginForm from "./components/login/LoginForm";
import ShoppingCart from "./components/shopping-card/ShoppingCart";
import { RutasContext } from "./contextos/RutasContext";

export default function App() {
  const [searchInputValue, setSearchInputValue] = useState("");
  // rutas seran: content y shopping-cart
  const { rutas, setRutas } = useContext(RutasContext);

  return (
    <>
      <Header
        setSearchInputValue={setSearchInputValue}
        setRutas={setRutas}
      />
      <Promotion />
      {rutas === "shopping-cart" && <ShoppingCart />}
      {rutas === "content" && (
        <MainContent searchInputValue={searchInputValue} />
      )}
      <LoginForm />
      <Footer />
    </>
  );
}
