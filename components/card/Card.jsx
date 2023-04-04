import Image from "next/image";
import React from "react";

const Card = ({ title, description, image }) => {
  return (
    <div className="relative w-max h-max">
      <div className="flex flex-col items-center justify-center h-40 p-3 space-y-2 border border-base-100/160 backdrop-blur-md 2xl:w-72 2xl:h-52 xl:h-48 xl:w-64 lg:h-44 lg:w-60 md:h-40 md:w-56 w-44 bg-secondary/20 md:p-6 rounded-xl">
        <h3 className="text-sm font-semibold text-black capitalize 2xl:text-2xl xl:text-xl md:text-base">
          {title}
        </h3>
        <p className="text-xs 2xl:text-sm text-black/60">{description}</p>
      </div>
      <Image
        src={image}
        alt=""
        className="absolute w-auto h-24 -translate-x-1/2 lg:h-32 md:h-28 md:-top-20 -top-16 left-1/2"
      />
    </div>
  );
};

export default Card;
