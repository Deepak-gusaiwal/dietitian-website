import { configureStore } from "@reduxjs/toolkit";
import baseSlice from "./features/baseSlice";
import recipesSlice from "./features/recipesSlice";

export default configureStore({
  reducer: {
    base: baseSlice,
    recipe: recipesSlice,
  },
});
