/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";
import { titilium } from "@/public/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";

const cardnftdata = [
  {
    image: "/assets/nft-implementation/card-gif-1.gif",
  },
  {
    image: "/assets/nft-implementation/card-gif-2.gif",
  },
  {
    image: "/assets/nft-implementation/card-gif-3.gif",
  },
  {
    image: "/assets/nft-implementation/card-gif-4.gif",
  },
];

const NFTCardSwiper = () => {
  return (
    <>
      <Swiper
        loop
        modules={[Pagination, Navigation]}
        slidesPerView={1}
        spaceBetween={20}
        className="mix-blend-lighten w-full max-w-[300px] sm:max-w-[600px]"
      >
        {cardnftdata.map((data, index) => {
          return (
            <SwiperSlide
              key={index}
              className="flex justify-center mix-blend-lighten bg-transparent"
            >
              <Image
                src={data.image}
                alt={data.image}
                height={500}
                width={500}
                className="mix-blend-lighten w-full max-w-[300px] sm:max-w-[600px]"
                unoptimized
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default NFTCardSwiper;
