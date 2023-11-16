import React from "react";
import { cn } from "@/lib/utils";
import { titilium } from "@/public/fonts";
interface ITokenomicsCard {
  title: string;
  subTitle: string;
}
const TokenomicsCard = ({ title, subTitle }: ITokenomicsCard) => {
  return (
    <div className="flex flex-col">
      <h1
        className={
          (cn(titilium.className),
          "text-alice-white/50 font-normal text0.64rem]")
        }
      >
        {title}
      </h1>
      <h1
        className={
          (cn(titilium.className), "text-alice-white font-normal text0.64rem]")
        }
      >
        {subTitle}
      </h1>
    </div>
  );
};

export default TokenomicsCard;
