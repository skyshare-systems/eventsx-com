import { cn } from '@/lib/utils';
import { titilium } from '@/public/fonts';
import { TMarqueeContent } from '@/types';
import React from 'react';
import Marquee from 'react-fast-marquee';
import { Icons } from './icons';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const marqueeComponent: TMarqueeContent[] = [
  {
    icon: 'uncompromisingUserAuthentication',
    title: 'Smart Contract Integrity.',
    hoverDescription: 'Test',
  },
  {
    icon: 'uncompromisingUserAuthentication',
    title: 'Uncompromising User Authentication.',
    hoverDescription: 'Test',
  },
  {
    icon: 'uncompromisingUserAuthentication',
    title: 'Privacy and Consent.',
    hoverDescription: [
      'GDPR compliance? Check. We don&apos;t just abide by data laws—we respect them.',
      'Our transparent policies ensure you&apos;re always in the loop about your data&apos;s journey.',
    ],
  },
  {
    icon: 'uncompromisingUserAuthentication',
    title: 'Risk Management.',
    hoverDescription: 'Test',
  },
  {
    icon: 'uncompromisingUserAuthentication',
    title: 'Community Vigilance.',
    hoverDescription: 'Test',
  },
];

const Security = () => {
  const renderHoverDescription = (hoverDescription: TMarqueeContent['hoverDescription']) => {
    if (Array.isArray(hoverDescription)) {
      return hoverDescription.map((desc, index) => <p key={index}>{desc}</p>);
    } else {
      return <p>{hoverDescription}</p>;
    }
  };

  return (
    <section id='security' className='container items-end py-16'>
      <div className='max-w-[40rem] mx-auto space-y-4 grid place-content-center relative'>
        <div className='absolute -z-10'></div>
        <h2
          className={cn(
            titilium.className,
            'security-gradient text-[3.5188rem] text-center leading-[4rem] w-[32.5rem] mx-auto ',
          )}
        >
          Security at the Forefront of Web3 Experiences
        </h2>

        <p className={cn(titilium.className, 'text-alice-white/[.72] leading-5')}>
          By marrying tech prowess with a proactive approach, we&apos;re ensuring that EventsX
          isn&apos;t just another Web3 platform. It&apos;s a haven. A space where you can breathe
          easy, knowing you&apos;re in safe hands. Dive in and experience Web3 events with utmost
          peace of mind.
        </p>
      </div>

      <div className='max-w-[400px] sm:max-w-[600px] md:max-w-[800px] xl:max-w-[1240px]  mx-auto my-8'>
        <TooltipProvider>
          <Tooltip>
            <Marquee
              gradient
              gradientColor='#0C141B, #0C141B00'
              pauseOnHover
              className='w-full my-4'
            >
              <div className='flex justify-center items-center gap-4 last:mr-4'>
                {marqueeComponent.map((item) => {
                  const Icon = Icons[item.icon || 'uncompromisingUserAuthentication'];
                  return (
                    <>
                      <TooltipTrigger>
                        <div
                          className='bg-alice-white/[.04] p-4 flex flex-row gap-4 rounded-lg relative'
                          key={item.title}
                        >
                          <Icon width={24} height={24} />
                          <p className={cn(titilium.className, 'font-semibold leading-5')}>
                            {item.title}
                          </p>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        {renderHoverDescription(item.hoverDescription)}
                      </TooltipContent>
                    </>
                  );
                })}
              </div>
            </Marquee>
          </Tooltip>
        </TooltipProvider>
      </div>
    </section>
  );
};

export default Security;
