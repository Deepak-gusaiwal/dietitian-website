import {
  BreadcrumbContainer,
  RecentRecipes,
  RecipeGrid,
} from "@/app/components/server";
import { Axios } from "@/utils/Axios";
import { apiBaseUrl, healthyRecipeSlug } from "@/utils/Constat";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

async function fetchData(slug) {
  try {
    const { data } = await Axios.get(
      `/healthy-recipes?filters[slug][$eq]=${slug}&populate=featuredImage,recipes_categories`
    );
    return data.data;
  } catch (error) {
    throw new Error(error);
  }
}
const RecipePage = async ({ params }) => {
  const data = await fetchData(params.slug);

  // Check if the recipe data exists
  if (!data || data.length === 0) {
    // Redirect to 404 page if recipe not found
    notFound();
  }
  const { attributes } = data[0];
  const items = [
    {
      href: healthyRecipeSlug,
      lable: "Healthy Recipes",
    },
  ];
  return (
    <>
      <BreadcrumbContainer title={attributes.title} items={items} />
      <RecipeGrid>
        <h2 className="my-2 text-center capitalize text-primary-600">
          {attributes.title}
        </h2>
        <div className="featuredImage">
          <Image
            width={500}
            height={500}
            src={`${apiBaseUrl}${attributes.featuredImage.data.attributes.url}`}
            alt={attributes.featuredImage.data.attributes.alternativeText}
            title={attributes.featuredImage.data.attributes.alternativeText}
            priority
            layout="responsive"
            className="rounded shadow-md"
          />
        </div>
        <div className="contentHolder">
          <ContentRendere content={attributes.content} />
          <iframe
            width="560"
            height="315"
            src={`${attributes.youtubevideo}`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </RecipeGrid>
      <RecentRecipes />
    </>
  );
};

// Function to render content based on its type
const ContentRendere = ({ content }) => {
  return content.map((item, index) => {
    switch (item.type) {
      case "heading":
        return React.createElement(
          `h${item.level}`,
          { key: index },
          item.children.map((child, i) => child.text)
        );
      case "paragraph":
        return <p key={index}>{item.children.map((child, i) => child.text)}</p>;
      case "list":
        return (
          <ul key={index}>
            {item.children.map((listItem, i) => (
              <li key={i}>{listItem.children.map((child, j) => child.text)}</li>
            ))}
          </ul>
        );
      case "image":
        return (
          <div key={index} className="imgBox ">
            <Image
              className="w-auto h-auto rounded mx-auto"
              key={index}
              width={500}
              height={500}
              // src={
              //   item?.image?.formats?.medium?.url
              //     ? `http://localhost:1337${item?.image?.formats?.medium?.url}`
              //     : item?.image?.url
              // }
              src={item?.image?.url}
              alt={item.image.alternativeText}
              title={item.image.alternativeText}
            />
          </div>
        );
      // Handle other types as needed
      default:
        return null;
    }
  });
};

export default RecipePage;
