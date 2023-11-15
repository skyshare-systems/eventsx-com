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

const tokenomics = [
  {
    idanimate: "tokenomics_svg__economy",
    title: "EventsX Economy",
    color: "bg-[#008dff]",
    percentage: 45,
    description: (
      <h1
        className={cn(
          titilium.className,
          "p-4 rounded-lg max-w-[409px] w-full bg-alice-white/5 backdrop-blur",
          "text-base font-normal text-alice-white/70"
        )}
      >
        The EventsX Economy, with the largest allocation of 45%, forms the core
        of the platform. This substantial portion fuels the platform's internal
        economic system, facilitating transactions, incentivizing user
        engagement, and nurturing a vibrant event ecosystem within EventsX.,
      </h1>
    ),
  },
  {
    idanimate: "tokenomics_svg__treasury-fund",
    title: "EventsX Treasury Fund",
    color: "bg-[#0486ff]",
    percentage: 20,
    description: (
      <h1
        className={cn(
          titilium.className,
          "p-4 rounded-lg max-w-[409px] w-full bg-alice-white/5 backdrop-blur",
          "text-base font-normal text-alice-white/70"
        )}
      >
        The EventsX Treasury Fund, with a substantial allocation of 20%, acts as
        a financial backbone for the project. These reserved resources are
        earmarked for ongoing platform development, innovation, and future
        initiatives, ensuring EventsX's sustained growth and adaptability in the
        ever-evolving blockchain landscape.
      </h1>
    ),
  },
  {
    idanimate: "tokenomics_svg__team",
    title: "Team",
    color: "bg-[#187eff]",
    percentage: 8,
    description: (
      <h1
        className={cn(
          titilium.className,
          "p-4 rounded-lg max-w-[409px] w-full bg-alice-white/5 backdrop-blur",
          "text-base font-normal text-alice-white/70"
        )}
      >
        The Team allocation, accounting for 8% of the tokenomics, is dedicated
        to the skilled professionals driving EventsX's development. This
        allocation serves as a motivation for the team's hard work and
        expertise, aligning their interests with the project's long-term
        success.
      </h1>
    ),
  },
  {
    idanimate: "tokenomics_svg__parnerships",
    title: "Partnerships",
    color: "bg-[#2a76ff]",
    percentage: 5,
    description: (
      <h1
        className={cn(
          titilium.className,
          "p-4 rounded-lg max-w-[409px] w-full bg-alice-white/5 backdrop-blur",
          "text-base font-normal text-alice-white/70"
        )}
      >
        The Partnerships allocation, comprising 5% of the tokenomics, is
        dedicated to collaborations with other companies or platforms. These
        strategic partnerships enhance EventsX's offerings, fostering
        integrations, joint marketing efforts, and cooperative ventures that
        strengthen the platform's position in the market.
      </h1>
    ),
  },
  {
    idanimate: "tokenomics_svg__private-sale",
    title: "Private Sale",
    color: "bg-[#3b6dff]",
    percentage: 8,
    description: (
      <h1
        className={cn(
          titilium.className,
          "p-4 rounded-lg max-w-[409px] w-full bg-alice-white/5 backdrop-blur",
          "text-base font-normal text-alice-white/70"
        )}
      >
        The Private Sale, accounting for 5% of the token allocation, involves a
        select group of strategic investors. This phase allows EventsX to secure
        significant funding from specific individuals or institutions who
        believe in the project's potential, ensuring a strong financial
        foundation.
      </h1>
    ),
  },
  {
    idanimate: "tokenomics_svg__seed-sale",
    title: "Seed Sale",
    color: "bg-[#4c63ff]",
    percentage: 4,
    description: (
      <h1
        className={cn(
          titilium.className,
          "p-4 rounded-lg max-w-[409px] w-full bg-alice-white/5 backdrop-blur",
          "text-base font-normal text-alice-white/70"
        )}
      >
        The Seed Sale, constituting 4% of the tokenomics, represents the initial
        phase of token distribution. During this stage, a limited supply of
        tokens is offered to early supporters and investors at a favorable
        price, enabling them to participate in the project's growth from its
        inception.
      </h1>
    ),
  },
  {
    idanimate: "tokenomics_svg__marketing",
    title: "Marketing",
    color: "bg-[#5c57fe]",
    percentage: 4,
    description: (
      <h1
        className={cn(
          titilium.className,
          "p-4 rounded-lg max-w-[409px] w-full bg-alice-white/5 backdrop-blur",
          "text-base font-normal text-alice-white/70"
        )}
      >
        The Marketing allocation, representing 4% of the tokens, is utilized for
        strategic campaigns and outreach initiatives. This investment ensures
        widespread awareness about EventsX, attracting users, investors, and
        event organizers to the platform.
      </h1>
    ),
  },
  {
    idanimate: "tokenomics_svg__advisors",
    title: "Advisors",
    color: "bg-[#6b4afa]",
    percentage: 3,
    description: (
      <h1
        className={cn(
          titilium.className,
          "p-4 rounded-lg max-w-[409px] w-full bg-alice-white/5 backdrop-blur",
          "text-base font-normal text-alice-white/70"
        )}
      >
        The Advisors allocation, constituting 3% of the tokens, supports
        experienced professionals or experts who provide valuable guidance to
        EventsX. Their insights contribute to informed decision-making, ensuring
        the project's trajectory aligns with industry best practices and market
        demands.
      </h1>
    ),
  },
  {
    idanimate: "tokenomics_svg__ido",
    title: "IDO (Initial DEX Offering)",
    color: "bg-[#793af4]",
    percentage: 3,
    description: (
      <h1
        className={cn(
          titilium.className,
          "p-4 rounded-lg max-w-[409px] w-full bg-alice-white/5 backdrop-blur",
          "text-base font-normal text-alice-white/70"
        )}
      >
        The IDO, constituting 3% of the allocation, is a decentralized
        fundraising event where EventsX tokens are made available to the public
        via a decentralized exchange. This approach ensures a fair and
        transparent token distribution, enabling broader community participation
        in the project.
      </h1>
    ),
  },
  {
    idanimate: "tokenomics_svg__liquidity",
    title: "Liquidity",
    color: "bg-[#793af4]",
    percentage: 3,
    description: (
      <h1
        className={cn(
          titilium.className,
          "p-4 rounded-lg max-w-[409px] w-full bg-alice-white/5 backdrop-blur",
          "text-base font-normal text-alice-white/70"
        )}
      >
        Liquidity, with a 3% allocation, focuses on ensuring the availability of
        EventsX tokens in the market. This reserved portion contributes to
        liquidity pools, allowing for seamless trading of tokens and maintaining
        stable market conditions.
      </h1>
    ),
  },
];

const Tokenomics = () => {
  const [percentage, setPercentage] = useState<number>(45);
  const [description, setDescription] = useState<any>(
    "The EventsX Economy, with the largest allocation of 45%, forms the coreof the platform. This substantial portion fuels the platform's internal economic system, facilitating transactions, incentivizing user engagement, and nurturing a vibrant event ecosystem within EventsX."
  );

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
                <CustomWidthTooltip
                  placement="top"
                  key={index}
                  title={data.description}
                  className="transparent-tooltip"
                >
                  <div
                    onMouseEnter={() => setDescription(data.description)}
                    className={`flex flex-col gap-2 w-full max-w-[220px] p-4 min-w-[200px] rounded-2xl duration-150 
                    
                        hover:bg-alice-white/10
                    `}
                  >
                    <h1
                      className={cn(
                        titilium.className,
                        "text-2xl font-bold text-primary"
                      )}
                    >
                      {data.percentage}%
                    </h1>
                    <h1
                      className={cn(
                        titilium.className,
                        "text-base font-semibold text-alice-white"
                      )}
                    >
                      {data.title}
                    </h1>
                  </div>
                </CustomWidthTooltip>
              );
            })}
          </div>

          <div className="flex flex-wrap justify-center items-center gap-2 w-full">
            {tokenomics.map((data, index) => {
              return (
                <div
                  onMouseEnter={() => setDescription(data.description)}
                  className="flex flex-row gap-2 items-center text-alice-white/50 cursor-default "
                >
                  <div
                    key={index}
                    className={`w-[10px] h-[4px] ${data.color} `}
                  />
                  {data.title}
                </div>
              );
            })}
          </div>

          <div className="flex flex-col justify-center items-center relative gap-2">
            <div className="flex w-full max-w-[600px] relative  justify-center items-center">
              <TokenomicsChart className="w-full" />

              <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                {description}
              </div>
              {/* <h1
                className={
                  (cn(titilium.className),
                  "text-2xl sm:text-5xl text-white absolute top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-[50%] font-bold")
                }
              >
                {percentage}%
              </h1> */}
            </div>

            <div className="block md:hidden">{description}</div>
          </div>
          {/* 
          <ProgressBar
            completed={percentage}
            customLabel=" d"
            labelClassName="label"
            bgColor="linear-gradient(to left, #30B4FF, #18456A)"
            height="10px"
            baseBgColor="rgba(0, 141, 255, 0.16)"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
