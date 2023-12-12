"use client";
import { cn } from "@/lib/utils";
import { titilium } from "@/public/fonts";
import { StoryCardContent } from "@/types";
import StoryCard from "./story-card";
import CardNFT from "./CardNFT";
import Image from "next/image";
import NFTCardSwiper from "../NftCardSwiper";
import { useState } from "react";

const NFTImplementation = () => {
  const storyCards: StoryCardContent[] = [
    {
      image: "/assets/nft-implementation/1st.png",
      title: "Unique NFT Ticketing System",
      descriptions: [
        "Harness the power of blockchain for exclusive, verifiable, and tradable event tickets.",
        "Dive into 4,000 distinct NFTs, including premium and VIP experiences.",
      ],
    },
    {
      image: "/assets/nft-implementation/2nd.png",
      title: "Tamper-Proof Security",
      descriptions: [
        "Eliminate counterfeit tickets and unauthorized entries.",
        "Showcase and celebrate your attendance with verifiable ownership in a prestigious community.",
      ],
    },
    {
      image: "/assets/nft-implementation/image-3.png",
      title: "Vibrant Event Economy",
      descriptions: [
        "Engage in a dynamic secondary market for trading, selling, or exchanging NFT tickets.",
        "Incentivize early adoption and active participation within the EventsX community.",
      ],
    },
  ];

  const [swiper, setSwiper] = useState<any>(null);

  const nexto = () => {
    swiper.slideNext();
  };
  const backto = () => {
    swiper.slidePrev();
  };

  return (
    <section
      id="nft-implementation"
      className="py-16  md:p-16 bg-[url('/assets/nft-implementation/bottom-glow.png')] bg-contain bg-no-repeat bg-top"
    >
      <div className="max-w-[64rem] mx-auto px-4 xl:px-0">
        <div className="flex items-center flex-col space-y-4 max-w-[39.8rem] mx-auto">
          <h2
            className={cn(
              titilium.className,
              "text-2xl sm:text-[3.05188rem] sm:leading-[4rem] md:px-[3.052rem] leading-none",
              "text-center bg-clip-text",
              "story-gradient"
            )}
          >
            Dive into a World where every Ticket tells a Story
          </h2>
          <p
            className={cn(
              titilium.className,
              "text-alice-white/50 leading-5 text-center"
            )}
          >
            Harnessing the pioneering power of blockchain technology, we present
            to you a stellar leap in the event ticketing domain —{" "}
            <span className="font-semibold">NFT Tickets</span>. Each one, not
            just a key to access, but a unique, verifiable, and tradable asset,
            carving your place in the vibrant tapestry of memorable events.
          </p>
        </div>

        <ul className="my-16 flex flex-col md:flex-row justify-center items-center gap-16 md:gap-8 flex-wrap">
          {storyCards.map((story) => (
            <li key={story.title}>
              <StoryCard card={story} />
            </li>
          ))}
        </ul>
      </div>

      <div className="max-w-[90rem] mx-auto px-4">
        <div className="max-w-[37.1rem] mx-auto space-y-2">
          <h2
            className={cn(
              titilium.className,
              "text-[1.95313rem] font-semibold leading-[2.5rem] text-alice-white text-left sm:text-center"
            )}
          >
            Exclusive, Inclusive, and Excitingly Tradeable
          </h2>
          <p
            className={cn(
              titilium.className,
              "text-alice-white/50 leading-5 text-left sm:text-center"
            )}
          >
            In our first release, explore 4,000 NFTs, each embodying distinct
            characteristics and functionalities, tailor-made for diverse event
            experiences.
          </p>
        </div>
        <div className="flex flex-wrap  items-center justify-center  gap-8 my-8">
          <CardNFT
            radialColor={"rgba(243, 247, 250, 0.32)"}
            image={"/assets/nft-implementation/general-icon.png"}
            quantity={2500}
            name={"General NFTs"}
            description={
              "Embark on exciting journeys with our generic tickets, providing a spectrum of attendees a golden ticket to participate and relish the events that unfold."
            }
            borderColor={
              "border-alice-white/8 hover:bg-alice-white/5 duration-150"
            }
          />

          <CardNFT
            radialColor={"#8721EE"}
            image={"/assets/nft-implementation/vip-icon.png"}
            quantity={400}
            name={"VIP NFTs"}
            description={
              "Step into priority lanes, receiving enhanced privileges and ahead-of-the-line access, to ensure your event experience is nothing short of stellar."
            }
            borderColor={
              "border-alice-white/8 hover:border-[#7200FF52] hover:bg-[#7200FF0A] duration-150"
            }
          />

          <CardNFT
            radialColor={"#008DFF"}
            image={"/assets/nft-implementation/premium-icon.png"}
            quantity={100}
            name={"Premium NFTs"}
            description={
              "Unlock the doors to a world of premium experiences, with exclusive access to luxurious event perks only available to our premium ticket holders."
            }
            borderColor={
              "border-alice-white/8 hover:border-[#008DFF52] hover:bg-[#008DFF0A] duration-150"
            }
          />
        </div>

        <div className="flex flex-col gap-8 justify-center items-center">
          <h2
            className={cn(
              titilium.className,
              "font-semibold leading-[2.5rem] text-left sm:text-center"
            )}
          >
            <span className="text-[1.95313rem] text-alice-white">
              Your 🔑 to all Events
            </span>
            <br />
            <span className="text-alice-white/50">
              {" "}
              Experience all immersive events on our platform with the EventsX
              NFT pass.
            </span>
          </h2>

          <div className="flex flex-row items-center gap-2 w-full max-w-[250px] sm:max-w-[600px]">
            <button
              onClick={backto}
              className="p-1 bg-alice-white/5 rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
              >
                <path
                  d="M11.3775 3.60462C11.1591 3.30815 10.7418 3.24483 10.4453 3.46317C10.2151 3.63277 9.99621 3.8024 9.80554 3.95118C9.42501 4.24819 8.91527 4.65707 8.40367 5.10131C7.89534 5.54267 7.36981 6.03202 6.96615 6.48888C6.76499 6.71652 6.57999 6.95185 6.44167 7.18132C6.31438 7.39245 6.17407 7.68259 6.17407 7.99999C6.17407 8.31739 6.31438 8.60759 6.44167 8.81872C6.57999 9.04819 6.76499 9.28345 6.96615 9.51112C7.36981 9.96799 7.89534 10.4573 8.40367 10.8987C8.91527 11.3429 9.42501 11.7518 9.80554 12.0489C9.99621 12.1976 10.2151 12.3673 10.4453 12.5369C10.7418 12.7552 11.1591 12.6919 11.3775 12.3954C11.4653 12.2762 11.5075 12.1375 11.5074 12.0001V7.99999V3.99997C11.5075 3.8625 11.4653 3.72379 11.3775 3.60462Z"
                  fill="#F3F7FA"
                  fillOpacity="0.72"
                />
              </svg>
            </button>

            <NFTCardSwiper setSwiper={setSwiper} />

            <button
              onClick={nexto}
              className="p-1 bg-alice-white/5 rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
              >
                <path
                  d="M6.30447 3.60462C6.52281 3.30815 6.94014 3.24483 7.2366 3.46317C7.46687 3.63277 7.68579 3.80239 7.87639 3.95117C8.25699 4.24819 8.76666 4.65707 9.27833 5.10131C9.78666 5.54266 10.3121 6.03202 10.7158 6.48888C10.917 6.71653 11.102 6.95187 11.2403 7.18127C11.3676 7.39247 11.5079 7.6826 11.5079 8C11.5079 8.3174 11.3676 8.60753 11.2403 8.81873C11.102 9.04813 10.917 9.28347 10.7158 9.51113C10.3121 9.968 9.78666 10.4573 9.27833 10.8987C8.76666 11.3429 8.25699 11.7518 7.87639 12.0488C7.68579 12.1976 7.46687 12.3673 7.23661 12.5368C6.94014 12.7552 6.52281 12.6919 6.30447 12.3954C6.21669 12.2762 6.17445 12.1375 6.17456 12.0001V8V3.99996C6.17445 3.8625 6.21669 3.72379 6.30447 3.60462Z"
                  fill="#F3F7FA"
                  fillOpacity="0.72"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NFTImplementation;
