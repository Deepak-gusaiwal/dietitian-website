import { BreadcrumbContainer, RecipeGrid } from "@/app/components/server";
import { Card } from "@/app/components/server/helper";
import { Axios } from "@/utils/Axios";
import { healthyRecipeSlug } from "@/utils/Constat";
import { notFound } from "next/navigation";
import React from "react";

// Function to fetch category by slug
async function fetchCategoryBySlug(slug) {
  try {
    const { data } = await Axios.get(
      `/recipes-categories?filters[slug][$eq]=${slug}&populate=*`
    );
    return data.data[0] || null; // Return null if no category is found
  } catch (error) {
    throw new Error(error);
  }
}

// Function to fetch recipes by category ID
async function fetchRecipesByCategoryId(categoryId) {
  try {
    const { data } = await Axios.get(
      `/healthy-recipes?filters[recipes_categories][id][$eq]=${categoryId}&populate=*`
    );
    return data.data;
  } catch (error) {
    throw new Error(error);
  }
}

const RecipesByCategory = async ({ params }) => {
  // Fetch category by slug
  const category = await fetchCategoryBySlug(params.category);
  // Handle 404 if category is not found
  if (!category) {
    notFound(); // Redirect to 404 page
    return null; // Return null to ensure nothing is rendered
  }
  const recipes = await fetchRecipesByCategoryId(category.id);
  const items = [
    {
      href: healthyRecipeSlug,
      lable: "Healthy Recipes",
    },
  ];
  return (
    <>
      <BreadcrumbContainer title={category.attributes.name} items={items} />

      <RecipeGrid title={category.attributes.name}>
        <div className="grid md:grid-cols-2 gap-2 ">
          {recipes.length > 0 ? (
            recipes.map((recipe) => (
              <Card
                key={`recipes-by-${params.category}-${recipe.id}`}
                parentSlug={healthyRecipeSlug}
                data={recipe.attributes}
              />
            ))
          ) : (
            <h4>No Recipes Found !</h4>
          )}
        </div>
      </RecipeGrid>
    </>
  );
};

export function generateMetadata({ params }) {
  console.log("params", params);
  return {
    title: "dynamic",
  };
}
// export const metadata = {
//   title: "Category Page Title",
//   description: "Category Page Description",
//   keywords: "Category Page Keywords",
//   alternates: {
//     canonical: `/`,
//   },
//   openGraph: {
//     url: "CurrentPageUrl",
//     type: "website",
//     siteName: "OG Title",
//     title: "OG Title",
//     description: "OG Description",
//     images: [
//       {
//         url: "OG Image URL",
//         width: 800,
//         height: 600,
//         alt: "OG Image",
//       },
//     ],
//   },
//   twitter: {
//     card: "summary_large_image",
//     site: "@seoserviceinind",
//     title: "twitter Title",
//     description: "Twitter Description",
//     images: ["Twitter Image URL"],
//   },
//   dc: {
//     card: "summary_large_image",
//     site: "@seoserviceinind",
//     title: "twitter Title",
//     description: "Twitter Description",
//     images: ["Twitter Image URL"],
//   },
//   robots: "index, follow",
// };

export default RecipesByCategory;
