/* eslint-disable @next/next/no-img-element */
import React from "react";
import { cn } from "@/lib/utils";
import { titilium } from "@/public/fonts";
import FrameOne from "@/public/assets/team/frame-1.svg";
import FrameTwo from "@/public/assets/team/frame-2.svg";
import FrameThree from "@/public/assets/team/frame-3.svg";
import FrameFour from "@/public/assets/team/frame-4.svg";
import Image from "next/image";

const Team = () => {
  return (
    <div id="team" className="flex justify-center items-center py-[5rem]">
      <div className="flex flex-col justify-center items-center grow max-w-[80rem] px-4 lg:px-0 gap-8">
        <h2
          className={cn(
            titilium.className,
            "text-2xl sm:text-[3.815rem] leading-[4.875rem] text-white"
          )}
        >
          Meet the EventsX Team
        </h2>

        <div className="relative w-[1160px] h-[818px] hidden xl:block">
          <FrameOne className="absolute top-0 left-0" />
          <a
            href="https://www.linkedin.com/in/dash-manikkuwadura/"
            target="_blank"
            className={cn(
              titilium.className,
              "flex items-center gap-1 z-[2]",
              "absolute top-[45%] left-[40%] transform -translate-x-[40%] -translate-y-[45%] group opacity-50 hover:opacity-100 duration-150"
            )}
          >
            <Image
              src={"/assets/team/linkedin-icon.png"}
              alt={"LinkedIn"}
              height={18.75}
              width={18.75}
            />{" "}
            LinkedIn
            <Image
              src={"/assets/team/arrow-right.png"}
              alt={"LinkedIn"}
              height={18.75}
              width={18.75}
              className="ml-1 group-hover:ml-3 duration-300"
            />{" "}
          </a>
          <FrameTwo className="absolute -top-[4.7%] right-0  duration-150" />
          <a
            href="https://www.linkedin.com/in/shoaib-aslam-aca-fmaat-13055319/"
            target="_blank"
            className={cn(
              titilium.className,
              "flex items-center gap-1 z-[2]",
              "absolute top-[50%] right-[2%] transform -translate-x-[2%] -translate-y-[50%] group opacity-50 hover:opacity-100 duration-150"
            )}
          >
            <Image
              src={"/assets/team/linkedin-icon.png"}
              alt={"LinkedIn"}
              height={18.75}
              width={18.75}
            />{" "}
            LinkedIn
            <Image
              src={"/assets/team/arrow-right.png"}
              alt={"LinkedIn"}
              height={18.75}
              width={18.75}
              className="ml-1 group-hover:ml-3 duration-300"
            />{" "}
          </a>
          <FrameThree className="absolute bottom-0 left-0  duration-150" />
          <a
            href="https://www.linkedin.com/in/buddhika-perera/"
            target="_blank"
            className={cn(
              titilium.className,
              "flex items-center gap-1 z-[2]",
              "absolute bottom-[5%] left-[45%] transform -translate-x-[45%] -translate-y-[5%] group opacity-50 hover:opacity-100 duration-150"
            )}
          >
            <Image
              src={"/assets/team/linkedin-icon.png"}
              alt={"LinkedIn"}
              height={18.75}
              width={18.75}
            />{" "}
            LinkedIn
            <Image
              src={"/assets/team/arrow-right.png"}
              alt={"LinkedIn"}
              height={18.75}
              width={18.75}
              className="ml-1 group-hover:ml-3 duration-300"
            />{" "}
          </a>
          <FrameFour className="absolute bottom-0 -right-[2%]  duration-150" />
          <a
            href="https://www.linkedin.com/in/ashley-preen-8544661a1/"
            target="_blank"
            className={cn(
              titilium.className,
              "flex items-center gap-1 z-[2]",
              "absolute bottom-[5%] right-[2%] transform -translate-x-[2%] -translate-y-[5%] group opacity-50 hover:opacity-100 duration-150"
            )}
          >
            <Image
              src={"/assets/team/linkedin-icon.png"}
              alt={"LinkedIn"}
              height={18.75}
              width={18.75}
            />{" "}
            LinkedIn
            <Image
              src={"/assets/team/arrow-right.png"}
              alt={"LinkedIn"}
              height={18.75}
              width={18.75}
              className="ml-1 group-hover:ml-3 duration-300"
            />{" "}
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
