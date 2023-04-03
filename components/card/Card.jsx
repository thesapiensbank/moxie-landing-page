import Image from "next/image";
import React from "react";

const Card = ({ title, description, image }) => {
  return (
    <div className="w-max h-max relative">
      <div className="2xl:w-72 2xl:h-52 xl:h-48 xl:w-64 lg:h-44 lg:w-60 md:h-40 md:w-56 bg-secondary flex flex-col justify-center items-center p-6 space-y-2 rounded-xl">
        <h3 className="2xl:text-2xl xl:text-xl text-black font-semibold capitalize">
          {title}
        </h3>
        <p className="2xl:text-sm text-xs">{description}</p>
      </div>
      <Image
        src={image}
        alt=""
        className="lg:h-32 md:h-28 w-auto absolute lg:-top-20 md:-top-20  left-1/2 -translate-x-1/2"
      />
    </div>
  );
};

export default Card;
