"use client";
import React from "react";
import { useSelector } from "react-redux";

const NavMenuWrapper = ({ className = "", children }) => {
  const { isNavOpen } = useSelector((state) => state.base);

  return (
    <>
      <ul className={`${className} ${isNavOpen && "active"}`}>{children}</ul>
    </>
  );
};

export default NavMenuWrapper;
