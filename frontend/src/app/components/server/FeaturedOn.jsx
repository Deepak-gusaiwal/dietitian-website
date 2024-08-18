import React from "react";
import { Container, Section, Sheading } from "./helper";
import Image from "next/image";

const FeaturedOn = () => {
  const featuredImages = [
    { img: "hindustantimes.webp" },
    { img: "indiatoday.webp" },
    { img: "news18.webp" },
    { img: "pinkvilla.webp" },
    { img: "tie.webp" },
    { img: "toi.webp" },
  ];
  return (
    <Section className="bg-secondary-100 pt-8">
      <Container>
        <Sheading
          smallHeading="Dietitian Natasha Mohan Features on"
          className="text-center leading-none mb-4"
          variant={{smallHeading:"text-secondary-600"}}
        />
        <div className="horizontalScroller overflow-hidden w-full py-2">
          <div className="horizontalScrollerWrapper flex gap-[1rem]">
            {featuredImages.map((image) => (
              <div className="item w-[clamp(150px,12vw,300px)]" key={image.img}>
                <Image src={`/images/featured/${image.img}`} width={200} height={200} alt={image.img} title={image.img} />
              </div>
            ))}
            {featuredImages.map((image) => (
              <div className="item w-[clamp(150px,12vw,300px)]" key={`copyed-${image.img}`}>
               <Image src={`/images/featured/${image.img}`} width={200} height={200} alt={image.img} title={image.img} />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default FeaturedOn;
