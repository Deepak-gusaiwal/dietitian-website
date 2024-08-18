import React from "react";
import { Container } from "./helper";
import { RecipeCategories } from "../client";

const RecipeGrid = ({ className = "", children, title }) => {
  return (
    <Container className={`grid md:grid-cols-4 gap-4  ${className}`}>
      {title && (
        <div className="head col-span-full">
          <h2 className="text-primary-600 md:text-start text-center capitalize font-semibold">
            {title}
          </h2>
        </div>
      )}
      {/* left bar */}
      <div className="gridLeft md:col-span-3 relative isolate min-h-14 cardsContainer h-fit ">
        {children}
      </div>

      {/* right bar */}
      <div className="gridRight md:col-span-1">
        <RecipeCategories />
      </div>
    </Container>
  );
};

export default RecipeGrid;
