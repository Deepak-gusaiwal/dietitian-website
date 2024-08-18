import { createSlice } from "@reduxjs/toolkit";

export const baseSlice = createSlice({
  name: "base",
  initialState: {
    isNavOpen: false,
    isOvelayOpen: false,
  },
  reducers: {
    toggleMenu: (state, action) => {
      state.isNavOpen = action.payload;
      state.isOvelayOpen = action.payload;
    },
    closeOverlay: (state, action) => {
      state.isOvelayOpen = false;
      state.isNavOpen = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleMenu, closeOverlay } = baseSlice.actions;

export default baseSlice.reducer;
