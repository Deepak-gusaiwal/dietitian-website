"use client";
import React from "react";
import { useSelector } from "react-redux";
import { Card, Loading } from "../server/helper";
import { healthyRecipeSlug } from "@/utils/Constat";

const HealthyRecipes = () => {
  const { recipes, recipeStatus, statusVal } = useSelector(
    (state) => state.recipe
  );
  return (
    <div className="grid md:grid-cols-2 gap-2 ">
      {recipeStatus == statusVal.loading && <Loading className="mx-auto my-2 col-span-full" />}
      {recipes.length > 0 &&
        recipes.map((recipe) => (
          <Card
            key={`recipe-${recipe.id}`}
            parentSlug={healthyRecipeSlug}
            data={recipe.attributes}
          />
        ))}
    </div>
  );
};

export default HealthyRecipes;
