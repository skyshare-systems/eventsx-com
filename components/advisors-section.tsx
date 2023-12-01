import { cn } from "@/lib/utils";
import { titilium } from "@/public/fonts";
import React from "react";
import AdvisorCard from "@/components/advisor-card";
import Marquee from "react-fast-marquee";

const Advisors = () => {
  const advisorCards = [
    {
      image: "/assets/advisors/franco.png",
      advisorName: "Franco de la Croix-Vaubois",
      title: "Communities",
      linkUrl: "https://www.linkedin.com/in/globalvillage/",
      category: "Web2",
    },
    {
      image: "/assets/advisors/david.png",
      advisorName: "David Martin",
      title: "Operations",
      linkUrl: "https://www.linkedin.com/in/davidmartin-ethersolutions/",
      category: "Web2",
    },
    {
      image: "/assets/advisors/stephanie.png",
      advisorName: "Stephanie Loeffler-Reading",
      title: "IP & Legal",
      linkUrl:
        "https://www.linkedin.com/in/stephanie-loeffler-reading-6b00605/",
      category: "Web2",
    },
    {
      image: "/assets/advisors/munib.png",
      advisorName: "Munib Ali",
      title: "Regulation",
      linkUrl: "https://www.linkedin.com/in/munibali2/",
      category: "Web2",
    },
    {
      image: "/assets/advisors/vikrams.png",
      advisorName: "Vikram Modgil",
      title: "Artificial Intelligence",
      linkUrl: "https://www.linkedin.com/in/voice-ai/",
      category: "Web2",
    },

    {
      image: "/assets/advisors/amrit.png",
      advisorName: "Amrit Mirchandani",
      title: "Marketing",
      linkUrl: "https://www.linkedin.com/in/amrit-mirchandani/",
      category: "Web3",
    },

    {
      image: "/assets/advisors/sundeep.png",
      advisorName: "Sundeep Krishna Siripurapu",
      title: "Web3 Strategy",
      linkUrl:
        "https://www.linkedin.com/in/sundeep-krishna-siripurapu-95575862/",
      category: "Web3",
    },

    {
      image: "/assets/advisors/ed-saunders.png",
      advisorName: "Ed Saunders",
      title: "Tokenomics, NFT & fundraising",
      linkUrl: "https://www.linkedin.com/in/ed-saunders/",
      category: "Web3",
    },

    {
      image: "/assets/advisors/kayla.png",
      advisorName: "Kayla Hopley",
      title: "Community Building & Growth",
      linkUrl: "https://www.linkedin.com/in/kaylahopley/",
      category: "Web3",
    },

    {
      image: "/assets/advisors/riz.png",
      advisorName: "Riz Mohamed",
      title: "Partnerships & Collaboration",
      linkUrl: "https://www.linkedin.com/in/riz-mohamed-22796a229/",
      category: "Web3",
    },

    {
      image: "/assets/advisors/bigboychinese.png",
      advisorName: "BigBoyChinese (Ben)",
      title: "Web3 and fundraising",
      linkUrl: "https://www.linkedin.com/in/bigboychinese-ben-976791258/",
      category: "Web3",
    },
  ];

  return (
    <section id="advisors" className="flex justify-center items-center my-16">
      <div className="flex flex-col items-center gap-8 sm:gap-16">
        <div className="flex flex-col gap-8 sm:items-center justify-center w-full max-w-[39.125rem] px-4 xl:px-0">
          <h2
            className={cn(
              titilium.className,
              "text-white leading-none sm:leading-[4.875rem] text-2xl sm:text-[3.815rem] text-left sm:text-center"
            )}
          >
            The Advisors
          </h2>
          <p
            className={cn(
              titilium.className,
              "text-alice-white/50 leading-5 text-left sm:text-center"
            )}
          >
            EventsX benefits from the guidance and expertise of esteemed
            advisors, who provide valuable insights and industry knowledge to
            steer the platform toward success. The advisory board comprises
            notable experts from various sectors, including events, technology,
            finance, and marketing, ensuring a well-rounded and informed
            approach to decision-making.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4  max-w-[1240px] w-full mx-auto sm:my-8">
          {/* {advisorCards.map((advisor, index) => (
            <AdvisorCard
              key={index}
              name={advisor.advisorName}
              imgUrl={advisor.image}
              title={advisor.title}
              linkUrl={advisor.linkUrl}
            />
          ))} */}

          <h2
            className={cn(
              titilium.className,
              "text-white leading-none sm:leading-[4.875rem] text-2xl sm:text-[2rem] text-left sm:text-center"
            )}
          >
            Web 2 Advisor
          </h2>
          <Marquee
            gradient
            gradientColor="#0C141B, #0C141B00"
            pauseOnHover
            className="w-full my-4 overflow-y-hidden"
          >
            <div className=" justify-center items-center gap-[3rem] last:mr-[3rem] hidden sm:flex">
              {advisorCards
                .filter((filterdata) => filterdata.category === "Web2")
                .map((advisor, index) => (
                  <AdvisorCard
                    key={index}
                    name={advisor.advisorName}
                    imgUrl={advisor.image}
                    title={advisor.title}
                    linkUrl={advisor.linkUrl}
                  />
                ))}
            </div>
          </Marquee>
          <Marquee pauseOnHover className="w-full my-4 overflow-y-hidden">
            <div className="flex sm:hidden justify-center items-center gap-4 last:mr-4 ">
              {advisorCards
                .filter((filterdata) => filterdata.category === "Web2")
                .map((advisor) => (
                  <AdvisorCard
                    key={advisor.advisorName}
                    name={advisor.advisorName}
                    imgUrl={advisor.image}
                    title={advisor.title}
                    linkUrl={advisor.linkUrl}
                  />
                ))}
            </div>
          </Marquee>

          <h2
            className={cn(
              titilium.className,
              "text-white leading-none sm:leading-[4.875rem] text-2xl sm:text-[2rem] text-left sm:text-center"
            )}
          >
            Web 3 Advisor
          </h2>
          <Marquee
            gradient
            gradientColor="#0C141B, #0C141B00"
            pauseOnHover
            direction="right"
            className="w-full my-4 overflow-y-hidden"
          >
            <div className=" justify-center items-center gap-[3rem] last:mr-[3rem] hidden sm:flex">
              {advisorCards
                .filter((filterdata) => filterdata.category === "Web3")
                .map((advisor, index) => (
                  <AdvisorCard
                    key={index}
                    name={advisor.advisorName}
                    imgUrl={advisor.image}
                    title={advisor.title}
                    linkUrl={advisor.linkUrl}
                  />
                ))}
            </div>
          </Marquee>
          <Marquee
            pauseOnHover
            direction="right"
            className="w-full my-4 overflow-y-hidden"
          >
            <div className="flex sm:hidden justify-center items-center gap-4 last:mr-4 ">
              {advisorCards
                .filter((filterdata) => filterdata.category === "Web3")
                .map((advisor) => (
                  <AdvisorCard
                    key={advisor.advisorName}
                    name={advisor.advisorName}
                    imgUrl={advisor.image}
                    title={advisor.title}
                    linkUrl={advisor.linkUrl}
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
