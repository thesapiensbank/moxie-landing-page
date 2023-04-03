import React from "react";
import Title from "../title/Title";
import Card from "../card/Card";
import easyConnect from "../../public/assets/usp/easyConnect.svg";
import superFast from "../../public/assets/usp/superFast.svg";
import lowFees from "../../public/assets/usp/lowFees.svg";
import zero from "../../public/assets/usp/zero.svg";

const Why = () => {
  return (
    <div className="w-full h-max flex flex-col items-center space-y-32 pb-32">
      <Title title="Why Moxie" />
      <div className="xl:w-5/6 lg:w-11/12 grid lg:grid-cols-4 grid-cols-2 justify-center xl:gap-6 lg:gap-7 md:gap-x-10 md:gap-y-24 gap-y-20 gap-x-2 place-items-center ">
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
