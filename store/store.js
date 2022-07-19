import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../features/basket/Basket";
export const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
});
