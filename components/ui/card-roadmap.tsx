import React from "react";
import { cn } from "@/lib/utils";
import { titilium } from "@/public/fonts";
import CheckIcon from "../CheckIcon";

interface ICardRoadmapDetails {
  title: any;
  color: string;
  className: string;
}

const CardRoadmap = ({ title, color, className }: ICardRoadmapDetails) => {
  return (
    <div
      className={`p-4 gap-4 flex flex-col w-full ${className} bg-transparent rounded-2xl`}
    >
      <div className="flex flex-row items-start gap-4">
        <CheckIcon color={color} className={"max-w-[20px] w-full"} />
        <h1 className={cn(titilium.className, "text-base text-alice-white")}>
          {title}
        </h1>
      </div>
    </div>
  );
};

export default CardRoadmap;
