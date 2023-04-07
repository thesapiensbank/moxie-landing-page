import Image from "next/image";
import React from "react";
import logo from "../../public/assets/logo/footer.svg";

const Navbar = () => {
  return (
    <div className="bg-primary md:px-32 navbar">
      <div className="navbar-start">
        {/* <a className="text-xl normal-case btn btn-ghost">Moxie</a> */}
        <Image src={logo} alt="" className="w-auto h-12" />
      </div>

      <div className="flex navbar-end gap-x-4">
        <a
          href="https://moxieswap.com/"
          target={"_blank"}
          className="bg-white border-0 border-white btn btn-white text-primary hover:bg-white/20 hover:border hover:border-white hover:text-white"
        >
          DEX
        </a>
        <a
          href="https://moxieswapnftmarketplace.netlify.app/"
          target={"_blank"}
          className="bg-white border-0 border-white btn btn-white text-primary hover:bg-white/20 hover:border hover:border-white hover:text-white"
        >
          Marketplace
        </a>
      </div>
    </div>
  );
};

export default Navbar;
