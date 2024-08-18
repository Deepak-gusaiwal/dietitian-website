import React from "react";
import { Container, GradientButton, Section } from "./helper";
import heroImg from "../../assets/images/hero/hero.webp";
import Image from "next/image";
const Hero = () => {
  return (
    <Section className="bg-primary-50 md:h-[calc(100vh-var(--headerHeight))] md:max-h-[650px] flex items-center ">
      <Container className="hero grid md:grid-cols-2 gap-2">
        <div className="heroLeft md:pt-4">
          <div className="content">
            <h2>eat</h2>
            <h2>healthy</h2>
            <h2>be healthy</h2>

            <p className="md:my-4 my-2 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Inventore, consequuntur.Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Inventore, consequuntur.
            </p>

            <GradientButton>Check Diet Plans</GradientButton>
          </div>
        </div>

        <div className="heroRight">
          <div className="imgBox">
            <Image
              src={heroImg.src}
              width={500}
              height={500}
              title="hero Image"
              alt="hero Image"
              priority
              layout="responsive"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
