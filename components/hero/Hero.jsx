import React from "react";
import { useState, useRef, useEffect } from "react";
import GLOBE from "vanta/dist/vanta.globe.min";
import * as THREE from "three";
import LeftSection from "./LeftSection";

const Hero = () => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        GLOBE({
          el: myRef.current,
          color: "#fff",
          backgroundColor: "#FBCA1E",
          color2: "#000",
          THREE,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <>
      <div
        className="w-full lg:h-screen md:h-[30rem] h-screen flex lg:pt-28 md:pt-16 lg:px-20 md:px-10 hero-overlay"
        ref={myRef}
      >
        <div className="flex justify-center text-white">
          <LeftSection />
        </div>
      </div>
      {/* <div className="flex justify-center w-full md:hidden">
        <LeftSection />
      </div> */}
    </>
  );
};

export default Hero;
