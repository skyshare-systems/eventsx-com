import { cn } from "@/lib/utils";
import { titilium } from "@/public/fonts";
import { StoryCardContent } from "@/types";
import StoryCard from "./story-card";
import CardNFT from "./CardNFT";
import Image from "next/image";
import NFTCardSwiper from "../NftCardSwiper";

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

          <NFTCardSwiper />
        </div>
      </div>
    </section>
  );
};

export default NFTImplementation;
