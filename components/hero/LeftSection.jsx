import React from "react";
import logo from "../../public/assets/logo/hero.svg";
import Primary from "../buttons/Primary";
import Secondary from "../buttons/Secondary";
import Image from "next/image";

const LeftSection = () => {
  return (
    <div className="flex flex-col w-5/6 p-12 mt-16 space-y-5 border bg-primary/20 h-max border-primary">
      <h3 className="text-4xl text-left text-primary md:text-primary xl:text-6xl lg:text-5xl md:text-4xl">
        Your last resort for
      </h3>
      <h1 className="text-4xl font-bold text-left uppercase text-primary md:text-primary xl:text-6xl lg:text-5xl md:text-4xl">
        crypto needs
      </h1>
      <p className="text-left text-black/50 md:text-black/50 lg:text-md md:text-sm">
        Moxie is an ecosystem of Multichain products ranging from Marketplace,
        DEX & Web3 Wallet
      </p>
    </div>
  );
};

export default LeftSection;
