import React from "react";
import { Section,Container,Sheading } from "./helper";
import whyUsImage from "../../assets/images/why-us/why-us.webp";
import lifestyle from "../../assets/images/why-us/lifestyle.webp";
import Image from "next/image";
const WhyUs = () => {
  const whyUsArr = [
    {
      img: lifestyle,
      heading: "Lifestyle Based Diets",
      content: "",
    },
    {
      img: lifestyle,
      heading: "Sustainable Reuslts",
      content: "",
    },
    {
      img: lifestyle,
      heading: "5000's Healthy Recipes",
      content: "",
    },
    {
      img: lifestyle,
      heading: "No Rigorous Workout",
      content: "",
    },
    {
      img: lifestyle,
      heading: "Regular Tracking",
      content: "",
    },
    {
      img: lifestyle,
      heading: "WhatsApp Support",
      content: "",
    },
  ];
  return (
    <Section className="whyUsSection bg-secondary-50">
      <Container className="grid md:grid-cols-4 gap-5 flex-wrap-reverse">
        <div className="whyUsLeft md:col-span-1 md:order-1 order-2 ">
          <div className="imgBox overflow-hidden rounded-md shadow-md">
          <Image src={whyUsImage.src} width={200} height={200} alt={"why us"} title={"why us"} />
          </div>
        </div>
        <div className="whyUsRight grid md:grid-cols-3 md:col-span-3 md:order-2 order-1 gap-2">
          <Sheading
            heading="why choose us?"
            smallHeading="reason for choose us"
            variant={{
              heading: "text-secondary-400 text-[clamp(2rem,4vw,4rem)]",
              smallHeading: "text-[clamp(1rem,2vw,1.5rem)] text-secondary-300",
            }}
            className="text-center col-span-full"
          />
          {whyUsArr.map((whyus, index) => (
            <WhyUsCard key={`${whyus.img}-${index}`} data={whyus} />
          ))}
        </div>
      </Container>
    </Section>
  );
};

const WhyUsCard = ({ data }) => {
  return (
    <div className="whyUsCard flex gap-2 items-center">
      <div className="imgBox w-[80px] shrink-0 p-2">
      <Image src={data.img.src} width={200} height={200} alt={data.heading} title={data.heading} />
      </div>
      <div className="content text-center p-2">
        <h3 className="text-[1rem] capitalize">{data.heading}</h3>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
        </p>
      </div>
    </div>
  );
};

export default WhyUs;
