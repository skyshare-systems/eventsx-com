"use client";
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Marquee from "react-fast-marquee";
import { outfit, titilium } from "@/public/fonts";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import Line from "@/public/assets/home/line.svg";
import Image from "next/image";

const cards = [
  {
    name: "General Admission",
    imgUrl: "/assets/home/nftcard-01.png",
    image: "/assets/nft-implementation/card-gif-1.gif",
  },
  {
    name: "Premium Experience",
    imgUrl: "/assets/home/nftcard-02.png",
    image: "/assets/nft-implementation/card-gif-2.gif",
  },
  {
    name: "Group Dynamics",
    imgUrl: "/assets/home/nftcard-03.png",
    image: "/assets/nft-implementation/card-gif-3.gif",
  },
  {
    name: "Time Bound",
    imgUrl: "/assets/home/nftcard-04.png",
    image: "/assets/nft-implementation/card-gif-4.gif",
  },
  {
    name: "General Admission",
    imgUrl: "/assets/home/nftcard-01.png",
    image: "/assets/nft-implementation/card-gif-1.gif",
  },
  {
    name: "Premium Experience",
    imgUrl: "/assets/home/nftcard-02.png",
    image: "/assets/nft-implementation/card-gif-2.gif",
  },
  {
    name: "Group Dynamics",
    imgUrl: "/assets/home/nftcard-03.png",
    image: "/assets/nft-implementation/card-gif-3.gif",
  },
  {
    name: "Time Bound",
    imgUrl: "/assets/home/nftcard-04.png",
    image: "/assets/nft-implementation/card-gif-4.gif",
  },
];

const HeroSection = () => {
  return (
    <div
      id="home"
      className={`flex justify-center items-center w-full pt-[5rem] bg-cover bg-no-repeat bg-center`}
    >
      <div className="flex flex-col gap-4 justify-center items-center max-w-[1280px] pb-0 p-4 sm:p-16 sm:pb-0 relative">
        <Image
          src={"/icons/bitcoin-icon.png"}
          alt={"bitcoin"}
          height={500}
          width={500}
          unoptimized
          className="absolute top-[15%] left-[5%] transform -translate-y-[22%] w-full max-w-[250px] z-[2] hidden lg:block"
        />

        <Image
          src={"/icons/eth-icon.png"}
          alt={"eth"}
          height={500}
          width={500}
          unoptimized
          className="absolute top-[20%] right-[0%] transform -translate-y-[22%] w-full max-w-[250px] z-[2] hidden lg:block"
        />

        <Image
          src={"/icons/bnb-icon.png"}
          alt={"bitcoin"}
          height={500}
          width={500}
          unoptimized
          className="absolute top-[40%] right-[15%] transform -translate-y-[22%] w-full max-w-[130px] z-[2] hidden lg:block"
        />
        <div className="flex flex-col gap-4 grow max-w-[712px] px-4 xl:px-0 relative z-[3]">
          <h1
            className={cn(
              outfit.className,
              "text-[2rem] lg:text-[3.815rem] font-normal text-center"
            )}
          >
            <span className="text-alice-white">
              Revolutionizing events through
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#58B4FF] via-[#008DFF] from-[43.18%] via-[61.58%] to-[96.65%] to-[#B719EE]">
              {" "}
              Blockchain
            </span>
            <span className="text-alice-white"> and</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#58B4FF] to-[100%] to-[#B719EE]">
              {" "}
              AI
            </span>
          </h1>

          <p
            className={cn(
              titilium.className,
              "text-base font-normal text-alice-white/70 text-center"
            )}
          >
            Shaping a dynamic and immersive event ecosystem that brings
            communities together, empowers event planners, and enhances the
            attendee experience.
          </p>
          <p
            className={cn(
              titilium.className,
              "text-base font-normal text-alice-white/70 text-center"
            )}
          >
            Explore the opportunity to invest in EVEX
          </p>
        </div>

        <div>
          <a
            target="_blank"
            href="https://app.uniswap.org/#/swap?&chain=mainnet&use=v2&outputCurrency=0x17729f7ffddd4ed480cf4cfb1668ef90d1e6a24e"
            className="bg-white py-2 px-6 flex flex-row gap-1 rounded-full items-center text-black"
          >
            <Image
              src={"/icons/Uniswap_Logo.svg"}
              alt={"buy now"}
              height={56}
              width={56}
              className="hover:brightness-150 duration-150"
            />
            <span
              className={cn(
                outfit.className,
                "text-[20px] font-bold text-center uppercase"
              )}
            >
              Buy Now
            </span>
          </a>
        </div>

        <div className="w-full relative">
          <img
            src={"/assets/home/x.png"}
            alt={"x"}
            height={400}
            width={250}
            className="absolute -top-[5%] -left-[5%] z-[999] w-full max-w-[150px] sm:max-w-[250px]"
          />

          <img
            src={"/assets/home/hat.png"}
            alt={"x"}
            height={128}
            width={128}
            className="absolute -top-[15%] -right-[5%] -z-[1] w-full max-w-[150px] sm:max-w-[250px]"
          />

          <img
            src={"/assets/home/background.png"}
            alt={"x"}
            height={128}
            width={128}
            className="absolute left-1/2 transform -translate-x-1/2 bottom-0 -z-[1] w-full max-w-[260px] sm:max-w-[500px]"
          />

          <Line className="absolute  left-1/2 transform -translate-x-1/2 bottom-0 -z-[1] w-full max-w-[250px] sm:max-w-[776px]" />

          <Marquee
            pauseOnHover
            speed={100}
            pauseOnClick
            className="faded-edgesv2 mix-blend-lighten"
          >
            <div className="flex justify-center items-center last:mr-8 mix-blend-lighten">
              {cards.map((data, index) => {
                return (
                  <img
                    key={index}
                    src={data.image}
                    alt={data.name}
                    height={500}
                    width={400}
                    className="scale-90 hover:scale-100 duration-150 w-full max-w-[260px] sm:max-w-[400px] mix-blend-lighten -mx-[4rem] rounded-lg"
                  />
                );
              })}
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
