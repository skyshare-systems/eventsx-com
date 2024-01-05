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
    image: "/assets/nft-implementation/start-up.png",
    // linkUrl: "https://www.nvidia.com/en-gb/startups/",
  },
  {
    name: "aws",
    image: "/assets/nft-implementation/aws.png",
    // linkUrl: "https://www.nvidia.com/en-gb/startups/",
  },
  {
    name: "startup",
    image: "/assets/nft-implementation/nvidia.png",
    // linkUrl: "https://aws.amazon.com/startups",
  },
];

const poweredby = [
  {
    name: "bitcoin",
    image: "/assets/nft-implementation/bitcoin.png",
    // linkUrl: "https://www.nvidia.com/en-gb/startups/",
  },
  {
    name: "bnb",
    image: "/assets/nft-implementation/bnb.png",
    // linkUrl: "https://aws.amazon.com/startups",
  },
];

const StartUpAcc = () => {
  return (
    <div className="flex justify-center items-center py-2 mt-2 mb-32 relative">
      <div className="flex flex-col justify-center gap-8 items-center py-8 px-4 xl:px-0 grow max-w-[90rem]">
        <div className="flex flex-col gap-4 justify-center items-center">
          <h1
            className={cn(
              titilium.className,
              "text-alice-white/30 text-xl font-bold"
            )}
          >
            Startup accelerator programs
          </h1>

          <div className="flex flex-wrap justify-center items-center gap-12">
            {startupaccelerator.map((data, index) => {
              return <img key={index} src={data.image} alt={data.name} />;
            })}
          </div>
        </div>
        <div className="flex flex-col gap-4 justify-center items-center">
          <h1
            className={cn(
              titilium.className,
              "text-alice-white/30 text-xl font-bold"
            )}
          >
            Powered by
          </h1>

          <div className="flex flex-wrap justify-center items-center gap-12">
            {poweredby.map((data, index) => {
              return <img key={index} src={data.image} alt={data.name} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartUpAcc;
