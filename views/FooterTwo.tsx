/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { titilium } from '@/public/fonts';
import { cn } from '@/lib/utils';
import Facebook from '@/public/socmed-icons/facebook.svg';
import Instagram from '@/public/socmed-icons/instragram.svg';
import Twitter from '@/public/socmed-icons/twitter.svg';
import LinkedIn from '@/public/socmed-icons/linkedin.svg';
import Youtube from '@/public/socmed-icons/youtube.svg';
// import Discord from '@/public/socmed-icons/discord.svg';
// import Telegram from '@/public/socmed-icons/telegram.svg';

const socmed = [
  {
    icon: <Facebook />,
    linkUrl: 'https://www.facebook.com/EventsXofficial',
  },
  {
    icon: <Instagram />,
    linkUrl: 'https://www.instagram.com/eventsxofficial/',
  },
  {
    icon: <Twitter />,
    linkUrl: 'https://twitter.com/EventsXofficial',
  },
  {
    icon: <LinkedIn />,
    linkUrl: 'https://www.linkedin.com/company/eventsx-limited/',
  },
  {
    icon: <Youtube />,
    linkUrl: 'https://www.youtube.com/channel/UCSNR8VUdUKcI9MMrwSSNT4g/featured',
  },
  // {
  //   icon: <Discord />,
  //   linkUrl: '',
  // },
  // {
  //   icon: <Telegram />,
  //   linkUrl: '',
  // },
];

const startupaccelerator = [
  {
    name: 'nvidia',
    image: '/assets/footer-icons/nvidia.png',
  },
  {
    name: 'aws',
    image: '/assets/footer-icons/aws.png',
  },
  {
    name: 'virgin',
    image: '/assets/footer-icons/virginia.png',
  },
];

const FooterTwo = () => {
  return (
    <div className='flex justify-center items-center bg-footer py-2 my-2 relative'>
      <div className='flex justify-center items-center bg-footer py-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-2xl h-full w-full -z-[1]'>
        asd
      </div>

      <div className='flex justify-center items-center grow bg-alice-white'>
        <div className='flex flex-wrap justify-center xl:justify-between items-center py-8 px-4 xl:px-0 grow max-w-[90rem]'>
          <div className='flex flex-col gap-4'>
            <h1 className={cn(titilium.className, 'text-blue-black/50 text-base font-semibold')}>
              Follow Us
            </h1>

            <div className='flex flex-wrap justify-center items-center gap-3'>
              {socmed.map((data, index) => {
                return (
                  <a href={data.linkUrl} key={index} className='hover:opacity-50 duration-150'>
                    {data.icon}
                  </a>
                );
              })}
            </div>
          </div>

          <div className='flex flex-col gap-1 justify-center items-center'>
            <h1 className={cn(titilium.className, 'text-blue-black/50 text-base font-semibold')}>
              Startup accelerator programs
            </h1>

            <div className='flex flex-wrap justify-center items-center'>
              {startupaccelerator.map((data, index) => {
                return <img key={index} src={data.image} alt={data.name} />;
              })}
            </div>
          </div>

          <div className='flex flex-wrap justify-center items-center gap-3'>
            <img src='/assets/footer-icons/uk-privacy.png' alt='uk privacy' />
            <img src='/assets/footer-icons/gdpr-representation.png' alt='gdpr representation' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterTwo;
