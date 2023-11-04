import { titilium } from "@/public/fonts";
import React from "react";
import { cn } from "@/lib/utils";

interface IFooterData {
  title: string;
  object: any;
}

const FooterCard = ({ title, object }: IFooterData) => {
  return (
    <div className="flex flex-col gap-5">
      <h1
        className={cn(
          titilium.className,
          "text-base font-semibold text-alice-white"
        )}
      >
        {title}
      </h1>
      <div className="flex flex-col gap-4">
        {object.map((data: any, index: any) => {
          return (
            <a
              key={index}
              href={data.linkUrl}
              className={cn(
                titilium.className,
                "text-base font-semibold text-alice-white/70 cursor-pointer hover:opacity-50 duration-150 flex items-center gap-[10px]"
              )}
            >
              {data.name}
              {data.name === "Status" && (
                <div className="rounded-full bg-[#18D718] py-1 px-2 animate-pulse">
                  <p
                    className={cn(
                      titilium.className,
                      "text-base font-normal text-alice-white/70 uppercase"
                    )}
                  >
                    Live
                  </p>
                </div>
              )}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default FooterCard;
