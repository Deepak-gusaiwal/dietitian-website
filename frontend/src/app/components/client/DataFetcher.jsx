"use client";
import { closeOverlay } from "@/app/redux/features/baseSlice";
import {
  fetchRecipes,
  fetchRecipesCategory,
} from "@/app/redux/features/recipesSlice";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const DataFetcher = () => {
  // to fetch elements from store
  const { recipes, recipeStatus, categoryStatus, statusVal } = useSelector(
    (state) => state.recipe
  );
  const dispatch = useDispatch();
  //   fetch recipes
  useEffect(() => {
    if (recipeStatus == statusVal.idle) {
      dispatch(fetchRecipes());
    }
  }, [recipeStatus, recipes]);
  //   fetch recipes categories
  useEffect(() => {
    if (categoryStatus == statusVal.idle) {
      dispatch(fetchRecipesCategory());
    }
  }, [categoryStatus, recipes]);

  // for header
  const pathname = usePathname();
  useEffect(() => {
    dispatch(closeOverlay());
  }, [pathname]);
  return null;
};

export default DataFetcher;
