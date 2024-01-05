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
          className="absolute top-[22%] left-[1%] transform -translate-y-[22%] w-full max-w-[120px] z-[2] hidden lg:block"
        />

        <Image
          src={"/icons/bnb-icon.png"}
          alt={"bitcoin"}
          height={500}
          width={500}
          className="absolute top-[22%] right-[1%] transform -translate-y-[22%] w-full max-w-[120px] z-[2] hidden lg:block"
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
            Explore the opportunity to invest in the seed funding round.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <a
            target="_blank"
            href="https://calendly.com/eventsxfundraising/30min?month=2023-12"
            className="py-3 px-6 flex items-center gap-2 hover:brightness-110 duration-150 font-semibold text-2xl bg-sky-500 bg-opacity-5 rounded-[499.50px] shadow border border-sky-500 backdrop-blur-sm justify-center"
          >
            Schedule A Meeting
            {/* <Image
              src={"/assets/heart-anim.gif"}
              alt={"heart"}
              height={100}
              width={100}
              className="absolute top-1/2 left-[10%] transform -translate-x-[10%] -translate-y-1/2 hidden group-hover:block"
            />
            <Image
              src={"/assets/heart-anim.gif"}
              alt={"heart"}
              height={100}
              width={100}
              className="absolute top-1/2 -right-[10%] transform  -translate-y-1/2 hidden group-hover:block"
            /> */}
            {/* Schedule a meeting */}
          </a>
          {/* <div className="relative">
            <a
              href="https://auth.eventsx.com/?fbclid=IwAR0z5LswPH1XOBK7EVZ7aRGC46XeQr3hOJfVgzHLt-jr8NqiaaZc_B7FI0Y"
              className={`py-3 px-4 rounded border duration-150 hover:brightness-125 border-alice-white/5 bg-blue-black  backdrop-blur-lg`}
            >
              Sign In
            </a>
            <a
              href="https://auth.eventsx.com/?fbclid=IwAR0z5LswPH1XOBK7EVZ7aRGC46XeQr3hOJfVgzHLt-jr8NqiaaZc_B7FI0Y"
              className={`rotating text-transparent rounded-full border duration-150 hover:brightness-125 bg-gradient-to-t from-[#0182eb] via-[#34cc71] to-[#9f1ad2] blur-md -z-[1]`}
            >
              Sign In
            </a>
          </div> */}
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
