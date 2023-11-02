import React from 'react';
import { inter } from '@/public/fonts';
import { cn } from '@/lib/utils';

const FooterThree = () => {
  return (
    <div className='flex justify-center items-center mt-[2rem] py-8'>
      <div className='flex flex-col gap gap-2 max-w-[90rem] px-4 xl:px-0 grow'>
        <h1 className={cn(inter.className, 'text-sm font-normal text-alice-white')}>
          © 2023 EventsX Ltd. All right reserved.
        </h1>
        <ul className='flex flex-col gap-1 text-alice-white/50 font-normal text-xs'>
          <li>Registered in England. Company registration number 10788530.</li>
          <li>
            EventsX and the EventsX logo are registered trademarks of EventsX Limited in the United
            Kingdom and other countries.
          </li>
          <li>
            The General Data Protection Regulation (GDPR) will be effective on May 25, 2018 and
            requires any organization that works with EU residents’ Personal Data in any manner, to
            protect the data. EventsX takes our customers’
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FooterThree;
