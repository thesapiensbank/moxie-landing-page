import Image from "next/image";
import React from "react";
import Title from "../title/Title";

function Intro() {
  return (
    <div className="flex flex-col items-center w-full space-y-10 h-max">
      <div className="flex flex-col w-5/6 gap-3 p-5 bg-white h-max rounded-xl">
        <h1 className="text-5xl font-bold text-primary">What is Moxie?</h1>
        <p className="text-black/60">
          Introducing Moxie a revolutionary decentralized exchange (DEX)
          platform that offers seamless trading experience for cryptocurrencies
          and NFTs.
          <br></br>Along with the DEX, it also features an NFT marketplace for
          artists and collectors to showcase, sell and buy unique digital
          assets.
          <br></br>To complete the ecosystem, the platform offers a secure
          crypto wallet that enables users to manage their funds with ease.
          <br></br>
          <br></br>Join the future of crypto with our all-in-one platform.
        </p>
      </div>
    </div>
  );
}

export default Intro;
