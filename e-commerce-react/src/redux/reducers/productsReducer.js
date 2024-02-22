import {
  PRODUCTS_ADD_PRODUCT,
  PRODUCTS_DELETE_PRODUCT,
  PRODUCTS_UPDATE_PRODUCT,
} from "../actions/actionTypes.js";
import data from "../../data/db.json";
// console.log(data);

const initialData = {
  products: data,
};

function productsReducer(state = initialData, action) {
  switch (action.type) {
    case PRODUCTS_ADD_PRODUCT:
      // console.log(state.products);
      return {
        ...state,
        products: {
          ...state.products,
          products: [...state.products.products, action.payload],
        },
      };
    case PRODUCTS_DELETE_PRODUCT:
    case PRODUCTS_UPDATE_PRODUCT:
    default:
      return state;
  }
}

export default productsReducer;
export const getAllProducts = (state) => state.products.products;
