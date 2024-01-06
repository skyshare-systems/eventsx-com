import React from "react";
import { titilium } from "@/public/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const agency = [
  {
    name: "Maximillion",
    imgUrl: "/assets/partners/events-partner-colored-01.png",
    direction: "left",
  },
  {
    name: "Strategic Event Design",
    imgUrl: "/assets/partners/events-partner-colored-02.png",
    direction: "left",
  },
  {
    name: "dealroom",
    imgUrl: "/assets/partners/events-partner-colored-03.png",
    direction: "left",
  },
  {
    name: "Host",
    imgUrl: "/assets/partners/events-partner-colored-04.png",
    direction: "left",
  },
  {
    name: "Event Academy",
    imgUrl: "/assets/partners/events-partner-colored-05.png",
    direction: "left",
  },
  {
    name: "Endless",
    imgUrl: "/assets/partners/events-partner-colored-06.png",
    direction: "left",
  },
  {
    name: "Frog",
    imgUrl: "/assets/partners/events-partner-colored-07.png",
    direction: "left",
  },
  {
    name: "Meeting Tomorrow",
    imgUrl: "/assets/partners/events-partner-colored-08.png",
    direction: "left",
  },
  {
    name: "Strategic Event Design",
    imgUrl: "/assets/partners/events-partner-colored-02.png",
    direction: "left",
  },
  {
    name: "Event Academy",
    imgUrl: "/assets/partners/events-partner-colored-05.png",
    direction: "left",
  },
  {
    name: "Frog",
    imgUrl: "/assets/partners/events-partner-colored-07.png",
    direction: "left",
  },
  {
    name: "Maximillion",
    imgUrl: "/assets/partners/events-partner-colored-01.png",
    direction: "left",
  },
  {
    name: "Strategic Event Design",
    imgUrl: "/assets/partners/events-partner-colored-02.png",
    direction: "left",
  },
  {
    name: "dealroom",
    imgUrl: "/assets/partners/events-partner-colored-03.png",
    direction: "left",
  },
  {
    name: "Host",
    imgUrl: "/assets/partners/events-partner-colored-04.png",
    direction: "left",
  },
  {
    name: "Event Academy",
    imgUrl: "/assets/partners/events-partner-colored-05.png",
    direction: "left",
  },
  {
    name: "Endless",
    imgUrl: "/assets/partners/events-partner-colored-06.png",
    direction: "left",
  },
  {
    name: "Frog",
    imgUrl: "/assets/partners/events-partner-colored-07.png",
    direction: "left",
  },
  {
    name: "Meeting Tomorrow",
    imgUrl: "/assets/partners/events-partner-colored-08.png",
    direction: "left",
  },
  {
    name: "Strategic Event Design",
    imgUrl: "/assets/partners/events-partner-colored-02.png",
    direction: "left",
  },
  {
    name: "Event Academy",
    imgUrl: "/assets/partners/events-partner-colored-05.png",
    direction: "left",
  },
  {
    name: "Frog",
    imgUrl: "/assets/partners/events-partner-colored-07.png",
    direction: "left",
  },

  {
    name: "Endless",
    imgUrl: "/assets/partners/events-partner-colored-06.png",
    direction: "right",
  },
  {
    name: "Frog",
    imgUrl: "/assets/partners/events-partner-colored-07.png",
    direction: "right",
  },
  {
    name: "Meeting Tomorrow",
    imgUrl: "/assets/partners/events-partner-colored-08.png",
    direction: "right",
  },
  {
    name: "Future Now",
    imgUrl: "/assets/partners/events-partner-colored-09.png",
    direction: "right",
  },
  {
    name: "MDN Productions",
    imgUrl: "/assets/partners/events-partner-colored-10.png",
    direction: "right",
  },
  {
    name: "GSD Solutions",
    imgUrl: "/assets/partners/events-partner-colored-11.png",
    direction: "right",
  },
  {
    name: "Partspace",
    imgUrl: "/assets/partners/events-partner-colored-12.png",
    direction: "right",
  },
  {
    name: "Red Velvet",
    imgUrl: "/assets/partners/events-partner-colored-13.png",
    direction: "right",
  },
  {
    name: "Sherpa Group",
    imgUrl: "/assets/partners/events-partner-colored-14.png",
    direction: "right",
  },
  {
    name: "Future Now",
    imgUrl: "/assets/partners/events-partner-colored-09.png",
    direction: "right",
  },
  {
    name: "MDN Productions",
    imgUrl: "/assets/partners/events-partner-colored-10.png",
    direction: "right",
  },
  {
    name: "Endless",
    imgUrl: "/assets/partners/events-partner-colored-06.png",
    direction: "right",
  },
  {
    name: "Frog",
    imgUrl: "/assets/partners/events-partner-colored-07.png",
    direction: "right",
  },
  {
    name: "Meeting Tomorrow",
    imgUrl: "/assets/partners/events-partner-colored-08.png",
    direction: "right",
  },
  {
    name: "Future Now",
    imgUrl: "/assets/partners/events-partner-colored-09.png",
    direction: "right",
  },
  {
    name: "MDN Productions",
    imgUrl: "/assets/partners/events-partner-colored-10.png",
    direction: "right",
  },
  {
    name: "GSD Solutions",
    imgUrl: "/assets/partners/events-partner-colored-11.png",
    direction: "right",
  },
  {
    name: "Partspace",
    imgUrl: "/assets/partners/events-partner-colored-12.png",
    direction: "right",
  },
  {
    name: "Red Velvet",
    imgUrl: "/assets/partners/events-partner-colored-13.png",
    direction: "right",
  },
  {
    name: "Sherpa Group",
    imgUrl: "/assets/partners/events-partner-colored-14.png",
    direction: "right",
  },
  {
    name: "Future Now",
    imgUrl: "/assets/partners/events-partner-colored-09.png",
    direction: "right",
  },
  {
    name: "MDN Productions",
    imgUrl: "/assets/partners/events-partner-colored-10.png",
    direction: "right",
  },
];

const technology = [
  {
    name: "cloudflare",
    imgUrl: "/assets/partners/technology/agency-partner-colored-01.png",
    direction: "left",
  },
  {
    name: "AddEvent",
    imgUrl: "/assets/partners/technology/agency-partner-colored-02.png",
    direction: "left",
  },
  {
    name: "Usetiful",
    imgUrl: "/assets/partners/technology/agency-partner-colored-03.png",
    direction: "left",
  },
  {
    name: "Glassdoor",
    imgUrl: "/assets/partners/technology/agency-partner-colored-04.png",
    direction: "left",
  },
  {
    name: "Stripe",
    imgUrl: "/assets/partners/technology/agency-partner-colored-05.png",
    direction: "left",
  },
  {
    name: "Chargebee",
    imgUrl: "/assets/partners/technology/agency-partner-colored-06.png",
    direction: "left",
  },
  {
    name: "Onelogin",
    imgUrl: "/assets/partners/technology/agency-partner-colored-07.png",
    direction: "left",
  },
  {
    name: "Statuspage",
    imgUrl: "/assets/partners/technology/agency-partner-colored-08.png",
    direction: "left",
  },
  {
    name: "Zapier",
    imgUrl: "/assets/partners/technology/agency-partner-colored-09.png",
    direction: "left",
  },
  {
    name: "Calendly",
    imgUrl: "/assets/partners/technology/agency-partner-colored-10.png",
    direction: "left",
  },
  {
    name: "Agora",
    imgUrl: "/assets/partners/technology/agency-partner-colored-11.png",
    direction: "left",
  },
  {
    name: "Symbl.ai",
    imgUrl: "/assets/partners/technology/agency-partner-colored-12.png",
    direction: "left",
  },
  {
    name: "Google",
    imgUrl: "/assets/partners/technology/agency-partner-colored-13.png",
    direction: "left",
  },
  {
    name: "DocuSign",
    imgUrl: "/assets/partners/technology/agency-partner-colored-14.png",
    direction: "left",
  },
  {
    name: "Nvidia",
    imgUrl: "/assets/partners/technology/agency-partner-colored-15.png",
    direction: "left",
  },

  {
    name: "cloudflare",
    imgUrl: "/assets/partners/technology/agency-partner-colored-01.png",
    direction: "left",
  },
  {
    name: "AddEvent",
    imgUrl: "/assets/partners/technology/agency-partner-colored-02.png",
    direction: "left",
  },
  {
    name: "Usetiful",
    imgUrl: "/assets/partners/technology/agency-partner-colored-03.png",
    direction: "left",
  },
  {
    name: "Symbl.ai",
    imgUrl: "/assets/partners/technology/agency-partner-colored-12.png",
    direction: "left",
  },
  {
    name: "AWS",
    imgUrl: "/assets/partners/technology/agency-partner-colored-16.png",
    direction: "right",
  },

  {
    name: "17",
    imgUrl: "/assets/partners/technology/agency-partner-colored-17.png",
    direction: "right",
  },
  {
    name: "18",
    imgUrl: "/assets/partners/technology/agency-partner-colored-18.png",
    direction: "right",
  },

  {
    name: "19",
    imgUrl: "/assets/partners/technology/agency-partner-colored-19.png",
    direction: "right",
  },
  {
    name: "20",
    imgUrl: "/assets/partners/technology/agency-partner-colored-20.png",
    direction: "right",
  },
  {
    name: "21",
    imgUrl: "/assets/partners/technology/agency-partner-colored-21.png",
    direction: "right",
  },
  {
    name: "22",
    imgUrl: "/assets/partners/technology/agency-partner-colored-22.png",
    direction: "right",
  },

  {
    name: "23",
    imgUrl: "/assets/partners/technology/agency-partner-colored-23.png",
    direction: "right",
  },
  {
    name: "24",
    imgUrl: "/assets/partners/technology/agency-partner-colored-24.png",
    direction: "right",
  },
  {
    name: "25",
    imgUrl: "/assets/partners/technology/agency-partner-colored-25.png",
    direction: "right",
  },

  {
    name: "26",
    imgUrl: "/assets/partners/technology/agency-partner-colored-26.png",
    direction: "right",
  },
  {
    name: "27",
    imgUrl: "/assets/partners/technology/agency-partner-colored-27.png",
    direction: "right",
  },
  {
    name: "28",
    imgUrl: "/assets/partners/technology/agency-partner-colored-28.png",
    direction: "right",
  },
  {
    name: "29",
    imgUrl: "/assets/partners/technology/agency-partner-colored-29.png",
    direction: "right",
  },
  {
    name: "30",
    imgUrl: "/assets/partners/technology/agency-partner-colored-30.png",
    direction: "right",
  },

  {
    name: "22",
    imgUrl: "/assets/partners/technology/agency-partner-colored-22.png",
    direction: "right",
  },

  {
    name: "23",
    imgUrl: "/assets/partners/technology/agency-partner-colored-23.png",
    direction: "right",
  },
  {
    name: "24",
    imgUrl: "/assets/partners/technology/agency-partner-colored-24.png",
    direction: "right",
  },
  {
    name: "25",
    imgUrl: "/assets/partners/technology/agency-partner-colored-25.png",
    direction: "right",
  },
];

const web3partners = [
  {
    image: "/assets/partners/web-3-partners/image-1.jpg",
  },
  {
    image: "/assets/partners/web-3-partners/image-2.jpg",
  },
  // {
  //   image: "/assets/partners/web-3-partners/image-3.jpg",
  // },
  {
    image: "/assets/partners/web-3-partners/image-4.jpg",
  },
  {
    image: "/assets/partners/web-3-partners/image-5.jpg",
  },
  {
    image: "/assets/partners/web-3-partners/image-6.jpg",
  },
  {
    image: "/assets/partners/web-3-partners/image-7.jpg",
  },
  {
    image: "/assets/partners/web-3-partners/image-8.jpg",
  },
  {
    image: "/assets/partners/web-3-partners/image-9.jpg",
  },
  {
    image: "/assets/partners/web-3-partners/image-10.jpg",
  },
  {
    image: "/assets/partners/web-3-partners/image-11.jpg",
  },
  {
    image: "/assets/partners/web-3-partners/image-12.jpg",
  },
  {
    image: "/assets/partners/web-3-partners/image-13.jpg",
  },
  {
    image: "/assets/partners/web-3-partners/image-14.jpg",
  },
  {
    image: "/assets/partners/web-3-partners/image-15.jpg",
  },
  {
    image: "/assets/partners/web-3-partners/image-16.jpg",
  },
  {
    image: "/assets/partners/web-3-partners/image-17.jpg",
  },
  {
    image: "/assets/partners/web-3-partners/image-18.jpg",
  },
  {
    image: "/assets/partners/web-3-partners/image-19.jpg",
  },
  {
    image: "/assets/partners/web-3-partners/image-20.jpg",
  },
  {
    image: "/assets/partners/web-3-partners/image-21.jpg",
  },
  {
    image: "/assets/partners/web-3-partners/image-22.jpg",
  },
  {
    image: "/assets/partners/web-3-partners/image-23.jpg",
  },
  {
    image: "/assets/partners/web-3-partners/image-25.jpg",
  },
  {
    image: "/assets/partners/web-3-partners/image-24.jpg",
  },
  {
    image: "/assets/partners/web-3-partners/image-25.jpg",
  },
  {
    image: "/assets/partners/web-3-partners/image-26.png",
  },
  {
    image: "/assets/partners/web-3-partners/image-27.jpg",
  },
  {
    image: "/assets/partners/web-3-partners/image-28.jpg",
  },
  {
    image: "/assets/partners/web-3-partners/image-29.png",
  },
  {
    image: "/assets/partners/web-3-partners/image-30.png",
  },
  {
    image: "/assets/partners/web-3-partners/image-31.png",
  },
  {
    image: "/assets/partners/web-3-partners/image-32.png",
  },
  {
    image: "/assets/partners/web-3-partners/image-33.png",
  },
  {
    image: "/assets/partners/web-3-partners/image-34.png",
  },
  {
    image: "/assets/partners/web-3-partners/image-35.png",
  },
  {
    image: "/assets/partners/web-3-partners/image-36.png",
  },
  {
    image: "/assets/partners/web-3-partners/image-37.png",
  },
  {
    image: "/assets/partners/web-3-partners/image-38.png",
  },
  // {
  //   image: "/assets/partners/web-3-partners/image-39.jpg",
  // },
  {
    image: "/assets/partners/web-3-partners/image-40.png",
  },
  {
    image: "/assets/partners/web-3-partners/image-41.png",
  },
  {
    image: "/assets/partners/web-3-partners/image-42.png",
  },
  {
    image: "/assets/partners/web-3-partners/image-43.png",
  },
  {
    image: "/assets/partners/web-3-partners/image-44.png",
  },
  {
    image: "/assets/partners/web-3-partners/image-45.png",
  },
  {
    image: "/assets/partners/web-3-partners/image-46.png",
  },
  // {
  //   image: "/assets/partners/web-3-partners/image-47.jpg",
  // },
  // {
  //   image: "/assets/partners/web-3-partners/image-48.jpg",
  // },
  {
    image: "/assets/partners/web-3-partners/image-49.jpg",
  },
  {
    image: "/assets/partners/web-3-partners/image-50.jpg",
  },
  {
    image: "/assets/partners/web-3-partners/image-51.jpg",
  },
  {
    image: "/assets/partners/web-3-partners/image-52.jpg",
  },
];

const Partners = () => {
  return (
    <div className="flex justify-center items-center" id="partners">
      <div className="flex flex-col gap-16 items-center grow pt-2 pb-16 max-w-[1920px]">
        <h1
          className={cn(
            titilium.className,
            "text-[3.815rem] text-alice-white/100 font-normal"
          )}
        >
          Partners
        </h1>

        <div className="flex flex-col items-center gap-8 w-full grow">
          <h1
            className={cn(
              titilium.className,
              "text-xl sm:text-[1.95313rem] text-alice-white/50 font-semibold"
            )}
          >
            Event Agency Partners
          </h1>

          <Marquee pauseOnHover direction="left">
            <div className="flex flex-wrap items-center gap-8 w-full last:mr-4">
              {agency
                .filter((filterdata) => {
                  return filterdata.direction === "left";
                })
                .map((data, index) => {
                  return (
                    <img
                      src={data.imgUrl}
                      alt={data.name}
                      height={140}
                      width={140}
                      className="brightness-0 invert hover:brightness-100 hover:invert-0 duration-150 hover:bg-alice-white rounded-lg p-2"
                      key={index}
                    />
                  );
                })}
            </div>
          </Marquee>

          <Marquee pauseOnHover direction="right">
            <div className="flex flex-wrap items-center gap-8 w-full last:mr-4">
              {agency
                .filter((filterdata) => {
                  return filterdata.direction === "right";
                })
                .map((data, index) => {
                  return (
                    <img
                      src={data.imgUrl}
                      alt={data.name}
                      height={140}
                      width={140}
                      className="brightness-0 invert hover:brightness-100 hover:invert-0 duration-150 hover:bg-alice-white rounded-lg p-2"
                      key={index}
                    />
                  );
                })}
            </div>
          </Marquee>
        </div>

        <div className="flex flex-col items-center gap-8 w-full grow">
          <h1
            className={cn(
              titilium.className,
              "text-xl sm:text-[1.95313rem] text-alice-white/50 font-semibold"
            )}
          >
            Technological Partners
          </h1>

          <Marquee pauseOnHover direction="left">
            <div className="flex flex-wrap items-center gap-8 w-full last:mr-4">
              {technology
                .filter((filterdata) => {
                  return filterdata.direction === "left";
                })
                .map((data, index) => {
                  return (
                    <img
                      src={data.imgUrl}
                      alt={data.name}
                      height={140}
                      width={140}
                      className="brightness-0 invert hover:brightness-100 hover:invert-0 duration-150 hover:bg-alice-white rounded-lg p-2"
                      key={index}
                    />
                  );
                })}
            </div>
          </Marquee>

          <Marquee pauseOnHover direction="right">
            <div className="flex flex-wrap items-center gap-8 w-full last:mr-4">
              {technology
                .filter((filterdata) => {
                  return filterdata.direction === "right";
                })
                .map((data, index) => {
                  return (
                    <img
                      src={data.imgUrl}
                      alt={data.name}
                      height={140}
                      width={140}
                      className="brightness-0 invert hover:brightness-100 hover:invert-0 duration-150 hover:bg-alice-white rounded-lg p-2"
                      key={index}
                    />
                  );
                })}
            </div>
          </Marquee>
        </div>

        <div className="flex flex-col items-center gap-8 w-full grow max-w-[1200px]">
          <h1
            className={cn(
              titilium.className,
              "text-xl sm:text-[1.95313rem] text-alice-white/50 font-semibold"
            )}
          >
            Web 3 Partners
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-8 w-full">
            {web3partners.map((data, index) => {
              return (
                <Image
                  key={index}
                  src={data.image}
                  alt={data.image}
                  height={140}
                  width={140}
                  unoptimized
                  className="w-full h-auto max-w-[140px] aspect-square object-cover object-center	 grayscale duration-300 hover:grayscale-0 hover:scale-105 p-[2px] rounded-xl"
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
