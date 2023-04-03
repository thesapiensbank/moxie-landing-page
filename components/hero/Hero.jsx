import React from "react";
import logo from "../../public/assets/logo/hero.svg";
import Primary from "../buttons/Primary";
import Secondary from "../buttons/Secondary";
import { useState, useRef, useEffect } from "react";
import GLOBE from "vanta/dist/vanta.globe.min";
import * as THREE from "three";
import Image from "next/image";

const Hero = () => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        GLOBE({
          el: myRef.current,
          color: "#FBCA1E",
          backgroundColor: "#000",
          color2: "#fff",
          THREE,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <div
      className="w-full lg:h-screen md:h-[30rem] flex lg:pt-28 md:pt-16 lg:px-20 md:px-10"
      ref={myRef}
    >
      <div className="w-1/2 flex justify-center">
        <div className="flex flex-col space-y-5 w-5/6">
          <Image
            src={logo}
            alt=""
            className="lg:h-20 md:h-16 w-auto 2xl:-ml-44 xl:-ml-32 lg:-ml-28 md:-ml-14"
          />
          <h3 className="text-primary xl:text-6xl lg:text-5xl md:text-4xl">
            Trade without
          </h3>
          <h1 className="text-primary xl:text-6xl lg:text-5xl md:text-4xl uppercase font-bold">
            platform fees
          </h1>
          <p className="text-primary lg:text-md md:text-sm">
            Moxie is an NFT marketplace built on Etherium. Create and trade
            NFTsinstantly with low network costs.{" "}
          </p>
          <div className="flex space-x-5">
            <Secondary />
            <Primary />
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Hero;
