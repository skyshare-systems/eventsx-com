/* eslint-disable prefer-const */
'use client';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { MouseEvent } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { titilium } from '@/public/fonts';

interface ICardDetails {
  radialColor: string;
  image: string;
  quantity: number;
  name: string;
  description: string;
  borderColor: string;
}

export default function CardNFT({
  radialColor,
  image,
  quantity,
  name,
  description,
  borderColor,
}: ICardDetails) {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div className='relative flex justify-center'>
      <div
        className={`group relative p-4 gap-2 flex flex-col border ${borderColor} rounded-lg max-w-[300px] sm:max-h-[280px] w-screen sm:h-screen`}
        onMouseMove={handleMouseMove}
      >
        <motion.div
          className='pointer-events-none absolute -inset-px rounded-lg opacity-0 transition duration-300 group-hover:opacity-50'
          style={{
            background: useMotionTemplate`
            radial-gradient(
              380px circle at ${mouseX}px ${mouseY}px,
              ${radialColor},
              transparent 60%
            )
          `,
          }}
        />
        <Image height={20} width={17} src={image} alt={image} />
        <h1
          className={cn(
            titilium.className,
            'text-[1.5rem] sm:text-[1.95313rem] font-semibold text-alice-white',
          )}
        >
          {quantity}
        </h1>
        <h1 className={cn(titilium.className, 'text-base font-semibold text-alice-white/80')}>
          {name}
        </h1>
        <p className={cn(titilium.className, 'text-base font-semibold text-alice-white/50')}>
          {description}
        </p>
      </div>
    </div>
  );
}
