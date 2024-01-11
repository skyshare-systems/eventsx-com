/* eslint-disable @next/next/no-img-element */
import React from "react";
import { titilium } from "@/public/fonts";
import { cn } from "@/lib/utils";

const startupaccelerator = [
  {
    name: "nvidia",
    image: "/assets/nft-implementation/nvidia-v2.png",
    // linkUrl: "https://aws.amazon.com/startups",
  },
  {
    name: "startup",
    image: "/assets/nft-implementation/start-up-v2.png",
    // linkUrl: "https://www.nvidia.com/en-gb/startups/",
  },
  {
    name: "aws",
    image: "/assets/nft-implementation/aws-v2.png",
    // linkUrl: "https://www.nvidia.com/en-gb/startups/",
  },
];

const poweredby = [
  {
    name: "bnb",
    image: "/assets/nft-implementation/bnb-v3.png",
    // linkUrl: "https://aws.amazon.com/startups",
  },
  {
    name: "eth",
    image: "/assets/nft-implementation/eth.png",
  },
  {
    name: "bitcoin",
    image: "/assets/nft-implementation/bitcoin-v3.png",
    // linkUrl: "https://www.nvidia.com/en-gb/startups/",
  },
];

const StartUpAcc = () => {
  return (
    <div className="flex justify-center items-center py-2 mt-2 mb-8 relative">
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

          <div className="flex flex-wrap justify-center items-center gap-10">
            {startupaccelerator.map((data, index) => {
              return (
                <img
                  key={index}
                  src={data.image}
                  alt={data.name}
                  className="brightness-0 invert hover:brightness-100 hover:invert-0 hover:bg-white p-2 rounded-lg duration-300"
                />
              );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-4 justify-center items-center w-full">
          <h1
            className={cn(
              titilium.className,
              "text-alice-white/30 text-xl font-bold"
            )}
          >
            Powered by
          </h1>

          <div className="flex flex-wrap justify-center items-center gap-12 w-full">
            {poweredby.map((data, index) => {
              return (
                <img
                  key={index}
                  src={data.image}
                  alt={data.name}
                  className={`${
                    data.name === "eth"
                      ? "hover:scale-105"
                      : "brightness-0 invert hover:brightness-100 hover:invert-0 hover:bg-white "
                  } duration-300 p-2 rounded-lg`}
                />
              );
            })}
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-2">
          <h1
            className={cn(
              titilium.className,
              "text-alice-white text-2xl sm:text-3xl font-semibold text-center"
            )}
          >
            Transforming Event Participation into Bitcoin Rewards
          </h1>

          <p
            className={cn(
              titilium.className,
              "text-alice-white/50 text-base font-normal text-center max-w-[700px]"
            )}
          >
            Participate actively, earn Bitcoin, and unlock possibilities –
            EventsX pioneers a revolutionary event experience with its
            innovative "Participate2Earn" protocol and multi-chain system
            architecture.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StartUpAcc;
