/* eslint-disable react/prop-types */
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Promotion from "../promotion/Promotion";
import Loader from "../loader/Loader";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  getProductsLoading,
  getProductsError,
  getProductsThunk,
} from "../../redux/reducers/productsReducer.js";

export default function Layout() {
  const dispatch = useDispatch();
  const loading = useSelector(getProductsLoading);
  const error = useSelector(getProductsError);

  useEffect(() => {
    dispatch(getProductsThunk());
  }, []);

  return (
    <>
      <Header />
      <Promotion />
      {error && <p>{error}</p>}
      {loading ? <Loader /> : <Outlet />}
      <Footer />
    </>
  );
}
