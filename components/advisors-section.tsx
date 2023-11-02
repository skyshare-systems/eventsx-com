import { cn } from '@/lib/utils';
import { titilium } from '@/public/fonts';
import React from 'react';
import AdvisorCard from '@/components/advisor-card';
import Marquee from 'react-fast-marquee';

const Advisors = () => {
  const advisorCards = [
    {
      image: '/assets/advisors/franco.png',
      advisorName: 'Franco de la Croix-Vaubois',
      title: 'Communities',
    },
    {
      image: '/assets/advisors/david.png',
      advisorName: 'David Martin',
      title: 'Operations',
    },
    {
      image: '/assets/advisors/stephanie.png',
      advisorName: 'Stephanie Loeffler-Reading',
      title: 'IP & Legal',
    },
    {
      image: '/assets/advisors/munib.png',
      advisorName: 'Munib Ali',
      title: 'Regulation',
    },
    {
      image: '/assets/advisors/vikrams.png',
      advisorName: 'Vikram Modgil',
      title: 'Artificial Intelligence',
    },
  ];
  return (
    <section id='advisors' className='flex justify-center items-center my-16'>
      <div className='flex flex-col items-center gap-8 sm:gap-16'>
        <div className='flex flex-col gap-2 items-center justify-center w-full max-w-[39.125rem]'>
          <h2
            className={cn(
              titilium.className,
              'text-white leading-[4.875rem] text-[3.815rem] text-center',
            )}
          >
            The Advisors
          </h2>
          <p
            className={cn(
              titilium.className,
              'text-alice-white/50 leading-5 text-center px-4 lg:px-0',
            )}
          >
            EventsX benefits from the guidance and expertise of esteemed advisors, who provide
            valuable insights and industry knowledge to steer the platform toward success. The
            advisory board comprises notable experts from various sectors, including events,
            technology, finance, and marketing, ensuring a well-rounded and informed approach to
            decision-making.
          </p>
        </div>
        <div className='max-w-[300px] sm:max-w-[600px] md:max-w-[768px] lg:max-w-[800px] xl:max-w-[1240px] w-full mx-auto my-8'>
          <Marquee
            gradient
            gradientColor='#0C141B, #0C141B00'
            pauseOnHover
            className='w-full my-4 overflow-y-hidden'
          >
            <div className=' justify-center items-center gap-4 last:mr-4 hidden sm:flex'>
              {advisorCards.map((advisor, index) => (
                <AdvisorCard
                  key={index}
                  name={advisor.advisorName}
                  imgUrl={advisor.image}
                  title={advisor.title}
                />
              ))}
            </div>
          </Marquee>
          <Marquee pauseOnHover className='w-full my-4 overflow-y-hidden'>
            <div className='flex sm:hidden justify-center items-center gap-4 last:mr-4 '>
              {advisorCards.map((advisor) => (
                <AdvisorCard
                  key={advisor.advisorName}
                  name={advisor.advisorName}
                  imgUrl={advisor.image}
                  title={advisor.title}
                />
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Advisors;
