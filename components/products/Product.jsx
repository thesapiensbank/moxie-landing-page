import React, { useState, useEffect } from "react";
import Title from "../title/Title";
import Image from "next/image";
import exchange from "../../public/assets/products/macbook.webp";
import wallet from "../../public/assets/products/dex.webp";
import marketplace from "../../public/assets/products/macbook-marketplace.webp";

const Product = () => {
  const [selected, setSelected] = useState(0);
  const imageMap = {
    0: exchange,
    1: marketplace,
    2: wallet,
  };

  const textMap = {
    0: "Introducing our decentralized exchange (DEX) - a revolutionary platform that enables you to trade cryptocurrencies without the need for intermediaries. With our DEX, you'll experience faster transaction times and increased security, all while maintaining control of your assets. Say goodbye to the limitations of traditional exchanges and join the future of trading with our cutting-edge DEX.",
    1: "Welcome to our NFT marketplace, where you can discover, buy, and sell unique digital assets that are one-of-a-kind. From art and music to virtual real estate and more, our platform provides a secure and transparent way for creators to monetize their work and for collectors to build their digital collections. Join the vibrant community of NFT enthusiasts and unlock the potential of blockchain technology with our user-friendly marketplace.",
    2: "Our crypto wallet app is the ultimate solution for managing your digital assets on-the-go. With our user-friendly interface, you can securely store, send, and receive a wide range of cryptocurrencies, all in one place. Our advanced security features provide peace of mind, while our intuitive design makes managing your portfolio effortless. Whether you're a seasoned trader or a beginner, our crypto wallet app is the perfect tool for managing your digital wealth. Download now and join the millions of users who trust us to safeguard their assets.",
  };

  const titleMap = {
    0: "Moxie Swap",
    1: "Moxie Marketplace",
    2: "Moxie Wallet",
  };
  const handleSelect = (value) => {
    setSelected(value);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSelected((prevNumber) => {
        if (prevNumber === 2) {
          return 0;
        } else {
          return prevNumber + 1;
        }
      });
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full space-y-10 h-max">
      <div className="relative flex flex-col-reverse items-center justify-center gap-6">
        <div className="absolute w-24 h-24 rounded-full bg-primary/60 top-24 right-36"></div>
        <div className="absolute hidden rounded-full w-36 h-36 bg-primary bottom-24 left-36 lg:block"></div>
        <div className="absolute w-12 h-12 rounded-full bg-primary top-12 right-48"></div>
        <div className="absolute w-12 h-12 rounded-full bg-primary top-20 right-60"></div>

        <div className="flex flex-col items-center w-5/6 p-2 pb-12 border lg:flex-row rounded-xl bg-primary/5 border-primary/80 ">
          <Image
            src={imageMap[2]}
            alt=""
            className="items-center justify-center w-full max-w-lg pt-12 drop-shadow h-2/3"
          />
          <p className="z-20 px-4 text-justify md:px-12 text-black/60">
            <span className="text-4xl font-bold text-primary ">
              {titleMap[2]}
            </span>
            <br></br>
            {textMap[2]}
            <br></br> <br></br>
            {
              <a
                href="https://moxieswap.com/"
                target={"_blank"}
                className="btn btn-primary"
              >
                Download Wallet
              </a>
            }
          </p>
        </div>
        <div className="flex flex-col items-center w-5/6 p-2 pb-12 border lg:flex-row rounded-xl bg-primary/5 border-primary/80 ">
          <Image
            src={imageMap[1]}
            alt=""
            className="items-center justify-center w-full max-w-lg pt-12 drop-shadow h-2/3"
          />
          <p className="z-20 px-4 text-justify md:px-12 text-black/60">
            <span className="text-4xl font-bold text-primary ">
              {titleMap[1]}
            </span>
            <br></br>
            {textMap[1]}
            <br></br> <br></br>
            <a
              target={"_blank"}
              href="https://moxieswapnftmarketplace.netlify.app/explore"
              className="btn btn-primary"
            >
              Visit Marketplace
            </a>
          </p>
        </div>
        <div className="flex flex-col items-center w-5/6 p-2 pb-12 border lg:flex-row rounded-xl bg-primary/5 border-primary/80 ">
          <Image
            src={imageMap[0]}
            alt=""
            className="items-center justify-center w-full max-w-lg pt-12 drop-shadow h-2/3"
          />
          <p className="z-20 px-4 text-justify md:px-12 text-black/60">
            <span className="text-4xl font-bold text-primary ">
              {titleMap[0]}
            </span>
            <br></br>
            {textMap[0]}
            <br></br> <br></br>
            {
              <a
                target={"_blank"}
                href="https://moxieswap.com/"
                className="btn btn-primary"
              >
                Visit Moxie Swap
              </a>
            }
          </p>
        </div>
        <div className="flex items-center hidden gap-x-4">
          <div
            className={` ${
              selected === 0
                ? "text-primary shadow-primary drop-shadow-md scale-105"
                : "text-base-100/30"
            } xl:text-5xl lg:text-4xl md:text-2xl text-lg font-bold capitalize cursor-pointer stroke-primary transition-all duration-150`}
            onClick={() => {
              handleSelect(0);
            }}
          >
            DEX
          </div>
          <div className="w-2 h-2 rounded-full bg-primary"></div>
          <div
            className={` ${
              selected === 1
                ? "text-primary shadow-primary drop-shadow-md scale-105"
                : "text-base-100/30"
            } xl:text-5xl lg:text-4xl md:text-2xl text-lg font-bold capitalize cursor-pointer stroke-primary transition-all duration-150 `}
            onClick={() => {
              handleSelect(1);
            }}
          >
            Marketplace
          </div>{" "}
          <div className="w-2 h-2 rounded-full bg-primary"></div>
          <div
            className={` ${
              selected === 2
                ? "text-primary shadow-primary drop-shadow-md scale-105"
                : "text-base-100/30"
            } xl:text-5xl lg:text-4xl md:text-2xl text-lg font-bold capitalize cursor-pointer stroke-primary transition-all duration-150`}
            onClick={() => {
              handleSelect(2);
            }}
          >
            Wallet
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
