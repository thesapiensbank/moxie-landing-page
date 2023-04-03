import Image from "next/image";
import React from "react";
import logo from "../../public/assets/logo/footer.svg";

const Footer = () => {
  return (
    <div className="bg-primary w-full 2xl:h-32 xl:h-28 lg:h-24 flex md:flex-row flex-col justify-between items-center lg:px-20 md:px-10 p-5">
      <Image
        src={logo}
        alt=""
        className="2xl:h-28 xl:h-24 lg:h-20 md:h-20 h-20 w-auto"
      />
      <ul className="flex md:flex-row flex-col w-max xl:text-lg lg:text-base text-white lg:space-x-7 space-x-4 items-center space-y-2 md:space-y-0">
        <li>Contact Us</li>
        <li>Privacy Policy</li>
        <li>Terms of service</li>
        <li>Cookie Policy</li>
      </ul>
    </div>
  );
};

export default Footer;
