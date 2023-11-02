import { cn } from '@/lib/utils';
import { NFTImplementationCardContent } from '@/types';
import React from 'react';
import { Icons } from '../icons';
import { titilium } from '@/public/fonts';
import { Svgs } from '../card-svg';

interface NFTImplementationCardProps {
  nftImplementation: NFTImplementationCardContent;
}

const NFTImplementationCard: React.FC<NFTImplementationCardProps> = ({ nftImplementation }) => {
  const CardIcon = Icons[nftImplementation.icon || 'arrow'];
  const SvgBlur = Svgs[nftImplementation.svgBlur || 'generalNft'];

  return (
    <div
      className={cn(
        nftImplementation.borderColor,
        'p-4 rounded-lg flex flex-col justify-start gap-2 relative overflow-hidden max-w-[15.5rem]',
      )}
    >
      <div className='absolute top-0 left-0 '>
        <SvgBlur />
      </div>
      <CardIcon width={24} height={24} />
      <h3
        className={cn(
          titilium.className,
          'text-[1.95313rem] text-alice-white font-semibold leading-[2.5rem]',
        )}
      >
        {nftImplementation.count}
      </h3>
      <p className={cn(titilium.className, 'text-alice-white/80 font-semibold ')}>
        {nftImplementation.title}
      </p>
      <p className={cn(titilium.className, 'leading-5 text-alice-white/50')}>
        {nftImplementation.description}
      </p>
    </div>
  );
};

export default NFTImplementationCard;
