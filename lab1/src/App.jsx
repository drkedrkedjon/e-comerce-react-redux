import "./App.css";
import { useState } from "react";
import Footer from "./components/footer/Footer";
import Promotion from "./components/content/Promotion";
import Header from "./components/header/Header";
import MainContent from "./components/content/MainContent";
import LoginForm from "./components/login/LoginForm";

export default function App() {
  const [searchInputValue, setSearchInputValue] = useState("");
  return (
    <>
      <Header setSearchInputValue={setSearchInputValue} />
      <Promotion />
      <MainContent searchInputValue={searchInputValue} />
      <LoginForm />
      <Footer />
    </>
  );
}
