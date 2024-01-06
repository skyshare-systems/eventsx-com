"use client";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { titilium } from "@/public/fonts";
import Image from "next/image";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
// import {
//   Chart as ChartJS,
//   BarElement,
//   CategoryScale,
//   LinearScale,
//   Tooltip as tooltipChart,
//   Legend,
// } from "chart.js";

// import { Chart, ArcElement } from "chart.js";
// Chart.register(ArcElement);

// ChartJS.register(BarElement, CategoryScale, LinearScale, tooltipChart, Legend);
import TokenomicsChart from "@/public/assets/tokenomics/tokenomics.svg";
import TokenomicsCard from "@/components/TokenomicsCard";
import TokenomicsCardV2 from "@/components/ui/TokenomicsCardV2";

const tokenomics = [
  {
    idanimate: "tokenomics_svg__economy",
    title: "EventsX Economy",
    color: "bg-[#008dff]",
    percentage: 20,
    description: (
      <div className="p-4 rounded-lg max-w-[700px] w-full bg-alice-white/5 backdrop-blur flex flex-col gap-2">
        <h1
          className={cn(
            titilium.className,
            "",
            "text-base font-normal text-alice-white/70"
          )}
        >
          The EventsX Economy, with the largest allocation of 20%, forms the
          core of the platform. This substantial portion fuels the platform's
          internal economic system, facilitating transactions, incentivizing
          user engagement, and nurturing a vibrant event ecosystem within
          EventsX.
        </h1>

        <hr className="border border-b-[#F3F7FA]/10" />

        <div className="flex flex-wrap justify-between gap-2">
          <TokenomicsCard title={"Tokens"} subTitle={"200,000,000"} />
          <TokenomicsCard title={"Release at TGE"} subTitle={"20%"} />
          <TokenomicsCard title={"Cliff"} subTitle={"T + 6"} />
          <TokenomicsCard title={"Vesting Duration"} subTitle={"18 months"} />
        </div>
      </div>
    ),
  },
  {
    idanimate: "tokenomics_svg__treasury-fund",
    title: "EventsX Treasury Fund",
    color: "bg-[#0486ff]",
    percentage: 19,
    description: (
      <div className="p-4 rounded-lg max-w-[609px] w-full bg-alice-white/5 backdrop-blur flex flex-col gap-2">
        <h1
          className={cn(
            titilium.className,
            "",
            "text-base font-normal text-alice-white/70"
          )}
        >
          The EventsX Treasury Fund, with a substantial allocation of 19%, acts
          as a financial backbone for the project. These reserved resources are
          earmarked for ongoing platform development, innovation, and future
          initiatives, ensuring EventsX's sustained growth and adaptability in
          the ever-evolving blockchain landscape.
        </h1>

        <hr className="border border-b-[#F3F7FA]/10" />

        <div className="flex flex-wrap justify-between">
          <TokenomicsCard title={"Tokens"} subTitle={"190,000,000"} />
          <TokenomicsCard title={"Release at TGE"} subTitle={"0%"} />
          <TokenomicsCard title={"Cliff"} subTitle={"T + 24"} />
          <TokenomicsCard title={"Vesting Duration"} subTitle={"25 months"} />
        </div>
      </div>
    ),
  },
  // seed sale
  {
    idanimate: "tokenomics_svg__seed-sale",
    title: "LBP",
    color: "bg-[#187eff]",
    percentage: 17,
    description: (
      <div className="p-4 rounded-lg max-w-[609px] w-full bg-alice-white/5 backdrop-blur flex flex-col gap-2">
        <h1
          className={cn(
            titilium.className,
            "",
            "text-base font-normal text-alice-white/70"
          )}
        >
          The LBP, constituting 17% of the tokenomics, represents the initial
          phase of token distribution. During this stage, a limited supply of
          tokens is offered to early supporters and investors at a favorable
          price, enabling them to participate in the project's growth from its
          inception.
        </h1>

        <hr className="border border-b-[#F3F7FA]/10" />

        <div className="flex flex-col gap-[0.5rem] grow">
          <div className="flex flex-wrap justify-between gap-2">
            <TokenomicsCard title={"Tokens"} subTitle={"170,000,000"} />
            <TokenomicsCard title={"Release at TGE"} subTitle={"100%"} />
            <TokenomicsCard title={"Cliff"} subTitle={"T + 0"} />
            <TokenomicsCard title={"Vesting Duration"} subTitle={"0 months"} />
          </div>
          {/* <div className="flex flex-wrap gap-4 grow">
            <TokenomicsCard title={"Price"} subTitle={"$0.018"} />
            <TokenomicsCard title={"Discount"} subTitle={"25%"} />
            <TokenomicsCard title={"Total Raise"} subTitle={"3,060,000"} />
          </div> */}
        </div>
      </div>
    ),
  },
  // future funding 1
  {
    idanimate: "tokenomics_svg__future-funding-1",
    title: "Future Funding 1",
    color: "bg-[#2a76ff]",
    percentage: 5,
    description: (
      <div className="p-4 rounded-lg max-w-[609px] w-full bg-alice-white/5 backdrop-blur flex flex-col gap-2">
        <h1
          className={cn(
            titilium.className,
            "",
            "text-base font-normal text-alice-white/70"
          )}
        >
          As EventsX propels into the future, Future Funding 1 secures a
          forward-looking 10% of our tokenomics. This allocation is
          strategically positioned to fortify our long-term vision, supporting
          upcoming initiatives, expansions, and breakthroughs that will shape
          the next chapters of EventsX.
        </h1>

        <hr className="border border-b-[#F3F7FA]/10" />

        <div className="flex flex-wrap justify-between gap-2">
          <TokenomicsCard title={"Tokens"} subTitle={"100,000,000"} />
          <TokenomicsCard title={"Release at TGE"} subTitle={"0%"} />
          <TokenomicsCard title={"Cliff"} subTitle={"T + 6"} />
          <TokenomicsCard title={"Vesting Duration"} subTitle={"12 months"} />
        </div>
      </div>
    ),
  },
  // future funding 2
  {
    idanimate: "tokenomics_svg__future-funding-2",
    title: "Future Funding 2",
    color: "bg-[#3b6dff]",
    percentage: 8,
    description: (
      <div className="p-4 rounded-lg max-w-[609px] w-full bg-alice-white/5 backdrop-blur flex flex-col gap-2">
        <h1
          className={cn(
            titilium.className,
            "",
            "text-base font-normal text-alice-white/70"
          )}
        >
          Positioned at the forefront of innovation, Future Funding 2 comprises
          10% of our tokenomics, serving as a financial catalyst for EventsX's
          continuous evolution. With a focus on sustainability and adaptability,
          this allocation is earmarked for pioneering projects, technological
          advancements, and unforeseen opportunities that will define our
          trajectory in the dynamic blockchain landscape.
        </h1>

        <hr className="border border-b-[#F3F7FA]/10" />

        <div className="flex flex-col gap-[0.5rem] grow">
          <div className="flex flex-wrap justify-between gap-2">
            <TokenomicsCard title={"Tokens"} subTitle={"100,000,000"} />
            <TokenomicsCard title={"Release at TGE"} subTitle={"0%"} />
            <TokenomicsCard title={"Cliff"} subTitle={"T + 12"} />
            <TokenomicsCard title={"Vesting Duration"} subTitle={"12 months"} />
          </div>
          {/* <div className="flex flex-wrap gap-4 grow">
            <TokenomicsCard title={"Price"} subTitle={"$0.0075"} />
            <TokenomicsCard title={"Discount"} subTitle={"25%"} />
            <TokenomicsCard title={"Total Raise"} subTitle={"600,000"} />
          </div> */}
        </div>
      </div>
    ),
  },
  // team
  {
    idanimate: "tokenomics_svg__team",
    title: "Team",
    color: "bg-[#4c63ff]",
    percentage: 5,
    description: (
      <div className="p-4 rounded-lg max-w-[609px] w-full bg-alice-white/5 backdrop-blur flex flex-col gap-2">
        <h1
          className={cn(
            titilium.className,
            "",
            "text-base font-normal text-alice-white/70"
          )}
        >
          The Team allocation, accounting for 8% of the tokenomics, is dedicated
          to the skilled professionals driving EventsX's development. This
          allocation serves as a motivation for the team's hard work and
          expertise, aligning their interests with the project's long-term
          success.
        </h1>

        <hr className="border border-b-[#F3F7FA]/10" />

        <div className="flex flex-col gap-[0.5rem] grow">
          <div className="flex flex-wrap justify-between gap-2">
            <TokenomicsCard title={"Tokens"} subTitle={"80,000,000"} />
            <TokenomicsCard title={"Release at TGE"} subTitle={"0%"} />
            <TokenomicsCard title={"Cliff"} subTitle={"T + 4"} />
            <TokenomicsCard title={"Vesting Duration"} subTitle={"12 months"} />
          </div>
          {/* <div className="flex flex-wrap gap-4 grow">
            <TokenomicsCard title={"Price"} subTitle={"$0.005"} />
            <TokenomicsCard title={"Discount"} subTitle={"50%"} />
            <TokenomicsCard title={"Total Raise"} subTitle={"250,000"} />
          </div> */}
        </div>
      </div>
    ),
  },
  // partnership
  {
    idanimate: "tokenomics_svg__partnerships",
    title: "Partnerships",
    color: "bg-[#5c57fe]",
    percentage: 4,
    description: (
      <div className="p-4 rounded-lg max-w-[609px] w-full bg-alice-white/5 backdrop-blur flex flex-col gap-2">
        <h1
          className={cn(
            titilium.className,
            "",
            "text-base font-normal text-alice-white/70"
          )}
        >
          The Partnerships allocation, comprising 5% of the tokenomics, is
          dedicated to collaborations with other companies or platforms. These
          strategic partnerships enhance EventsX's offerings, fostering
          integrations, joint marketing efforts, and cooperative ventures that
          strengthen the platform's position in the market.
        </h1>

        <hr className="border border-b-[#F3F7FA]/10" />

        <div className="flex flex-wrap justify-between gap-2">
          <TokenomicsCard title={"Tokens"} subTitle={"50,000,000"} />
          <TokenomicsCard title={"Release at TGE"} subTitle={"0%"} />
          <TokenomicsCard title={"Cliff"} subTitle={"T + 1"} />
          <TokenomicsCard title={"Vesting Duration"} subTitle={"12 months"} />
        </div>
      </div>
    ),
  },
  // liquidity
  {
    idanimate: "tokenomics_svg__liquidity",
    title: "Advisors",
    color: "bg-[#6b4afa]",
    percentage: 3,
    description: (
      <div className="p-4 rounded-lg max-w-[609px] w-full bg-alice-white/5 backdrop-blur flex flex-col gap-2">
        <h1
          className={cn(
            titilium.className,
            "",
            "text-base font-normal text-alice-white/70"
          )}
        >
          Liquidity, with a 5% allocation, focuses on ensuring the availability
          of EventsX tokens in the market. This reserved portion contributes to
          liquidity pools, allowing for seamless trading of tokens and
          maintaining stable market conditions.
        </h1>

        <hr className="border border-b-[#F3F7FA]/10" />

        <div className="flex flex-wrap justify-between gap-2">
          <TokenomicsCard title={"Tokens"} subTitle={"50,000,000"} />
          <TokenomicsCard title={"Release at TGE"} subTitle={"100%"} />
          {/* <TokenomicsCard title={"Cliff"} subTitle={"T + 3"} />
          <TokenomicsCard title={"Vesting Duration"} subTitle={"15 months"} /> */}
        </div>
      </div>
    ),
  },
  // marketing
  {
    idanimate: "tokenomics_svg__marketing",
    title: "Marketing",
    color: "bg-[#793af4]",
    percentage: 4,
    description: (
      <div className="p-4 rounded-lg max-w-[609px] w-full bg-alice-white/5 backdrop-blur flex flex-col gap-2">
        <h1
          className={cn(
            titilium.className,
            "",
            "text-base font-normal text-alice-white/70"
          )}
        >
          The Marketing allocation, representing 3% of the tokens, is utilized
          for strategic campaigns and outreach initiatives. This investment
          ensures widespread awareness about EventsX, attracting users,
          investors, and event organizers to the platform.
        </h1>

        <hr className="border border-b-[#F3F7FA]/10" />

        <div className="flex flex-col gap-[0.5rem] grow">
          <div className="flex flex-wrap justify-between gap-2">
            <TokenomicsCard title={"Tokens"} subTitle={"30,000,000"} />
            <TokenomicsCard title={"Release at TGE"} subTitle={"30%"} />
            <TokenomicsCard title={"Cliff"} subTitle={"T + 1"} />
            <TokenomicsCard title={"Vesting Duration"} subTitle={"7 months"} />
          </div>
          {/* <div className="flex flex-wrap gap-4 grow">
            <TokenomicsCard title={"Price"} subTitle={"$0.01"} />
            <TokenomicsCard title={"Discount"} subTitle={"0%"} />
            <TokenomicsCard title={"Total Raise"} subTitle={"400,000"} />
          </div> */}
        </div>
      </div>
    ),
  },
  // advisors
  {
    idanimate: "tokenomics_svg__advisors",
    title: "Advisors",
    color: "bg-[#793af4]",
    percentage: 3,
    description: (
      <div className="p-4 rounded-lg max-w-[609px] w-full bg-alice-white/5 backdrop-blur flex flex-col gap-2">
        <h1
          className={cn(
            titilium.className,
            "",
            "text-base font-normal text-alice-white/70"
          )}
        >
          The Marketing allocation, representing 3% of the tokens, is utilized
          for strategic campaigns and outreach initiatives. This investment
          ensures widespread awareness about EventsX, attracting users,
          investors, and event organizers to the platform.
        </h1>

        <hr className="border border-b-[#F3F7FA]/10" />

        <div className="flex flex-wrap justify-start gap-2">
          <TokenomicsCard title={"Tokens"} subTitle={"30,000,000"} />
          <TokenomicsCard title={"Release at TGE"} subTitle={"30%"} />
          <TokenomicsCard title={"Cliff"} subTitle={"T + 1"} />
          <TokenomicsCard title={"Vesting Duration"} subTitle={"7 months"} />
        </div>
      </div>
    ),
  },
];

const Tokenomics = () => {
  const [description, setDescription] = useState<any>();

  const CustomWidthTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))({
    [`& .${tooltipClasses.tooltip}`]: {
      maxWidth: 393,
      backgroundColor: "transparent",
      color: "white",
    },
  });

  tokenomics.map(({ idanimate, description }) => {
    useEffect(() => {
      const id = document.getElementById(idanimate);

      id?.addEventListener("mouseover", () => {
        setDescription(description);
      });
    }, []);
  });

  return (
    <div id="EVEX-token" className="flex justify-center items-center py-4">
      <div className="flex flex-col gap-16 px-4 sm:pt-0 sm:p-8 max-w-[1300px] relative">
        <Image
          src={"/assets/tokenomics/bg-glow.png"}
          alt={"Glow"}
          height={500}
          width={500}
          className="absolute top-[0] left-1/2 transform -translate-x-1/2 -translate-y-[0] w-full max-w-[1000px] -z-[1]"
        />
        <Image
          src={"/assets/tokenomics/circle-image.png"}
          alt={"ball"}
          height={250}
          width={1250}
        />
        <div className="flex flex-col gap-4 p-4">
          <h1
            className={cn(
              titilium.className,
              "text-left text-2xl sm:text-[3.051rem] sm:leading-[4rem] font-normal sm:text-center"
            )}
          >
            Unleashing the Power of Decentralized{" "}
            <br className="hidden sm:block" /> Event Planning with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#58B4FF] from-[43.18%] via-[#008DFF] via-[61.58%] to-[#B719EE] to-[96.65%] ">
              EVEX
            </span>
          </h1>
          <p
            className={cn(
              titilium.className,
              "text-left sm:text-center text-base text-alice-white/70 pb-4"
            )}
          >
            Discover the heart of a revolutionized event economy. EventsX is
            proud to present EVEX, our <br className="hidden sm:block" /> native
            cryptocurrency, crafted to facilitate, empower, and elevate your
            event experiences.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 grow">
            <div className="flex flex-col sm:items-center sm:justify-center gap-4 w-full max-w-[288px]">
              <h1
                className={cn(
                  titilium.className,
                  "text-base font-semibold text-primary text-left sm:text-center"
                )}
              >
                Seamless Integration
              </h1>
              <p
                className={cn(
                  titilium.className,
                  "text-base font-normal text-alice-white/70 text-left sm:text-center"
                )}
              >
                Built on the Ethereum blockchain, with the speed and efficiency
                of the Polygon chain, EVEX offers a secure gateway to the world
                of decentralized event planning.
              </p>
            </div>
            <div className="flex flex-col sm:items-center sm:justify-center gap-4 w-full max-w-[233px]">
              <h1
                className={cn(
                  titilium.className,
                  "text-base font-semibold text-primary text-left sm:text-center"
                )}
              >
                Absolute Transparency
              </h1>
              <p
                className={cn(
                  titilium.className,
                  "text-base font-normal text-alice-white/70 text-left sm:text-center"
                )}
              >
                With EVEX, indulge in the luxury of transparent transactions.
                Every coin has a story, and with us, it's always authentic.
              </p>
            </div>
          </div>
        </div>

        <div className="px-0 sm:p-4 flex flex-col grow  gap-8">
          <h1
            className={cn(
              titilium.className,
              "text-primary text-base font-semibold text-left sm:text-center"
            )}
          >
            An Ecosystem of Opportunities
          </h1>

          <div className="flex flex-wrap grow items-center justify-center gap-4">
            {tokenomics.map((data, index) => {
              return (
                <div
                  key={index}
                  onMouseEnter={() => setDescription(data.description)}
                  className={`flex flex-col gap-2 w-full max-w-[220px] p-4 min-w-[200px] rounded-2xl duration-150 group
                        hover:bg-alice-white/10`}
                >
                  <div className="flex flex-row justify-between items-center gap-8">
                    <h1
                      className={cn(
                        titilium.className,
                        "text-2xl font-bold text-primary"
                      )}
                    >
                      {data.percentage}%
                    </h1>
                    <h1 className="group-hover:opacity-100 opacity-0 h-3 w-3 bg-primary rounded-full text-transparent">
                      0
                    </h1>
                  </div>

                  <h1
                    className={cn(
                      titilium.className,
                      "text-base font-semibold text-alice-white"
                    )}
                  >
                    {data.title}
                  </h1>
                </div>
              );
            })}
          </div>

          <div className="flex flex-col justify-center items-center relative gap-2">
            <div className="flex w-full max-w-[800px] relative  justify-center items-center">
              <TokenomicsChart className="w-full" />
              <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                {description}
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-center">
              <TokenomicsCardV2 title={"FDV"} subTitle={"$24,000,000"} />
              <TokenomicsCardV2 title={"IMC"} subTitle={"$6,456,000"} />
              <TokenomicsCardV2 title={"Liquidity"} subTitle={"$1,200,000"} />
              <TokenomicsCardV2
                title={"IMC Without Liq"}
                subTitle={"$5,256,000"}
              />
              <TokenomicsCardV2 title={"Hard Cap"} subTitle={"$3,060,000"} />
              <TokenomicsCardV2 title={"Investor Control"} subTitle={"17%"} />
            </div>
            <div className="block md:hidden">{description}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
