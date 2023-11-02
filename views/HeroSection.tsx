'use client';
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Marquee from 'react-fast-marquee';
import { outfit, titilium } from '@/public/fonts';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/icons';
import { useRouter } from 'next/navigation';

const cards = [
  {
    name: 'General Admission',
    imgUrl: '/assets/home/nftcard-01.png',
  },
  {
    name: 'Premium Experience',
    imgUrl: '/assets/home/nftcard-02.png',
  },
  {
    name: 'Group Dynamics',
    imgUrl: '/assets/home/nftcard-03.png',
  },
  {
    name: 'Time Bound',
    imgUrl: '/assets/home/nftcard-04.png',
  },
  {
    name: 'General Admission',
    imgUrl: '/assets/home/nftcard-01.png',
  },
  {
    name: 'Premium Experience',
    imgUrl: '/assets/home/nftcard-02.png',
  },
  {
    name: 'Group Dynamics',
    imgUrl: '/assets/home/nftcard-03.png',
  },
  {
    name: 'Time Bound',
    imgUrl: '/assets/home/nftcard-04.png',
  },
];

const HeroSection = () => {
  const router = useRouter();
  return (
    <div
      id='home'
      className={`flex justify-center items-center w-full pt-[5rem] bg-cover bg-no-repeat bg-center`}
    >
      <div className='flex flex-col gap-4 justify-center items-center max-w-[1280px] py-4 sm:p-16'>
        <div className='flex flex-col gap-4 grow max-w-[712px] px-4 xl:px-0'>
          <h1
            className={cn(
              outfit.className,
              'text-[2rem] lg:text-[3.815rem] font-normal text-center',
            )}
          >
            <span className='text-alice-white'>Revolutionizing events through</span>
            <span className='text-transparent bg-clip-text bg-gradient-to-br from-[#58B4FF] via-[#008DFF] from-[43.18%] via-[61.58%] to-[96.65%] to-[#B719EE]'>
              {' '}
              Blockchain
            </span>
            <span className='text-alice-white'> and</span>
            <span className='text-transparent bg-clip-text bg-gradient-to-br from-[#58B4FF]  to-[100%] to-[#B719EE]'>
              {' '}
              AI
            </span>
          </h1>

          <p
            className={cn(
              titilium.className,
              'text-base font-normal text-alice-white/70 text-center',
            )}
          >
            Shaping a dynamic and immersive event ecosystem that brings communities together,
            empowers event planners, and enhances the attendee experience.
          </p>
        </div>

        <Button
          onClick={() =>
            router.push(
              'https://www.eventsx.com/request-a-demo?fbclid=IwAR1XBoBglneatmPax_FEJUBJ9Mn6nIEZ1a13ONm1qa1kH4YaNcg3a7pRgzI',
            )
          }
          className='mt-8'
        >
          Request a demo <Icons.arrow width={17} height={17} className='ml-2' />
        </Button>

        <div className='w-full py-4 relative'>
          <img
            src={'/assets/home/x.png'}
            alt={'x'}
            height={400}
            width={250}
            className='absolute top-[5%] -left-[5%] z-[999] w-full max-w-[150px] sm:max-w-[250px]'
          />

          <Marquee pauseOnHover speed={100} pauseOnClick className='faded-edgesv2 py-[5rem]'>
            <div className='flex justify-center items-center gap-4 last:mr-4 '>
              {cards.map((data, index) => {
                return (
                  <img
                    key={index}
                    src={data.imgUrl}
                    alt={data.name}
                    height={400}
                    width={250}
                    className='hover:scale-105 duration-150'
                  />
                  // <div className='flex items-center justify-center h-[300px] w-[215px]' key={index}>
                  //   <video
                  //     autoPlay
                  //     loop
                  //     muted
                  //     src={'/video/001.mp4'}
                  //     className='video-bg object-cover z-[3] h-[400px] w-[210px] '
                  //   />
                  // </div>
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
