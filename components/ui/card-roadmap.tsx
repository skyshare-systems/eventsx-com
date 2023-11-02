import React from 'react';
import { cn } from '@/lib/utils';
import { titilium } from '@/public/fonts';

interface ICardRoadmapDetails {
  title: string;
  subtitle: string;
  description: string;
}

const CardRoadmap = ({ title, subtitle, description }: ICardRoadmapDetails) => {
  return (
    <div className='p-4 gap-4 flex flex-col w-full max-w-[19.5rem] bg-transparent rounded-2xl hover:bg-alice-white/5'>
      <div className='flex flex-wrap justify-between items-center gap-2'>
        <h1 className={cn(titilium.className, 'font-bold text-[1.25rem] text-alice-white')}>
          {title}
        </h1>
        <h1 className={cn(titilium.className, 'font-bold text-[1.25rem] text-alice-white/30')}>
          {subtitle}
        </h1>
      </div>
      <p className={cn(titilium.className, 'font-normal text-alice-white/72 text-[1rem]')}>
        {description}
      </p>
    </div>
  );
};

export default CardRoadmap;
