import React, { useState } from "react";
import Title from "../title/Title";
import Image from "next/image";
import wallet from "../../public/assets/products/wallet.svg";
import exchange from "../../public/assets/products/exchange.svg";
import marketplace from "../../public/assets/products/marketplace.svg";

const Product = () => {
  const [selected, setSelected] = useState(0);
  const imageMap = {
    0: wallet,
    1: exchange,
    2: marketplace,
  };
  const handleSelect = (value) => {
    setSelected(value);
  };
  return (
    <div className="w-full h-max flex flex-col items-center space-y-10">
      <Title title="Products" />
      <div className="w-5/6 h-max bg-secondary rounded-xl flex p-9 xl:space-x-5 md:space-x-4">
        <Image
          src={imageMap[selected]}
          alt=""
          className="2xl:h-[388px] xl:h-[358px] lg:h-[328px] md:h-[238px] w-auto"
        />
        <div className="w-1/2 2xl:h-[388px] xl:h-[358px] lg:h-[328px] flex flex-col justify-center lg:space-y-10 space-y-6">
          <h1
            className={` ${
              selected === 0 ? "text-primary" : "strokeme"
            } xl:text-7xl lg:text-6xl md:text-4xl font-bold capitalize cursor-pointer`}
            onClick={() => {
              handleSelect(0);
            }}
          >
            wallet
          </h1>
          <h1
            className={` ${
              selected === 1 ? "text-primary" : "strokeme"
            } xl:text-7xl lg:text-6xl md:text-4xl font-bold capitalize cursor-pointer`}
            onClick={() => {
              handleSelect(1);
            }}
          >
            exchange
          </h1>
          <h1
            className={` ${
              selected === 2 ? "text-primary" : "strokeme"
            } xl:text-7xl lg:text-6xl md:text-4xl font-bold capitalize cursor-pointer`}
            onClick={() => {
              handleSelect(2);
            }}
          >
            marketplace
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Product;
