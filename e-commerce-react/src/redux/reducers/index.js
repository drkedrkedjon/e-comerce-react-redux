import { combineReducers } from "redux";
import productReducer from "./productsReducer.js";

const rootReducer = combineReducers({
  products: productReducer,
});

export default rootReducer;
