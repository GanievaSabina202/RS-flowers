import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  baskets:
    (typeof window !== "undefined" &&
      JSON.parse(localStorage.getItem("basket"))) ||
    [],
};
export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.baskets = [...state.baskets, action.payload];
    },
    fillBasket: (state, action) => {
      state.baskets = action.payload
  },
  },
});
export const { addToBasket,fillBasket } = basketSlice.actions;
export default basketSlice.reducer;
