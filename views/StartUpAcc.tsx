/* eslint-disable @next/next/no-img-element */
import React from "react";
import { titilium } from "@/public/fonts";
import { cn } from "@/lib/utils";
import Facebook from "@/public/socmed-icons/facebook.svg";
import Instagram from "@/public/socmed-icons/instragram.svg";
import Twitter from "@/public/socmed-icons/twitter.svg";
import LinkedIn from "@/public/socmed-icons/linkedin.svg";
import Youtube from "@/public/socmed-icons/youtube.svg";
import Discord from "@/public/socmed-icons/discord.svg";
import Telegram from "@/public/socmed-icons/telegram.svg";

const socmed = [
  {
    icon: <Facebook />,
    linkUrl: "https://www.facebook.com/EventsXofficial",
  },
  {
    icon: <Instagram />,
    linkUrl: "https://www.instagram.com/eventsxofficial/",
  },
  {
    icon: <Twitter />,
    linkUrl: "https://twitter.com/EventsXofficial",
  },
  {
    icon: <LinkedIn />,
    linkUrl: "https://www.linkedin.com/company/eventsx-limited/",
  },
  {
    icon: <Youtube />,
    linkUrl:
      "https://www.youtube.com/channel/UCSNR8VUdUKcI9MMrwSSNT4g/featured",
  },
  {
    icon: <Discord />,
    linkUrl: "https://discord.gg/PrjTcZbY3z",
  },
  {
    icon: <Telegram />,
    linkUrl: "https://t.me/EventsX_Official",
  },
];

const startupaccelerator = [
  {
    name: "aws",
    image: "/assets/footer-icons/aws-activate.jpg",
    // linkUrl: "https://www.nvidia.com/en-gb/startups/",
  },
  {
    name: "startup",
    image: "/assets/footer-icons/startup.jpg",
    // linkUrl: "https://aws.amazon.com/startups",
  },
];

const poweredby = [
  {
    name: "bnb",
    image: "/assets/footer-icons/bitcoin.jpg",
    // linkUrl: "https://www.nvidia.com/en-gb/startups/",
  },
  {
    name: "bitcoin",
    image: "/assets/footer-icons/bnb.jpg",
    // linkUrl: "https://aws.amazon.com/startups",
  },
];

const StartUpAcc = () => {
  return (
    <div className="flex justify-center items-center bg-footer py-2 my-2 relative">
      <div className="flex justify-center items-center bg-footer py-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-2xl h-full w-full -z-[1]">
        asd
      </div>

      <div className="flex justify-center items-center grow bg-[#ffffff]">
        <div className="flex flex-wrap justify-center gap-8 items-center py-8 px-4 xl:px-0 grow max-w-[90rem]">
          <div className="flex flex-col gap-1 justify-center items-center">
            <h1
              className={cn(
                titilium.className,
                "text-blue-black/50 text-base font-semibold"
              )}
            >
              Startup accelerator programs
            </h1>

            <div className="flex flex-wrap justify-center items-center gap-4">
              {startupaccelerator.map((data, index) => {
                return (
                  <img
                    key={index}
                    src={data.image}
                    alt={data.name}
                    className="w-full max-w-[200px]"
                  />
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-1 justify-center items-center">
            <h1
              className={cn(
                titilium.className,
                "text-blue-black/50 text-base font-semibold"
              )}
            >
              Powered by
            </h1>

            <div className="flex flex-wrap justify-center items-center gap-4">
              {poweredby.map((data, index) => {
                return (
                  <img
                    key={index}
                    src={data.image}
                    alt={data.name}
                    className="w-full max-w-[200px]"
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartUpAcc;
