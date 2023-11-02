'use client';
import React from 'react';
import { titilium } from '@/public/fonts';
import { cn } from '@/lib/utils';
import Camera from '@/public/assets/use-case/camera-glow.svg';
import UseCaseSwiper from '@/components/use-case-swiper';

const UseCase = () => {
  const [swiper, setSwiper] = React.useState<any>(null);

  const nexto = () => {
    swiper.slideNext();
  };
  const backto = () => {
    swiper.slidePrev();
  };
  return (
    <div className='flex flex-col justify-center items-center py-[5rem]' id='use-case'>
      <div className='flex flex-col sm:items-end grow max-w-[90rem] mb-2 w-full px-4 xl:px-0'>
        <div className='flex flex-col max-w-[637px] w-full gap-4 '>
          <h1
            className={cn(
              titilium.className,
              'text-2xl sm:text-5xl text-alice-white sm:text-right',
            )}
          >
            Discover the Future of
            <br />
            Events with EventsX
          </h1>

          <p className={cn(titilium.className, 'text-base text-alice-white/70 sm:text-right')}>
            EventsX isn&rsquo;t just another event platform—it&rsquo;s a paradigm shift. It&rsquo;s
            about reimagining how events are envisioned, how they unfold, and how they&rsquo;re
            remembered. Experience inclusivity, innovation, and excellence—all at EventsX. The
            future of events begins here.
          </p>

          <div className='flex flex-row gap-2 sm:justify-end mt-8'>
            <button onClick={backto} className='p-1 bg-alice-white/5 rounded-full'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='17'
                height='16'
                viewBox='0 0 17 16'
                fill='none'
              >
                <path
                  d='M11.3775 3.60462C11.1591 3.30815 10.7418 3.24483 10.4453 3.46317C10.2151 3.63277 9.99621 3.8024 9.80554 3.95118C9.42501 4.24819 8.91527 4.65707 8.40367 5.10131C7.89534 5.54267 7.36981 6.03202 6.96615 6.48888C6.76499 6.71652 6.57999 6.95185 6.44167 7.18132C6.31438 7.39245 6.17407 7.68259 6.17407 7.99999C6.17407 8.31739 6.31438 8.60759 6.44167 8.81872C6.57999 9.04819 6.76499 9.28345 6.96615 9.51112C7.36981 9.96799 7.89534 10.4573 8.40367 10.8987C8.91527 11.3429 9.42501 11.7518 9.80554 12.0489C9.99621 12.1976 10.2151 12.3673 10.4453 12.5369C10.7418 12.7552 11.1591 12.6919 11.3775 12.3954C11.4653 12.2762 11.5075 12.1375 11.5074 12.0001V7.99999V3.99997C11.5075 3.8625 11.4653 3.72379 11.3775 3.60462Z'
                  fill='#F3F7FA'
                  fillOpacity='0.72'
                />
              </svg>
            </button>
            <button onClick={nexto} className='p-1 bg-alice-white/5 rounded-full'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='17'
                height='16'
                viewBox='0 0 17 16'
                fill='none'
              >
                <path
                  d='M6.30447 3.60462C6.52281 3.30815 6.94014 3.24483 7.2366 3.46317C7.46687 3.63277 7.68579 3.80239 7.87639 3.95117C8.25699 4.24819 8.76666 4.65707 9.27833 5.10131C9.78666 5.54266 10.3121 6.03202 10.7158 6.48888C10.917 6.71653 11.102 6.95187 11.2403 7.18127C11.3676 7.39247 11.5079 7.6826 11.5079 8C11.5079 8.3174 11.3676 8.60753 11.2403 8.81873C11.102 9.04813 10.917 9.28347 10.7158 9.51113C10.3121 9.968 9.78666 10.4573 9.27833 10.8987C8.76666 11.3429 8.25699 11.7518 7.87639 12.0488C7.68579 12.1976 7.46687 12.3673 7.23661 12.5368C6.94014 12.7552 6.52281 12.6919 6.30447 12.3954C6.21669 12.2762 6.17445 12.1375 6.17456 12.0001V8V3.99996C6.17445 3.8625 6.21669 3.72379 6.30447 3.60462Z'
                  fill='#F3F7FA'
                  fillOpacity='0.72'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className='flex flex-row items-center w-full max-w-[90rem] max-h-[20rem] relative'>
        <div className='absolute top-1/2 left-[25%] transform -translate-x-[25%] -translate-y-1/2 hidden 2xl:flex justify-center items-start blur-xl -z-[1]'>
          <h1 className='bg-primary/10 py-[10rem] px-[11rem] rounded-l-full text-transparent'>
            asd
          </h1>
        </div>
        <div className='relative hidden 2xl:flex max-w-[360px] faded-camera z-[2]'>
          <Camera />
        </div>

        <UseCaseSwiper setSwiper={setSwiper} />
      </div>
    </div>
  );
};

export default UseCase;
