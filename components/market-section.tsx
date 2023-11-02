import { cn } from '@/lib/utils';
import { titilium } from '@/public/fonts';
import React from 'react';

import MarketGraph from './market-graph';

const Market = () => {
  return (
    <section id='market' className='container flex justify-center items-center my-16'>
      <div className='flex flex-col gap-3 justify-center text-center'>
        <MarketGraph />


        <h2 className={cn(titilium.className, 'text-white text-[3.815rem] leading-[4.875rem]')}>
          Our Total Addressable Market
        </h2>

        <h4
          className={cn(
            titilium.className,
            'text-alice-white/[.72] text-[1.5625rem] font-bold leading-[2.25rem]',
          )}
        >
          A Large and Untapped Growth Opportunity{' '}
        </h4>
        <p
          className={cn(
            titilium.className,
            'text-alice-white/50 leading-5 max-w-[53.125rem] mx-auto',
          )}
        >
          The mass exposure to webinars and virtual events in 2020-2021 has created lasting
          awareness and a sustained demand for this technology as a vital way to engage audiences
          regardless of location or time. Projections indicate that by 2025, revenue from webinars
          and virtual events will increase by over five times compared to pre-pandemic levels. This
          growth, despite price reductions, reflects a remarkable 5-year revenue compound annual
          growth rate (CAGR) of 23.1%, signifying the widespread adoption of webinars and virtual
          events across various event types, use cases, regions, and industries.
        </p>
      </div>
    </section>
  );
};

export default Market;
