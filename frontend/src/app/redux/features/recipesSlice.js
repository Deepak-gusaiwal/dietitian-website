import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Axios } from "@/utils/Axios";
// Create an async thunk for fetching recipes
export const fetchRecipes = createAsyncThunk(
  "recipes/fetchRecipes",
  async (__, { rejectWithValue }) => {
    try {
      const { data } = await Axios.get("/healthy-recipes?populate=*");
      // console.log("data", data.data);
      return data.data;
    } catch (error) {
      return rejectWithValue(error || "something went wrong");
    }
  }
);
// Create an async thunk for fetching recipes category
export const fetchRecipesCategory = createAsyncThunk(
  "recipes/fetchRecipesCategory",
  async (__, { rejectWithValue }) => {
    try {
      const { data } = await Axios.get("/recipes-categories?populate=*");
      console.log('data',data)
      return data.data;
    } catch (error) {
      return rejectWithValue(error || "something went wrong");
    }
  }
);

const statusVal = {
  idle: "idle",
  loading: "loading",
  success: "success",
  failed: "failed",
};

const initialState = {
  recipes: [],
  categories: [],
  loggedIn: false,
  recipeStatus: statusVal.idle,
  categoryStatus: statusVal.idle,
  statusVal,
  error: null,
};

const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipes.pending, (state) => {
        state.recipeStatus = "loading";
      })
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        state.recipeStatus = "succeeded";
        state.recipes = action.payload;
      })
      .addCase(fetchRecipes.rejected, (state, action) => {
        state.recipeStatus = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchRecipesCategory.pending, (state) => {
        state.categoryStatus = "loading";
      })
      .addCase(fetchRecipesCategory.fulfilled, (state, action) => {
        state.categoryStatus = "succeeded";
        state.categories = action.payload;
      })
      .addCase(fetchRecipesCategory.rejected, (state, action) => {
        state.categoryStatus = "failed";
        state.error = action.error.message;
      });
  },
});

export default recipesSlice.reducer;
