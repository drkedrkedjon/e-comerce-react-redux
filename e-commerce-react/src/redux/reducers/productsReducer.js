import {
  PRODUCTS_ADD_PRODUCT,
  PRODUCTS_DELETE_PRODUCT,
  PRODUCTS_UPDATE_PRODUCT,
  PRODUCTS_GET_PRODUCT,
} from "../actions/actionTypes.js";
// import data from "../../data/db.json";

const initialData = {
  products: null,
};

function productsReducer(state = initialData, action) {
  switch (action.type) {
    case PRODUCTS_ADD_PRODUCT:
      return {
        ...state,
        products: {
          ...state.products,
          products: [...state.products.products, action.payload],
        },
      };
    case PRODUCTS_DELETE_PRODUCT:
      return {
        ...state,
        products: {
          ...state.products,
          products: state.products.products.filter(
            (product) => product.id !== action.payload
          ),
        },
      };
    case PRODUCTS_UPDATE_PRODUCT:
      return {
        ...state,
        products: {
          ...state.products,
          products: state.products.products.map((product) => {
            if (product.id === action.payload.id) {
              return action.payload;
            } else {
              return product;
            }
          }),
        },
      };
    case PRODUCTS_GET_PRODUCT:
      return {
        ...state,
        products: {
          ...state.products,
          products: action.payload,
        },
      };
    default:
      return state;
  }
}

export default productsReducer;
export const getAllProducts = (state) => state.products.products;
