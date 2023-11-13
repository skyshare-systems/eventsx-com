"use client";

import { cn } from "@/lib/utils";
import { titilium } from "@/public/fonts";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// Import Swiper styles
import "swiper/css";
import { UseCaseCardContent } from "@/types";
import UseCaseCard from "./use-case-card";

const UseCase = () => {
  const useCasecard: UseCaseCardContent[] = [
    {
      icon: "usecaseItem1",
      title: "Event Ticketing with NFTs",
      className: "event-ticketing",
      description:
        "Bid goodbye to counterfeit tickets! Secure your event access with NFT tickets that ensure you not only have a valid pass but also access to unique experiences.",
    },
    {
      icon: "usecaseItem1",
      title: "Event Economy",
      className: "event-ticketing",
      description: `Transact with our native cryptocurrency, EVEX. Whether you're buying tickets, event merchandise, or availing services, immerse in an economy that keeps the event community buzzing.`,
    },
    {
      icon: "usecaseItem1",
      title: "Event Ticketing with NFTs",
      className: "event-ticketing",
      description:
        "Bid goodbye to counterfeit tickets! Secure your event access with NFT tickets that ensure you not only have a valid pass but also access to unique experiences.",
    },
  ];

  return (
    <section id="use-case" className="container ">
      <div className="flex flex-col justify-end max-w-[72rem] mx-auto text-right">
        <div className="max-w-[40.8rem] ml-auto space-y-4 my-8">
          <h2
            className={cn(
              titilium.className,
              "text-alice-white leading-[7rem] text-center md:text-right text-[2rem] md:text-[3.8518rem]"
            )}
          >
            Discover the Future of Events with EventsX
          </h2>
          <p
            className={cn(
              titilium.className,
              "md:leading-5 text-alice-white/[.72] text-center leading-relaxed"
            )}
          >
            UseCaseCardContent EventsX isn&apos;t just another event
            platform—it&apos;s a paradigm shift. It&apos;s about reimagining how
            events are envisioned, how they unfold, and how they&apos;re
            remembered. Experience inclusivity, innovation, and excellence—all
            at EventsX. The future of events begins here.
          </p>
        </div>

        {/*   <div className='flex flex-col items-center justify-center md:flex-row gap-4'>
          <div className='space-x-4 hidden'>
            <button>Previous</button>
            <button>Next</button>
          </div>

          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            loop={true}
            className='mySwiper max-w-sm sm:max-w-md md:w-[calc(16rem*3)] my-8'
          >
            {useCasecard.map((usecase) => (
              <SwiperSlide key={usecase.title}>
                <UseCaseCard usecase={usecase} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className='flex flex-col w-full gap-4'></div>
        </div> */}

        <div className="flex flex-col justify-center md:justify-end items-center">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            loop={true}
            className="mySwiper "
          >
            {useCasecard.map((usecase, index) => (
              <SwiperSlide key={index}>
                <UseCaseCard usecase={usecase} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default UseCase;
