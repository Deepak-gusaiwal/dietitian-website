"use client";
import { toggleMenu } from "@/app/redux/features/baseSlice";
import React from "react";
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";

const NavToggler = () => {
  const dispatch = useDispatch();
  const { isNavOpen } = useSelector((state) => state.base);
  const toggleMenuSidebar = () => {
    dispatch(toggleMenu(!isNavOpen));
  };
  return (
    <div
      onClick={toggleMenuSidebar}
      className="navToggler md:hidden flex justify-center items-center bg-primary-500 hover:bg-primary-600 cursor-pointer p-1 rounded shadow-sm text-white"
    >
      {isNavOpen ? <IoClose /> : <FaBars />}
    </div>
  );
};

export default NavToggler;
