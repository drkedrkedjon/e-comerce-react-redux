import axios from "axios";
import {
  PRODUCTS_ADD_PRODUCT,
  PRODUCTS_DELETE_PRODUCT,
  PRODUCTS_UPDATE_PRODUCT,
  // PRODUCTS_GET_PRODUCT,
} from "../redux/actions/actionTypes.js";

const API_URL = "http://localhost:3000/products";

// Actiones que ejecuta middleware 2
export const addProductAction = (newProduct) => async (dispatch) => {
  try {
    await axios.post(API_URL, newProduct);
    dispatch({
      type: PRODUCTS_ADD_PRODUCT,
      payload: newProduct,
    });
  } catch (error) {
    throw new Error(error.message);
  }
};

export const removeProductAction = (id) => async (dispatch) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
    dispatch({
      type: PRODUCTS_DELETE_PRODUCT,
      payload: id,
    });
  } catch (error) {
    throw new Error(error.message);
  }
};
export const updateProductAction = (product) => async (dispach) => {
  try {
    await axios.put(`${API_URL}/${product.id}`, product);
    dispach({
      type: PRODUCTS_UPDATE_PRODUCT,
      payload: product,
    });
  } catch (error) {
    throw new Error(error.message, "Error updating product");
  }
};

// export const getProductAction = () => async (dispatch) => {
//   try {
//     const fetchData = await axios.get(API_URL);
//     dispatch({
//       type: PRODUCTS_GET_PRODUCT,
//       payload: fetchData.data,
//     });
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

export const getProductsMiddleware = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
