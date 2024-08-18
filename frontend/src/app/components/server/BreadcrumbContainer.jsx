import React from "react";
import { Section, Container } from "./helper";
import { FaHome } from "react-icons/fa";
import { GoTriangleRight } from "react-icons/go";
import Link from "next/link";
import breadcrumbBannerImage from "../../assets/images/breadcrumb/breadcrumb.webp";
import Image from "next/image";
const BreadcrumbContainer = ({ title, items = [] }) => {
  return (
    <Section className="breadcrumbSection bg-primary-100 relative isolate">
      <Image
        src={breadcrumbBannerImage.src}
        width={500}
        height={300}
        alt="breadcrumb image"
        priority
        layout="responsive"
      />

      <Container className="content flex flex-col justify-center items-center h-full min-h-[clamp(150px,20vw,250px)]">
        <h1 className="text-primary-600 text-[clamp(1.5rem,3vw,3rem)] text-center backdrop-blur-sm rounded-md md:mb-4 capitalize leading-snug">
          {title}
        </h1>
        <div className="breadcrumb capitalize flex-wrap text-white flex gap-1 items-center bg-primary-500 w-fit py-2 px-4 md:rounded-full">
          <Link href="/">
            <FaHome />
          </Link>
          {items?.length > 0 &&
            items?.map((item) => (
              <>
                <GoTriangleRight className="divider" />
                <Link href={`/${item?.href}`}> {item?.lable} </Link>
              </>
            ))}
          <GoTriangleRight className="divider" />
          <span>{title}</span>
        </div>
      </Container>
    </Section>
  );
};

export default BreadcrumbContainer;
