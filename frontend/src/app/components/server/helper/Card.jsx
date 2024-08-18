import { apiBaseUrl } from "@/utils/Constat";
import Image from "next/image";
import Link from "next/link";

const Card = ({ data, parentSlug, className = "" }) => {
  // console.log(data);

  const categoriesArr =
    data?.recipes_categories?.data ||
    data?.attributes?.recipes_categories?.data;
  const pageLink = `/${parentSlug}/${data.slug || data?.attributes?.slug}`;
  return (
    <div className={`card ${className}`}>
      <Link className="imgBox" href={pageLink}>
        <Image
          width={400}
          height={400}
          className="object-cover"
          src={`${apiBaseUrl}${
            data?.featuredImage?.data?.attributes?.formats?.small?.url ||
            data?.attributes?.featuredImage?.data?.attributes?.formats?.small
              ?.url
          }`}
          alt={data?.featuredImage?.data?.attributes?.alternativeText}
          title={data?.featuredImage?.data?.attributes?.alternativeText}
        />
      </Link>
      <div className="content flex flex-col gap-2">
        <h3>{data?.title || data?.attributes?.title}</h3>
        <span className="categories">
          <span>categories :</span>
          {categoriesArr?.map((attr) => (
            <Link
              key={attr.attributes.name}
              className="badge"
              href={`/${parentSlug}/category/${attr.attributes.slug}`}
            >
              {attr.attributes.name}
            </Link>
          ))}
        </span>
        <div className="bottom flex gap-2">
          <span className="badge time">
            {data?.createdAt?.split("T")[0] ||
              data?.attributes?.createdAt?.split("T")[0]}
          </span>
          <Link className="readmore" href={pageLink}>
            read more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
