'use client';

import { siteConfig } from '@/config/site.config';
import { cn } from '@/lib/utils';
import { NavigationItem } from '@/types';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import HamburgerIcon from '@/public/icons/hamburger-icon.svg';
import { Link as LinkS } from 'react-scroll';
/* import { Button, buttonVariants } from './ui/button';
 */ import { titilium } from '@/public/fonts';
/* import Link from 'next/link';
 */ interface NavbarProps {
  items: NavigationItem[];
}

const Navbar: React.FC<NavbarProps> = ({ items }) => {
  const [scrolling, setScrolling] = useState(false);
  const [sideBar, setSideBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 p-4 z-[99999999] transition-all duration-200 w-full',
          scrolling ? 'bg-blue-black' : 'bg-transparent',
        )}
      >
        <nav className='flex items-center justify-center py-2 w-full'>
          <div className='flex items-center max-w-[1280px] grow'>
            <LinkS
              to='home'
              smooth={true}
              duration={500}
              spy={true}
              offset={-100}
              className='items-center space-x-2 md:flex mr-4'
            >
              {/*   <span className="font-bold inline-block font-nippo text-xl">
              {siteConfig.name}
            </span> */}
              <Image
                src={siteConfig.navLogo}
                alt='Nav Logo'
                width={152}
                height={24}
                className='pointer-events-none'
              />
            </LinkS>
            <ul className='hidden  xl:flex items-center gap-1 flex-wrap'>
              {items.map((item) => (
                <LinkS
                  key={item.href}
                  to={item.href}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={item.offset}
                  activeClass='active'
                  className={cn(
                    titilium.className,
                    'hover:text-white duration-200 cursor-pointer p-4 py-3 text-alice-white/50',
                  )}
                >
                  {item.title}
                </LinkS>
              ))}
            </ul>
          </div>
          <a
            href='https://auth.eventsx.com/?fbclid=IwAR0z5LswPH1XOBK7EVZ7aRGC46XeQr3hOJfVgzHLt-jr8NqiaaZc_B7FI0Y'
            className={`py-3 px-4 rounded border duration-150 hidden xl:block ${
              scrolling
                ? 'bg-alice-white/5 border-transparent'
                : 'bg-blue-black/50 backdrop-blur-lg border-alice-white/5'
            }`}
          >
            Sign In
          </a>

          <button
            onClick={() => setSideBar(!sideBar)}
            className='p-3 rounded bg-alice-white/5 block xl:hidden'
          >
            <HamburgerIcon />
          </button>
        </nav>
      </header>

      <div
        className={`fixed top-0 py-[4rem] px-4 h-full w-full bg-blue-black flex flex-col gap-8 ${
          !sideBar ? '-translate-y-full' : 'z-[9999999]'
        } duration-300 `}
      >
        <div className='flex flex-col'>
          {items.map((item) => (
            <LinkS
              key={item.href}
              to={item.href}
              smooth={true}
              duration={500}
              spy={true}
              onClick={() => setSideBar(!sideBar)}
              offset={item.offset}
              activeClass='active'
              className={cn(
                titilium.className,
                'hover:text-white duration-200 cursor-pointer p-4 py-3 text-alice-white/50',
              )}
            >
              {item.title}
            </LinkS>
          ))}
        </div>

        <hr className='border border-b-[#F3F7FA]/10' />

        <div className='flex justify-center items-center w-full md:max-w-[224px] rounded border duration-150 text-center bg-alice-white/5 border-transparent'>
          <a
            href='https://auth.eventsx.com/?fbclid=IwAR0z5LswPH1XOBK7EVZ7aRGC46XeQr3hOJfVgzHLt-jr8NqiaaZc_B7FI0Y'
            className='py-3 px-4'
          >
            Sign In
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
