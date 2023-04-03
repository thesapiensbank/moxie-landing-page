import Image from "next/image";
import React from "react";

const Card = ({ title, description, image }) => {
  return (
    <div className="w-max h-max relative">
      <div className="2xl:w-72 2xl:h-52 xl:h-48 xl:w-64 lg:h-44 lg:w-60 md:h-40 md:w-56 h-40 w-44 bg-secondary flex flex-col justify-center items-center md:p-6 p-3 space-y-2 rounded-xl">
        <h3 className="2xl:text-2xl xl:text-xl md:text-base text-sm  text-black font-semibold capitalize">
          {title}
        </h3>
        <p className="2xl:text-sm text-xs">{description}</p>
      </div>
      <Image
        src={image}
        alt=""
        className="lg:h-32 md:h-28 h-24 w-auto absolute md:-top-20 -top-16  left-1/2 -translate-x-1/2"
      />
    </div>
  );
};

export default Card;
