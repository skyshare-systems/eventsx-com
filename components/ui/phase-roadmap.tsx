import React from 'react';
import { cn } from '@/lib/utils';
import { titilium } from '@/public/fonts';

interface IPhaseRoadmap {
  number: string;
  bgcolor: string;
  className: string;
}

const PhaseRoadmap = ({ number, bgcolor, className }: IPhaseRoadmap) => {
  return (
    <div className='flex flex-col items-center max-w-[100px] w-full grow-0'>
      <div className='flex flex-col items-center gap-2  w-full'>
        <div className={`${className} relative`}>
          <h1 className={cn(titilium.className, 'text-[0.8rem] font-semibold text-alice-white/50')}>
            Phase
          </h1>
          <h1
            className={cn(
              titilium.className,
              `text-[0.8rem] font-semibold blur-xl text-transparent absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${bgcolor}`,
            )}
          >
            Phase
          </h1>
        </div>

        <h1
          className={(cn(titilium.className), 'text-[2.44125rem] font-semibold text-alice-white')}
        >
          {number}
        </h1>
      </div>
      <div className={`duration-1000 delay-150 ${bgcolor} w-[4px] z-[1] block faded-corners`} />
    </div>
  );
};

export default PhaseRoadmap;
