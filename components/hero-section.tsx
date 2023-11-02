import { cn } from '@/lib/utils';
import { outfit, titilium } from '@/public/fonts';
import { Button } from './ui/button';
import { Icons } from './icons';

const Hero = () => {
  return (
    <section id='home' className='min-h-screen container my-16'>
      <div className='max-w-[44rem] mx-auto flex items-center flex-col'>
        <h1
          className={cn(
            titilium.className,
            'isolate text-center text-5xl md:text-[3.815rem] leading-[4.875rem] relative text-alice-white',
          )}
        >
          <span>
            Revolutionizing events through{' '}
            <span
              className={cn(
                outfit.className,
                'bg-gradient-to-r from-[#58B4FF] via-[#008DFF] to-[#B719EE] transform rotate-94 bg-clip-text text-transparent ',
              )}
            >
              Blockchain{' '}
              <span className={cn(outfit.className, 'text-white font-sans opacity-80')}>and</span>{' '}
              AI
            </span>{' '}
          </span>
          <span
            aria-hidden
            className='pointer-events-none absolute text-center text-5xl md:text-[3.815rem] leading-[4.875rem] inset-0 blur-[128px] after:z-10 after:bg-opacity-0 after:absolute'
          >
            Revolutionizing events through{' '}
            <span
              className={cn(
                outfit.className,
                'bg-gradient-to-r from-[#58B4FF] via-[#008DFF] to-[#B719EE] transform rotate-94 bg-clip-text text-transparent',
              )}
            >
              Blockchain
            </span>{' '}
            and AI
          </span>
        </h1>

        <p className='text-center text-alice-white/[.72] my-4'>
          Shaping a dynamic and immersive event ecosystem that brings communities together, empowers
          event planners, and enhances the attendee experience.
        </p>

        <Button className='mt-8'>
          Request a demo <Icons.arrow width={17} height={17} className='ml-2' />
        </Button>
      </div>

      {/* <div className='max-w-[1152px] mx-auto my-12 relative'>
        <Image src={'/images/hero-img.png'} width={776} height={489} alt='Hero Image' />
        <Image
          src={'/images/logo-x.png'}
          width={856}
          height={948}
          alt='Hero Image'
          className='absolute top-0 left-0 origin-center'
        />
        <Image
          src={'/images/polygon.png'}
          width={128}
          height={128}
          alt='Hero Image'
          className='absolute bottom-0 left-0 origin-center'
        />
        <Image
          src={'/images/hat.png'}
          width={144}
          height={144}
          alt='Hero Image'
          className='absolute top-0 right-0 origin-center'
        />
        <Image
          src={'/images/bottom-glow.png'}
          width={1273}
          height={525}
          alt='Hero Image'
          className='absolute -bottom-full left-0 origin-center'
        />
      </div> */}
    </section>
  );
};

export default Hero;
