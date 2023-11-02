/* eslint-disable @next/next/no-img-element */
'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';
import { titilium } from '@/public/fonts';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const usecasedata = [
  {
    image: '/assets/use-case/usecase-item-01.png',
    title: 'Event Ticketing with NFTs',
    description:
      'Bid goodbye to counterfeit tickets! Secure your event access with NFT tickets that ensure you not only have a valid pass but also access to unique experiences.',
  },
  {
    image: '/assets/use-case/usecase-item-02.png',
    title: 'Event Economy',
    description: `Transact with our native cryptocurrency, EVX. Whether you're buying tickets, event merchandise, or availing services, immerse in an economy that keeps the event community buzzing.`,
  },
  {
    image: '/assets/use-case/usecase-item-03.png',
    title: 'Decentralized Events',
    description:
      'Feel empowered to curate events that resonate with your interests. With EventsX, everyone gets to be an event maestro.',
  },
  {
    image: '/assets/use-case/usecase-item-04.png',
    title: 'AI Event Engine',
    description:
      'Reduce the hassle in event planning. Let our AI-assisted content creation be your guide in crafting standout event agendas.',
  },
  {
    image: '/assets/use-case/usecase-item-05.png',
    title: 'Smart Matchmaking Algorithm:',
    description:
      'Networking made easy. Find and connect with individuals who share your vision and passion. ',
  },
  {
    image: '/assets/use-case/usecase-item-06.png',
    title: 'Bespoke Metaverses',
    description:
      'Step into virtual realms designed for your events. Engage in immersive experiences and watch your events come alive.',
  },
  {
    image: '/assets/use-case/usecase-item-07.png',
    title: 'In-Event Product Marketplace',
    description:
      'Showcase or discover products and services, directly linking businesses to eager event-goers.',
  },
  {
    image: '/assets/use-case/usecase-item-08.png',
    title: 'Governance and Decision-making',
    description: `Have a voice in the platform's future. Token holders are at the heart of our decision-making process.`,
  },
  {
    image: '/assets/use-case/usecase-item-09.png',
    title: 'AI-Powered Ad and Social Creatives',
    description: `Boost your event's reach with ads crafted by advanced AI, ensuring that your event message resonates far and wide.`,
  },
  {
    image: '/assets/use-case/usecase-item-10.png',
    title: 'Enhanced Engagement and Rewards:',
    description:
      'Be an active member and reap rewards. From content contributions to event interactions, every effort counts.',
  },
];

const UseCaseSwiper = ({ setSwiper }: any) => {
  return (
    <>
      <Swiper
        loop
        modules={[Pagination, Navigation]}
        className=' relative w-full max-w-[300px] sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px]'
        onSwiper={(s) => {
          console.log('initialize swiper', s);
          setSwiper(s);
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {usecasedata.map((data, index) => {
          return (
            <SwiperSlide
              key={index}
              className='flex justify-center max-w-[330px] sm:max-w-full w-full'
            >
              <div className='flex flex-col justify-start items-start text-alice-white h-full rounded-2xl border border-primary/10 backdrop-blur-3xl p-4 gap-3 w-full'>
                <Image
                  src={data.image}
                  alt={data.title}
                  height={96}
                  width={96}
                  className='w-full max-w-[96px]'
                />
                <h1
                  className={cn(
                    titilium.className,
                    'text-base text-alice-white/90 font-semibold text-left',
                  )}
                >
                  {data.title}
                </h1>
                <h1
                  className={cn(
                    titilium.className,
                    'text-base text-alice-white/90 font-normal text-left',
                  )}
                >
                  {data.description}
                </h1>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default UseCaseSwiper;
