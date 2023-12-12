/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay } from "swiper/modules";
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

const NFTCardSwiper = ({ setSwiper }: any) => {
  return (
    <>
      <Swiper
        loop
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Navigation, Autoplay]}
        slidesPerView={1}
        spaceBetween={20}
        className="mix-blend-lighten w-full max-w-[300px] sm:max-w-[600px]"
        onSwiper={(s) => {
          console.log("initialize swiper", s);
          setSwiper(s);
        }}
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
