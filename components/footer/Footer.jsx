import Image from "next/image";
import React from "react";
import logo from "../../public/assets/logo/footer.svg";
import Wave from "react-wavify";

const Footer = () => {
  return (
    <>
      <Wave
        fill="#ffce00"
        paused={false}
        className="-mb-2"
        options={{
          height: 50,
          amplitude: 15,
          speed: 0.35,
          points: 4,
        }}
      />
      <div className="flex flex-col items-center justify-between w-full p-12 bg-[#ffce00] md:flex-row lg:px-20 md:px-10">
        <Image
          src={logo}
          alt=""
          className="w-auto h-20 2xl:h-28 xl:h-24 lg:h-20 md:h-20 saturate-200 fill-white stroke-none"
        />
        <ul className="flex flex-col items-center space-x-4 font-semibold text-white md:flex-row w-max xl:text-lg lg:text-base lg:space-x-7 md:space-y-0">
          <li className="p-3 cursor-pointer hover:bg-white hover:text-primary">
            Contact Us
          </li>
          <li className="p-3 cursor-pointer hover:bg-white hover:text-primary">
            Privacy Policy
          </li>
          <li className="p-3 cursor-pointer hover:bg-white hover:text-primary">
            Terms of service
          </li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
