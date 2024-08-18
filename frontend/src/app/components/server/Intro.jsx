import React from "react";
import { Container, GradientButton, Section } from "./helper";
import introImage from "../../assets/images/intro/intro.webp";
import Image from "next/image";
const Intro = () => {
  return (
    <Section className="bg-secondary-50">
      <Container className="grid md:grid-cols-2 gap-2">
        <div className="introLeft ">
          <div className="imgBox">
            <Image
              src={introImage.src}
              width={500}
              height={500}
              alt="Intro Image"
              title="Intro Image"
            />
          </div>
        </div>
        <div className="introRight flex flex-col justify-center">
          <div className="content">
            <h2 className="uppercase text-[clamp(2rem,3.5vw,4rem)] leading-none font-bold md:mb-5">
              <span className="text-primary-400">Dietitian</span>{" "}
              <span className="text-secondary-400">Natasha</span>{" "}
              <span className="text-success-400">Mohan</span>
            </h2>

            <p className="my-2">
              Dietitian Natasha Mohan is one of the most influential and
              renowned nutritionist and dietitian, with over 2 Million Followers
              on YouTube and 200+ Million Views and with 10+ Years of
              Experience. Dietitian Natasha Mohan is a transformation expert,
              Motivational Speaker and Lifestyle Expert. She has transformed
              over 25K+ lives. She specializes in Therapeutic Diets Like,
              PCOS/PCOD, Thyroid, Diabetes, Cholesterol, Blood pressure, and
              other lifestyle disorder.
            </p>
          </div>
          <GradientButton className="rounded-l-full px-4 w-fit">
            Read more
          </GradientButton>
        </div>
      </Container>
    </Section>
  );
};

export default Intro;
