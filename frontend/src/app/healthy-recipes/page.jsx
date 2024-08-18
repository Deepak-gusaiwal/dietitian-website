import React from "react";
import { BreadcrumbContainer, RecipeGrid } from "../components/server";
import { HealthyRecipes } from "../components/client";

const HealthyRecipesPage = () => {
  return (
    <>
      <BreadcrumbContainer title={"Healthy Recipes"} />
      <RecipeGrid title={"latest recipes"}>
        <HealthyRecipes />
      </RecipeGrid>
    </>
  );
};

export function generateMetadata({ params }) {
  console.log("params", params);
  return {
    title: "dynamic-healthy",
  };
}
export default HealthyRecipesPage;
