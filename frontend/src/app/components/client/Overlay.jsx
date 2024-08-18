"use client";
import React from "react";
import { closeOverlay } from "@/app/redux/features/baseSlice";
import { useDispatch, useSelector } from "react-redux";

const Overlay = () => {
  const dispatch = useDispatch();
  const { isOvelayOpen } = useSelector((state) => state.base);
  const handleOverlayClick = () => {
    dispatch(closeOverlay());
  };
  if (!isOvelayOpen) return;
  return (
    <div
      onClick={handleOverlayClick}
      className="overlay w-full h-full bg-zinc-800 bg-opacity-80 fixed top-0 left-0 z-[98]"
    ></div>
  );
};

export default Overlay;
