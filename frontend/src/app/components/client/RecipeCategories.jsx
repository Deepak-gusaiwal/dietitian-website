"use client";
import React from "react";
import Link from "next/link";
import { Loading } from "../server/helper";
import { useSelector } from "react-redux";
import { apiBaseUrl, healthyRecipeSlug } from "@/utils/Constat";
import Image from "next/image";

const RecipeCategories = ({ className = "" }) => {
  const { categories, categoryStatus, statusVal } = useSelector(
    (state) => state.recipe
  );
  return (
    <div className={`categoresCardContainer relative isolate ${className}`}>
      {categoryStatus == statusVal.loading && (
        <Loading className="max-w-[80px] max-h-[80px] mx-auto my-2" />
      )}
      <h2 className="text-secondary-500 capitalize font-bold text-xl mb-2">
        Recipes Category
      </h2>
      {categories.length > 0 &&
        categories.map((category) => (
          <CategoryCard
            data={category.attributes}
            parentSlug={healthyRecipeSlug}
            key={`recipe-category-${category.id}`}
          />
        ))}
    </div>
  );
};

const CategoryCard = ({ data, parentSlug }) => {
  return (
    <div className="categoryCard flex mb-2 bg-primary-300 rounded-md">
      <Link
        href={`/${parentSlug}/category/${data.slug}`}
        className="imgBox flex w-[70px] shrink-0 p-2"
      >
        <Image
          src={`${apiBaseUrl}${data.icon.data.attributes.formats.thumbnail.url}`}
          width={100}
          height={100}
          alt={data.icon.data.attributes.alternativeText}
          title={data.icon.data.attributes.alternativeText}
        />
      </Link>
      <div className="content flex flex-col bg-red-50 w-[100%] p-2 justify-center items-center">
        <h3 className="text-[16px] font-bold  leading-normal">
          <Link
            className="text-primary-600 hover:text-primary-500 mb-2"
            href={`/${parentSlug}/category/${data.slug}`}
          >
            {data.name}
          </Link>
        </h3>
        <Link
          className="capitalize text-sm bg-secondary-500 py-1 px-4 rounded-full flex text-center w-fit text-white hover:bg-secondary-600 duration-300"
          href={`/${parentSlug}/category/${data.slug}`}
        >
          Explore more
        </Link>
      </div>
    </div>
  );
};

export default RecipeCategories;
