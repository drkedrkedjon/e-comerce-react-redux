import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addProductAction,
  removeProductAction,
  updateProductAction,
  getProductAction,
} from "../api/product.js";

// Custom hook, sus functiones se asignan a los botones
export default function useProductActions() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const addProductMiddleware = async (newProduct) => {
    setIsLoading(true);
    setError(null);
    try {
      await dispatch(addProductAction(newProduct));
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };
  const removeProductMiddleware = async (id) => {
    setIsLoading(true);
    setError(null);
    try {
      await dispatch(removeProductAction(id));
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };
  const updateProductMiddleware = async (product) => {
    setIsLoading(true);
    setError(null);
    try {
      await dispatch(updateProductAction(product));
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const getProductMiddleware = async () => {
    setIsLoading(true);
    setError(null);
    try {
      await dispatch(getProductAction());
    } catch (error) {
      setError(error);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  };

  return {
    isLoading,
    error,
    addProductMiddleware,
    removeProductMiddleware,
    updateProductMiddleware,
    getProductMiddleware,
  };
}
