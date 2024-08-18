import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = ({className=""}) => {
  return (
    <Link className={`flex imgBox h-auto ${className}`} href="/">
      <Image
        src="/logo.webp"
        width={500}
        height={500}
        alt="logo"
      />
    </Link>
  );
};

export default Logo;
