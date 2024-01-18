"use client";

import { siteConfig } from "@/config/site.config";
import { cn } from "@/lib/utils";
import { NavigationItem } from "@/types";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import HamburgerIcon from "@/public/icons/hamburger-icon.svg";
import { Icons } from "@/components/icons";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

import Dropdown from "@/public/icons/dropdown.svg";
import { Link as LinkS } from "react-scroll";
/* import { Button, buttonVariants } from './ui/button';
 */ import { titilium } from "@/public/fonts";
/* import Link from 'next/link';
 */ interface NavbarProps {
  items: NavigationItem[];
}

const Navbar: React.FC<NavbarProps> = ({ items }) => {
  const [scrolling, setScrolling] = useState(false);
  const [sideBar, setSideBar] = useState(false);
  const router = useRouter();
  const [showResources, setShowResources] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 p-4 z-[99999999] transition-all duration-200 w-full",
          scrolling ? "bg-blue-black" : "bg-blue-black"
        )}
      >
        <nav className="flex items-center justify-center py-2 w-full">
          <div className="flex items-center max-w-[1280px] grow">
            <a
              href="https://www.eventsx.com/"
              className="items-center space-x-2 md:flex mr-4"
            >
              {/*   <span className="font-bold inline-block font-nippo text-xl">
              {siteConfig.name}
            </span> */}
              <Image
                src={siteConfig.navLogo}
                alt="Nav Logo"
                width={152}
                height={24}
                className="pointer-events-none"
              />
            </a>
            <ul className="hidden  xl:flex items-center gap-1 flex-wrap relative">
              {items.map((item) => (
                <LinkS
                  key={item.href}
                  to={item.href}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={item.offset}
                  activeClass="active"
                  className={cn(
                    titilium.className,
                    "hover:text-white duration-200 cursor-pointer text-xs 2xl:text-base p-2 py-3 text-alice-white/50"
                  )}
                >
                  {item.title}
                </LinkS>
              ))}
              <div onClick={() => setShowResources(!showResources)}>
                <h1
                  className={cn(
                    titilium.className,
                    "hover:text-white duration-200 cursor-pointer text-xs 2xl:text-base p-4 py-3 text-alice-white/50 flex gap-2 items-center"
                  )}
                >
                  Resources <Dropdown />
                </h1>
              </div>
              {showResources && (
                <div className="absolute top-[80%] bg-blue-black right-0 rounded-b-xl flex flex-col p-4">
                  <a
                    href="/whitepaper.pdf"
                    download
                    className={cn(
                      titilium.className,
                      "hover:text-white duration-200 cursor-pointer p-4 py-3 text-alice-white/50"
                    )}
                  >
                    Whitepaper
                  </a>
                  <a
                    href="/audit-report.pdf"
                    download
                    className={cn(
                      titilium.className,
                      "hover:text-white duration-200 cursor-pointer p-4 py-3 text-alice-white/50"
                    )}
                  >
                    Audit Report
                  </a>
                </div>
              )}
            </ul>
          </div>

          <div className="flex-wrap items-center gap-8 hidden xl:flex">
            <button
              className="py-3 px-4 bg-[#0182eb] rounded-md flex items-center gap-2 hover:brightness-110 duration-150 font-semibold"
              onClick={() =>
                router.push("https://www.eventsx.com/request-a-demo")
              }
            >
              Request Demo <Icons.arrow width={17} height={17} />
            </button>
            <button
              className="py-3 px-4 bg-[#0182eb] rounded-md flex items-center gap-2 hover:brightness-110 duration-150 font-semibold"
              onClick={() => router.push("https://auth.eventsx.com/")}
            >
              Sign In
              {/* <Icons.arrow width={17} height={17} /> */}
            </button>
          </div>

          <button
            onClick={() => setSideBar(!sideBar)}
            className="p-3 rounded bg-alice-white/5 block xl:hidden"
          >
            <HamburgerIcon />
          </button>
        </nav>
      </header>

      <div
        className={`fixed top-0 py-[4rem] px-4 h-full w-full bg-blue-black flex flex-col gap-8 ${
          !sideBar ? "-translate-y-full" : "z-[9999999]"
        } duration-300 `}
      >
        <div className="flex flex-col">
          {items.map((item) => (
            <LinkS
              key={item.href}
              to={item.href}
              smooth={true}
              duration={500}
              spy={true}
              onClick={() => setSideBar(!sideBar)}
              offset={item.offset}
              activeClass="active"
              className={cn(
                titilium.className,
                "hover:text-white duration-200 cursor-pointer p-4 py-3 text-alice-white/50"
              )}
            >
              {item.title}
            </LinkS>
          ))}
          <a
            href="/whitepaper.pdf"
            download
            className={cn(
              titilium.className,
              "hover:text-white duration-200 cursor-pointer p-4 py-3 text-alice-white/50"
            )}
          >
            Whitepaper
          </a>
          <a
            href="/audit-report.pdf"
            download
            className={cn(
              titilium.className,
              "hover:text-white duration-200 cursor-pointer p-4 py-3 text-alice-white/50"
            )}
          >
            Audit Report
          </a>
        </div>

        <hr className="border border-b-[#F3F7FA]/10" />

        <div className="flex flex-wrap justify-start items-center w-full gap-4">
          <button
            className="py-3 px-4 bg-[#0182eb] rounded-full flex items-center gap-2 hover:brightness-110 duration-150 font-semibold"
            onClick={() =>
              router.push("https://www.eventsx.com/request-a-demo")
            }
          >
            Request Demo <Icons.arrow width={17} height={17} />
          </button>
          <button
            className="py-3 px-4 bg-[#0182eb] rounded-md flex items-center gap-2 hover:brightness-110 duration-150 font-semibold"
            onClick={() => router.push("https://auth.eventsx.com/")}
          >
            Sign In
            {/* <Icons.arrow width={17} height={17} /> */}
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
