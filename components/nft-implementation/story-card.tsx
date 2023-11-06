import { cn } from "@/lib/utils";
import { titilium } from "@/public/fonts";
import { StoryCardContent } from "@/types";
import Image from "next/image";
import React from "react";

interface StoryCardProps {
  card: StoryCardContent;
}

const StoryCard: React.FC<StoryCardProps> = ({ card }) => {
  return (
    <div className="flex p-8 flex-col gap-4 bg-alice-white/[.04] rounded-lg max-w-[320px] relative h-[350px]">
      <Image
        src={card.image}
        width={325}
        height={211}
        alt=""
        className="-translate-y-20 w-full"
      />

      <div className="-translate-y-20">
        <div className="">
          <h3
            className={cn(
              titilium.className,
              "text-alice-white/80 text-center text-xl font-bold leading-[1.875rem]"
            )}
          >
            {card.title}
          </h3>

          <ul className="flex flex-col gap-3">
            {card.descriptions.map((description) => (
              <li
                key={description}
                className={cn(
                  titilium.className,
                  " titilium.className, text-alice-white/[.72] leading-5 list-disc list-inside list-item"
                )}
              >
                {description}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StoryCard;
