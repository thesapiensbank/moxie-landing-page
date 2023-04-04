import React from "react";
import logo from "../../public/assets/logo/hero.svg";
import Primary from "../buttons/Primary";
import Secondary from "../buttons/Secondary";
import Image from "next/image";

const LeftSection = () => {
  return (
    <div className="flex flex-col items-center justify-center w-5/6 space-y-5">
      <h3 className="text-4xl text-center text-white md:text-white xl:text-6xl lg:text-5xl md:text-4xl">
        Your last resort for
      </h3>
      <h1 className="text-4xl font-bold text-center text-white uppercase md:text-white xl:text-6xl lg:text-5xl md:text-4xl">
        crypto needs
      </h1>
      <p className="text-center text-white md:text-white lg:text-md md:text-sm">
        Moxie is an ecosystem of Multichain products ranging from Marketplace,
        DEX & Web3 Wallet
      </p>
      <div className="flex justify-center space-x-5 md:justify-start">
        <a className="btn btn-secondary">Explore</a>
      </div>
    </div>
  );
};

export default LeftSection;
