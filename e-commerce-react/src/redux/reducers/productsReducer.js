// import {
//   PRODUCTS_ADD_PRODUCT,
//   PRODUCTS_DELETE_PRODUCT,
//   PRODUCTS_UPDATE_PRODUCT,
//   PRODUCTS_GET_PRODUCT,
// } from "../actions/actionTypes.js";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as PRODUCT_API from "../../api/product.js";

const initialData = {
  products: null,
  loading: true,
  error: null,
};
//  THUNKS 1
export const getProductsThunk = createAsyncThunk(
  "products/getProducts",
  async () => {
    const response = await PRODUCT_API.getProductsMiddleware();
    return response;
  }
);

// SLICE reducer 3

const productsSlice = createSlice({
  name: "products",
  initialState: initialData,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductsThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addMatcher(
        (action) => action.type.endsWith("/pending"),
        (state) => {
          state.loading = true;
          state.error = null;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        }
      );
  },
});

export const { getProducts } = productsSlice.actions;

export const getAllProducts = (state) => state.products.products;
export const getProductsLoading = (state) => state.products.loading;
export const getProductsError = (state) => state.products.error;

export default productsSlice.reducer;
// NO SLICE reducer

// function productsReducer(state = initialData, action) {
//   switch (action.type) {
//     case PRODUCTS_ADD_PRODUCT:
//       return {
//         ...state,
//         products: {
//           ...state.products,
//           products: [...state.products.products, action.payload],
//         },
//       };
//     case PRODUCTS_DELETE_PRODUCT:
//       return {
//         ...state,
//         products: {
//           ...state.products,
//           products: state.products.products.filter(
//             (product) => product.id !== action.payload
//           ),
//         },
//       };
//     case PRODUCTS_UPDATE_PRODUCT:
//       return {
//         ...state,
//         products: {
//           ...state.products,
//           products: state.products.products.map((product) => {
//             if (product.id === action.payload.id) {
//               return action.payload;
//             } else {
//               return product;
//             }
//           }),
//         },
//       };
//     case PRODUCTS_GET_PRODUCT:
//       return {
//         ...state,
//         products: {
//           ...state.products,
//           products: action.payload,
//         },
//       };
//     default:
//       return state;
//   }
// }

// export default productsReducer;
