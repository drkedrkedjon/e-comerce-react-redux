/* eslint-disable react/prop-types */
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Promotion from "../promotion/Promotion";

export default function Layout() {
  return (
    <>
      <Header />
      <Promotion />
      <Outlet />
      <Footer />
    </>
  );
}
