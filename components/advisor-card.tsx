import Image from 'next/image';
import React from 'react';

import { cn } from '@/lib/utils';
import { titilium } from '@/public/fonts';

interface AdvisorCardProps {
  name: string;
  imgUrl: string;
  title: string;
}

const AdvisorCard = ({ name, imgUrl, title }: AdvisorCardProps) => {
  return (
    <div>
      <Image src={imgUrl} height={280} alt={name} width={280} className='rounded-lg ' />
      <h1
        className={cn(titilium.className, 'text-center text-alice-white text-[1.25rem] font-bold')}
      >
        {name}
      </h1>
      <p className={cn(titilium.className, 'text-center text-alice-white text-xs font-bold')}>
        {title}
      </p>
    </div>
  );
};

export default AdvisorCard;
