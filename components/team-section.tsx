import { cn } from '@/lib/utils';
import { titilium } from '@/public/fonts';
import React from 'react';

const Team = () => {
  return (
    <section id='team' className='container my-16'>
      <h2 className={cn(titilium.className, 'text-[3.815rem] leading-[4.875rem] text-white')}>
        Meet the EventsX Team
      </h2>
    </section>
  );
};

export default Team;
