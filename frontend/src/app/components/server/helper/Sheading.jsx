import React from "react";

const Sheading = ({
  className = "",
  heading,
  smallHeading,
  content,
  variant,
}) => {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {heading && (
        <h2
          className={`uppercase font-bold text-[clamp(2.5rem,5vw,5rem)] leading-none ${
            variant && !variant?.heading
              ? "text-secondary-200"
              : variant?.heading
              ? variant?.heading
              : "text-primary-100"
          }`}
        >
          {heading}
        </h2>
      )}
      {smallHeading && (
        <h2
          className={`capitalize font-bold text-[clamp(1.2rem,2vw,2rem)] leading-none ${
            variant?.smallHeading ? variant?.smallHeading : "text-primary-400"
          }`}
        >
          {smallHeading}
        </h2>
      )}
      {content && <p>{content}</p>}
    </div>
  );
};

export default Sheading;
