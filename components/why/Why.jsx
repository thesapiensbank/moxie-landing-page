import React from "react";
import Title from "../title/Title";
import Card from "../card/Card";
import easyConnect from "../../public/assets/usp/easyConnect.svg";
import superFast from "../../public/assets/usp/superFast.svg";
import lowFees from "../../public/assets/usp/lowFees.svg";
import zero from "../../public/assets/usp/zero.svg";
import logo from "../../public/assets/logo/moxie-logo-round.png";
import Image from "next/image";

const Why = () => {
  return (
    <div className="flex flex-col items-center w-full pb-32 space-y-12 h-max">
      <div className="flex flex-col items-center w-full pb-32 space-y-12 h-max">
        <Title title={"MOXIE Token"} />
        <div className="p-4 transition-all bg-yellow-500 border-8 rounded-full duration-400 w-max h-max drop-shadow-md hover:scale-105">
          <Image src={logo} className=" w-52 h-52" />
        </div>
        <div className="px-8 md:px-32 text-black/60">
          Our governance token is an integral part of our decentralized exchange
          (DEX) platform, empowering our community of users to have a say in the
          decision-making process. As a token holder, you'll have the power to
          vote on key issues such as fee structures, new listings, and major
          platform updates. Our governance token represents a significant
          opportunity for you to actively participate in shaping the future of
          our DEX and have a direct impact on its success. Join us in building a
          more transparent and democratic trading environment with our powerful
          governance token.
        </div>
      </div>
      <Title title="Why Moxie" />
      <br></br>
      <div className="grid justify-center grid-cols-2 xl:w-5/6 lg:w-11/12 lg:grid-cols-4 xl:gap-6 lg:gap-7 md:gap-x-10 md:gap-y-24 gap-y-20 gap-x-2 place-items-center ">
        <Card
          title="Easy Connect"
          description="Using Metamask or CoinBase Wallet. Just click Connect Wallet' on the top right to start."
          image={easyConnect}
        />
        <Card
          title="Super fast"
          description="Since Moxie runs on the Ehterium Opera Network, transactions are usually confirmed within 1-2 seconds."
          image={superFast}
        />
        <Card
          title="Low Transaction Fees
"
          description="Transactions are usually just a few cents, allowing users to create and trade many NFTs without prohibitively high network fees."
          image={lowFees}
        />
        <Card
          title="Zero Platform Fees
"
          description="Trade NFTs via auction or direct offer without any fees taken by Moxie."
          image={zero}
        />
      </div>
    </div>
  );
};

export default Why;
