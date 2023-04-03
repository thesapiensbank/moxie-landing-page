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
        className="w-full lg:h-screen md:h-[30rem] h-[20rem] flex lg:pt-28 md:pt-16 lg:px-20 md:px-10"
        ref={myRef}
      >
        <div className="w-1/2 md:flex justify-center hidden">
          <LeftSection />
        </div>
      </div>
      <div className="w-full flex justify-center md:hidden">
        <LeftSection />
      </div>
    </>
  );
};

export default Hero;
