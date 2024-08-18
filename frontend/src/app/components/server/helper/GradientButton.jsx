import Link from "next/link";
import React from "react";

import { MdOutlineArrowRightAlt } from "react-icons/md";

const GradientButton = ({ href, className = "", children }) => {
  return href ? (
    <Link
      href={href}
      className={`gradientButton rounded-md rounded-r-full flex justify-center items-center text-center gap-2  p-2 shadow-md font-semibold uppercase ${className}`}
    >
      {children} <MdOutlineArrowRightAlt />
    </Link>
  ) : (
    <button
      className={`gradientButton rounded-md rounded-r-full flex justify-center items-center text-center gap-2  p-2 shadow-md font-semibold uppercase ${className}`}
    >
      {children} <MdOutlineArrowRightAlt />
    </button>
  );
};

export default GradientButton;
