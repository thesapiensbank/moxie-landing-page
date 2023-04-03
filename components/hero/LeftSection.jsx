import React from "react";
import logo from "../../public/assets/logo/hero.svg";
import Primary from "../buttons/Primary";
import Secondary from "../buttons/Secondary";
import Image from "next/image";

const LeftSection = () => {
  return (
    <div className="flex flex-col space-y-5 w-5/6">
      <Image
        src={logo}
        alt=""
        className="lg:h-20 md:h-16 w-auto 2xl:-ml-44 xl:-ml-32 lg:-ml-28 md:-ml-14"
      />
      <h3 className="md:text-white text-primary xl:text-6xl lg:text-5xl md:text-4xl text-4xl md:text-start text-center">
        Trade without
      </h3>
      <h1 className="md:text-white text-primary xl:text-6xl lg:text-5xl md:text-4xl text-4xl md:text-start text-center uppercase font-bold">
        platform fees
      </h1>
      <p className="md:text-white text-primary lg:text-md md:text-sm md:text-start text-center">
        Moxie is an NFT marketplace built on Etherium. Create and trade
        NFTsinstantly with low network costs.{" "}
      </p>
      <div className="flex space-x-5 justify-center md:justify-start">
        <Secondary />
        <Primary />
      </div>
    </div>
  );
};

export default LeftSection;
