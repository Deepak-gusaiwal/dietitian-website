import React from "react";
import { Container, Section, Sheading } from "./helper";
import Link from "next/link";

import weightLoss from "../../assets/images/services/weight-loss.webp";
import cancer from "../../assets/images/services/cancer.webp";
import diabetie from "../../assets/images/services/diabetie.webp";
import hypertention from "../../assets/images/services/hypertention.webp";
import marriage from "../../assets/images/services/marriage.webp";
import pcos from "../../assets/images/services/pcos.webp";
import thyroid from "../../assets/images/services/thyroid.webp";
import teen from "../../assets/images/services/teen.webp";
import Image from "next/image";
const Services = () => {
  const servicesContent = [
    {
      url: "#",
      name: "Weight Loss Diet Plan",
      image: weightLoss,
      content:
        "Dietitian Natasha Mohan is one of the most influential and renowned nutritionist",
    },
    {
      url: "#",
      name: "PCOS Diet Plan",
      image: pcos,
      content:
        "Dietitian Natasha Mohan is one of the most influential and renowned nutritionist",
    },
    {
      url: "#",
      name: "Thyroid Diet Plan",
      image: thyroid,
      content:
        "Dietitian Natasha Mohan is one of the most influential and renowned nutritionist",
    },
    {
      url: "#",
      name: "Hypertension Diet Plan",
      image: hypertention,
      content:
        "Dietitian Natasha Mohan is one of the most influential and renowned nutritionist",
    },
    {
      url: "#",
      name: "Diabetes Diet Plan",
      image: diabetie,
      content:
        "Dietitian Natasha Mohan is one of the most influential and renowned nutritionist",
    },
    {
      url: "#",
      name: "Pre Marriage Diet Plan",
      image: marriage,
      content:
        "Dietitian Natasha Mohan is one of the most influential and renowned nutritionist",
    },
    {
      url: "#",
      name: "Cancer Diet Plan",
      image: cancer,
      content:
        "Dietitian Natasha Mohan is one of the most influential and renowned nutritionist",
    },
    {
      url: "#",
      name: "Teenager Diet Plan",
      image: teen,
      content:
        "Dietitian Natasha Mohan is one of the most influential and renowned nutritionist",
    },
  ];
  return (
    <Section className="serviceSection bg-primary-50">
      <Container className="grid md:grid-cols-3 md:gap-4 gap-2">
        <Sheading
          heading="our services"
          smallHeading="what we deliver ?"
          content="Dietitian Natasha Mohan is one of the most influential and renowned nutritionist"
          className="col-span-full text-center leading-none mb-4"
          variant
        />
        {servicesContent.map((service, index) => {
          return <ServiceCard key={index} data={service} />;
        })}
      </Container>
    </Section>
  );
};

const ServiceCard = ({ className = "", data }) => {
  const { url, name, image, content } = data;
  return (
    <div
      className={`serviceCard  shadow-md rounded overflow-hidden ${className}`}
    >
      <Link className="imgBox" href={url}>
        <Image src={image.src} width={200} height={200} alt={name} title={name} />
        <div className="iconImg flex justify-center items-center">
          <Image src="/logo.webp" width={100} height={50} alt="logo" />
        </div>
      </Link>
      <div className="contentBox p-4">
        <h3 className="capitalize mb-2 text-secondary-400">{name}</h3>

        <p>{content}</p>
        <Link
          href={url}
          className="text-primary-400 block  mt-4 hover:text-primary-300 capitalize"
        >
          read more
        </Link>
      </div>
    </div>
  );
};

export default Services;
