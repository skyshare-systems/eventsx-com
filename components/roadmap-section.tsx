"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { titilium } from "@/public/fonts";
import CardRoadmap from "./ui/card-roadmap";
import PhaseRoadmap from "./ui/phase-roadmap";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Circle from "@/public/assets/roadmap/circle-img.svg";

const Roadmap = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  const { ref: refPhase2, inView: inViewPhase2 } = useInView({
    threshold: 0,
  });

  const { ref: refPhase3, inView: inViewPhase3 } = useInView({
    threshold: 0,
  });

  const { ref: refPhase4, inView: inViewPhase4 } = useInView({
    threshold: 0,
  });

  const { ref: refPhase5, inView: inViewPhase5 } = useInView({
    threshold: 0,
  });

  return (
    <section
      id="roadmap"
      className="flex justify-center my-16 items-center relative"
    >
      <Image
        height={500}
        width={500}
        src={"/assets/roadmap/x-pattern.png"}
        alt={"x-pattern"}
        className="w-full max-w-[300px] md:max-w-[800px] absolute -top-[7%] -left-[50%] md:-left-[20%] -z-[1] opacity-50 md:opacity-100"
      />

      <div className="w-full max-w-[300px] md:max-w-[600px] absolute top-0 -left-[25%] md:-left-[15%] -z-[1] opacity-50 md:opacity-100">
        <Circle />
      </div>
      <div className="flex flex-col gap-8 grow max-w-7xl px-4 xl:px-0">
        <h2
          className={cn(
            titilium.className,
            "text-[3.815rem] text-transparent bg-clip-text bg-gradient-to-br from-[#F3F7FA] to-[#404040] font-normal leading-none sm:leading-normal"
          )}
        >
          Our Roadmap
        </h2>
        {/* Phase 1 */}
        <div className="flex flex-row grow">
          <PhaseRoadmap
            number={"01"}
            bgcolor={`${inView ? "h-full" : "h-0"} bg-[#008DFF]`}
            className={`${inView ? "opacity-100" : "opacity-0"}`}
          />
          <div className="flex flex-col gap-8 p-8 grow">
            <h3
              className={cn(
                titilium.className,
                "text-alice-white font-semibold text-[1.95313rem] leading-none sm:leading-normal"
              )}
            >
              Foundation and MVP Development
            </h3>
            <div className="flex flex-wrap gap-4" ref={ref}>
              <CardRoadmap
                title={"Q1"}
                subtitle={"2023"}
                description={
                  "Events raises $965K in bootstrap funding, expanding the core team to 4 members, including experienced developers and industry experts."
                }
              />
              <CardRoadmap
                title={"Q2"}
                subtitle={"2023"}
                description={
                  "Events launches its Minimum Viable Product (MVP), introducing essential features like Al Event Engine, event ticketing, and basic event management tools."
                }
              />
              <CardRoadmap
                title={"Q3"}
                subtitle={"2023"}
                description={
                  "The platform gains over 8,000 social media followers, building anticipation for the upcoming beta launch."
                }
              />
            </div>
          </div>
        </div>

        {/* Phase 2  */}
        <div className="flex flex-row grow">
          <PhaseRoadmap
            number={"02"}
            bgcolor={`${inViewPhase2 ? "h-full" : "h-0"} bg-[#8721EE]`}
            className={`${inViewPhase2 ? "opacity-100" : "opacity-0"}`}
          />
          <div className="flex flex-col gap-8 p-8 grow">
            <h1
              className={cn(
                titilium.className,
                "text-alice-white font-semibold text-[1.95313rem] leading-none sm:leading-normal"
              )}
            >
              Platform Beta Launch and Growth
            </h1>
            <div className="flex flex-wrap gap-4" ref={refPhase2}>
              <CardRoadmap
                title={"Q4"}
                subtitle={"2023"}
                description={
                  "Events conducts beta testing of the platform, engaging with users to gather valuable feedback for optimization and improvements."
                }
              />
              <CardRoadmap
                title={"Q1"}
                subtitle={"2024"}
                description={
                  "The platform attracts 3,000+ active users, hosting a diverse range of events, including virtual, hybrid, and physical experiences."
                }
              />
              <CardRoadmap
                title={"Q2"}
                subtitle={"2024"}
                description={
                  "Events partners with 50+ companies, securing corporate events and forging strategic collaborations within the industry."
                }
              />
            </div>
          </div>
        </div>

        {/* Phase 3  */}
        <div className="flex flex-row grow">
          <PhaseRoadmap
            number={"03"}
            bgcolor={`${inViewPhase3 ? "h-full" : "h-0"} bg-[#008DFF]`}
            className={`${inViewPhase3 ? "opacity-100" : "opacity-0"}`}
          />
          <div className="flex flex-col gap-8 p-8 grow">
            <h1
              className={cn(
                titilium.className,
                "text-alice-white font-semibold text-[1.95313rem] leading-none sm:leading-normal"
              )}
            >
              Expanding User Base and Features
            </h1>
            <div className="flex flex-wrap gap-4" ref={refPhase3}>
              <CardRoadmap
                title={"Q3"}
                subtitle={"2024"}
                description={
                  "Events expands its user base to over 215,000 registered users, demonstrating rapid growth and widespread adoption of the platform."
                }
              />
              <CardRoadmap
                title={"Q4"}
                subtitle={"2024"}
                description={
                  "The Events In-Event Product Marketplace launches, providing a unique platform for vendors and exhibitors to showcase their products directly to event attendees."
                }
              />
              <CardRoadmap
                title={"Q4"}
                subtitle={"2024"}
                description={
                  "NFT ticketing sees significant uptake, with 4,000 unique NFT event tickets released, including 100 Premium, 400 VIP, and genericNFTS."
                }
              />
            </div>
          </div>
        </div>

        {/* Phase 4  */}
        <div className="flex flex-row grow">
          <PhaseRoadmap
            number={"04"}
            bgcolor={`${inViewPhase4 ? "h-full" : "h-0"} bg-[#8721EE]`}
            className={`${inViewPhase4 ? "opacity-100" : "opacity-0"}`}
          />
          <div className="flex flex-col gap-8 p-8 grow">
            <h1
              className={cn(
                titilium.className,
                "text-alice-white font-semibold text-[1.95313rem] leading-none sm:leading-normal"
              )}
            >
              Metaverse Integration and Beyond
            </h1>
            <div className="flex flex-wrap gap-4" ref={refPhase4}>
              <CardRoadmap
                title={"Q1"}
                subtitle={"2025"}
                description={
                  "EventsX introduces bespoke metaverses, allowing organizers to create immersive and interactive event experiences, catering to the growing demand for virtual reality gatherings."
                }
              />
              <CardRoadmap
                title={"Q2"}
                subtitle={"2025"}
                description={`Events files patent applications for its Al matchmaking algorithm, ensuring the platform's proprietary technology remains protected and unique.`}
              />
              <CardRoadmap
                title={"Q3"}
                subtitle={"2025"}
                description={
                  "Events unveils Al Event Engine development, ushering in a new era of Al-powered event planning and content generation."
                }
              />
            </div>
          </div>
        </div>

        {/* Phase 5  */}
        <div className="flex flex-row grow">
          <PhaseRoadmap
            number={"05"}
            bgcolor={`${inViewPhase5 ? "h-full" : "h-0"} bg-[#008DFF]`}
            className={`${inViewPhase5 ? "opacity-100" : "opacity-0"}`}
          />
          <div className="flex flex-col gap-8 p-8 grow">
            <h1
              className={cn(
                titilium.className,
                "text-alice-white font-semibold text-[1.95313rem] leading-none sm:leading-normal"
              )}
            >
              Scaling and Global Expansion
            </h1>
            <div className="flex flex-wrap gap-4" ref={refPhase5}>
              <CardRoadmap
                title={"Q4"}
                subtitle={"2025"}
                description={
                  "Events reaches an impressive 600,000+ active users, equivalent to $9 million in revenue, solidifying its position as a market leader."
                }
              />
              <CardRoadmap
                title={"Q4"}
                subtitle={"2025"}
                description={
                  "The platform secures 500+ B2B clients, strengthening its enterprise presence and catering to diverse event management needs worldwide."
                }
              />
              <CardRoadmap
                title={"And Beyond..."}
                subtitle={""}
                description={
                  "Events continues to innovate, enhance its offerings, and expand its global footprint, transforming the events industry into a dynamic, decentralized, and inclusive ecosystem."
                }
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
