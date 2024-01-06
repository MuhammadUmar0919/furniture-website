// filterSlice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterState {
  price: number | string;
  rating: number;
  // Add other filter properties if needed
}

const initialState: FilterState = {
  price: 0, // Set your default price value
  rating: 0, // Set your default rating value
  // Set default values for other filter properties if needed
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setPrice: (state, action: PayloadAction<number | string>) => {
      state.price = action.payload;
    },
    setRating: (state, action: PayloadAction<number>) => {
      state.rating = action.payload;
    },
    clearFilters: (state) => {
      // Reset filter values to their defaults
      state.price = initialState.price;
      state.rating = initialState.rating;
      // Reset other filter properties to their defaults if needed
    },
  },
});

export const { setPrice, setRating, clearFilters } = filterSlice.actions;

export default filterSlice.reducer;
