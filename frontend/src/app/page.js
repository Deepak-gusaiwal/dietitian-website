import React from "react";
import {
  FeaturedOn,
  Hero,
  Intro,
  RecentRecipes,
  Services,
  WhyUs,
} from "./components/server";
export const metadata = {
  title: "Home Page",
};

const Page = () => {
  return (
    <>
      <Hero />
      <Intro />
      <Services />
      <WhyUs />
      <RecentRecipes />
      <FeaturedOn />
    </>
  );
};

export default Page;
