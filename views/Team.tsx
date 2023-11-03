/* eslint-disable @next/next/no-img-element */
import React from "react";
import { cn } from "@/lib/utils";
import { titilium } from "@/public/fonts";
import FrameOne from "@/public/assets/team/frame-1.svg";
import FrameTwo from "@/public/assets/team/frame-2.svg";
import FrameThree from "@/public/assets/team/frame-3.svg";
import FrameFour from "@/public/assets/team/frame-4.svg";

const Team = () => {
  return (
    <div id="team" className="flex justify-center items-center py-[5rem]">
      <div className="flex flex-col justify-center items-center grow max-w-[80rem] px-4 lg:px-0">
        <h2
          className={cn(
            titilium.className,
            "text-2xl sm:text-[3.815rem] leading-[4.875rem] text-white"
          )}
        >
          Meet the EventsX Team
        </h2>

        <div className="relative w-[1160px] h-[818px] hidden xl:block">
          <a
            href="https://www.linkedin.com/in/dash-manikkuwadura/"
            target="_blank"
          >
            <FrameOne className="absolute top-0 left-0 hover:brightness-125 duration-150" />
          </a>
          <a
            href="https://www.linkedin.com/in/shoaib-aslam-aca-fmaat-13055319/"
            target="_blank"
          >
            <FrameTwo className="absolute -top-[4.7%] right-0 hover:brightness-125 duration-150" />
          </a>

          <a
            href="https://www.linkedin.com/in/buddhika-perera/"
            target="_blank"
          >
            <FrameThree className="absolute bottom-0 left-0 hover:brightness-125 duration-150" />
          </a>

          <a
            href="https://www.linkedin.com/in/ashley-preen-8544661a1/"
            target="_blank"
          >
            <FrameFour className="absolute bottom-0 -right-[2%] hover:brightness-125 duration-150" />
          </a>
        </div>

        <div className="flex xl:hidden flex-wrap gap-8 justify-center items-center">
          <a
            href="https://www.linkedin.com/in/dash-manikkuwadura/"
            target="_blank"
          >
            <img
              src={"/assets/team/mobile-frame-1.png"}
              alt={"Darshana"}
              className="w-full max-w-[355px]"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/shoaib-aslam-aca-fmaat-13055319/"
            target="_blank"
          >
            <img
              src={"/assets/team/mobile-frame-2.png"}
              alt={"Shoaib"}
              className="w-full max-w-[355px]"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/buddhika-perera/"
            target="_blank"
          >
            <img
              src={"/assets/team/mobile-frame-3.png"}
              alt={"Buddhika"}
              className="w-full max-w-[355px]"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/ashley-preen-8544661a1/"
            target="_blank"
          >
            <img
              src={"/assets/team/mobile-frame-4.png"}
              alt={"Ashley"}
              className="w-full max-w-[355px]"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Team;
