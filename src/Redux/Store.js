import { configureStore } from "@reduxjs/toolkit";
import RootReducer from "./RootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const Store = configureStore({ reducer: RootReducer }, composeWithDevTools());

export default Store;
