/* eslint-disable react/prop-types */
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Promotion from "../promotion/Promotion";
import Loader from "../loader/Loader";
import useProductActions from "../../custom-hooks/useProductActions.jsx";
import { useEffect } from "react";

export default function Layout() {
  const { isLoading, getProductMiddleware } = useProductActions();

  useEffect(() => {
    getProductMiddleware();
  }, []);

  return (
    <>
      <Header />
      <Promotion />
      {isLoading ? <Loader /> : <Outlet />}
      <Footer />
    </>
  );
}
