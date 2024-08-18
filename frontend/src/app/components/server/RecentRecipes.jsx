"use client";
import React from "react";
import { Section, Sheading, Container, Card, Loading } from "./helper";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { healthyRecipeSlug } from "@/utils/Constat";

const RecentRecipes = ({ className = "" }) => {
  const { recipes, recipeStatus, statusVal } = useSelector(
    (state) => state.recipe
  );
  if (!recipes.length) {
    return;
  }
  return (
    <Section className={`bg-primary-100 ${className}`}>
      <Container className="min-h-[350px]">
        <Sheading
          heading="Our Latest Recipes?"
          smallHeading="tasty and healthy"
          variant={{
            heading: "text-primary-600 text-[clamp(2rem,4vw,4rem)]",
            smallHeading: "text-[clamp(1rem,2vw,1.5rem)] text-primary-500",
          }}
          className="text-center md:mb-4 mb-2"
        />
        {recipeStatus == statusVal.loading && <Loading className="mx-auto" />}
        {recipes.length > 0 && (
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
            }}
            modules={[Pagination, Autoplay, Navigation]}
            className="swiperSlider"
          >
            {recipes.map((recipe) => (
              <SwiperSlide key={`recent-recipes-slider-slide-${recipe.id}`}>
                <Card
                  className="shadow-none"
                  parentSlug={healthyRecipeSlug}
                  data={recipe.attributes}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </Container>
    </Section>
  );
};

export default RecentRecipes;
