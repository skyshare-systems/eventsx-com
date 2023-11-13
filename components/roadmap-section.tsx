"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { titilium } from "@/public/fonts";
import CardRoadmap from "./ui/card-roadmap";
import PhaseRoadmap from "./ui/phase-roadmap";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Circle from "@/public/assets/roadmap/circle-img.svg";
import CheckIcon from "./CheckIcon";

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
            bgcolor={`${inView ? "h-full" : "h-0"} bg-[#008bfb]`}
            className={`${inView ? "opacity-100" : "opacity-0"}`}
          />
          <div className="flex flex-col gap-8 p-8 grow">
            <h3
              className={cn(
                titilium.className,
                "text-[1.95313rem] leading-none sm:leading-normal flex flex-wrap gap-8 duration-300",
                `${inView ? "opacity-100" : "opacity-0 translate-y-28"}`
              )}
            >
              <span className="text-alice-white font-semibold">Q1 - Q4</span>
              <span className="text-alice-white/30 font-normal">2022</span>
            </h3>
            <div className="flex flex-wrap gap-4" ref={ref}>
              <CardRoadmap
                title={
                  <>
                    <span className="font-normal">Raised </span>
                    <span className="font-bold">$965K -</span>
                    <span className="font-normal">Bootstrapped </span>
                  </>
                }
                color={"#008bfb"}
                className={`max-w-[14rem] delay-75 ${
                  inView ? "opacity-100" : "opacity-0 translate-y-28"
                } `}
              />
              <CardRoadmap
                title={
                  <>
                    <span className="font-normal">Expanded Core Team to </span>
                    <span className="font-bold">4</span>
                  </>
                }
                color={"#008bfb"}
                className={`max-w-[14rem] delay-100 ${
                  inView ? "opacity-100" : "opacity-0 translate-y-28"
                } `}
              />
              <CardRoadmap
                title={
                  <>
                    <span className="font-normal">Launched </span>
                    <span className="font-bold">MVP Development</span>
                  </>
                }
                color={"#008bfb"}
                className={`max-w-[14rem] delay-150 ${
                  inView ? "opacity-100" : "opacity-0 translate-y-28"
                } `}
              />
              <CardRoadmap
                title={
                  <>
                    <span className="font-normal">Launched </span>
                    <span className="font-bold">Organic Marketing</span>
                  </>
                }
                color={"#008bfb"}
                className={`max-w-[14rem] delay-200 ${
                  inView ? "opacity-100" : "opacity-0 translate-y-28"
                } `}
              />
            </div>
          </div>
        </div>

        {/* Phase 2  */}
        <div className="flex flex-row grow">
          <PhaseRoadmap
            number={"02"}
            bgcolor={`${inViewPhase2 ? "h-full" : "h-0"} bg-[#008bfb]`}
            className={`${inViewPhase2 ? "opacity-100" : "opacity-0"}`}
          />
          <div className="flex flex-col gap-8 p-8 grow">
            <h3
              className={cn(
                titilium.className,
                "text-[1.95313rem] leading-none sm:leading-normal flex flex-wrap gap-8 duration-300",
                `${inViewPhase2 ? "opacity-100" : "opacity-0 translate-y-28"}`
              )}
            >
              <span className="text-alice-white font-semibold">Q1</span>
              <span className="text-alice-white/30 font-normal">2023</span>
            </h3>
            <div className="flex flex-wrap gap-4" ref={refPhase2}>
              <CardRoadmap
                title={
                  <>
                    <span className="font-bold">Beta Testing </span>

                    <span className="font-normal">of the platform </span>
                  </>
                }
                color={"#008bfb"}
                className={`max-w-[14rem] delay-75 ${
                  inViewPhase2 ? "opacity-100" : "opacity-0 translate-y-28"
                } `}
              />

              <CardRoadmap
                title={
                  <>
                    <span className="font-normal">Got </span>

                    <span className="font-bold">
                      8000+ Social Media Followers{" "}
                    </span>
                  </>
                }
                color={"#008bfb"}
                className={`max-w-[14rem] delay-100 ${
                  inViewPhase2 ? "opacity-100" : "opacity-0 translate-y-28"
                } `}
              />

              <CardRoadmap
                title={
                  <>
                    <span className="font-bold">Metaverse Deal </span>
                    <span className="font-normal">with a large $60B </span>
                  </>
                }
                color={"#008bfb"}
                className={`max-w-[14rem] delay-100 ${
                  inViewPhase2 ? "opacity-100" : "opacity-0 translate-y-28"
                } `}
              />

              <CardRoadmap
                title={
                  <>
                    <span className="font-bold">Manufactoring Company </span>
                  </>
                }
                color={"#008bfb"}
                className={`max-w-[14rem] delay-150 ${
                  inViewPhase2 ? "opacity-100" : "opacity-0 translate-y-28"
                } `}
              />
            </div>
          </div>
        </div>

        {/* Phase 3  */}
        <div className="flex flex-row grow">
          <PhaseRoadmap
            number={"03"}
            bgcolor={`${inViewPhase3 ? "h-full" : "h-0"} bg-[#008bfb]`}
            className={`${inViewPhase3 ? "opacity-100" : "opacity-0"}`}
          />
          <div className="flex flex-col gap-8 p-8 grow">
            <h3
              className={cn(
                titilium.className,
                "text-[1.95313rem] leading-none sm:leading-normal flex flex-wrap gap-8 duration-300",
                `${inViewPhase3 ? "opacity-100" : "opacity-0 translate-y-28"}`
              )}
            >
              <span className="text-alice-white font-semibold">Q2 - Q3</span>
              <span className="text-alice-white/30 font-normal">2023 </span>
            </h3>
            <div className="flex flex-wrap gap-4" ref={refPhase3}>
              <CardRoadmap
                title={
                  <>
                    <span className="font-bold">Platform </span>

                    <span className="font-normal">Beta Launch </span>
                  </>
                }
                color={"#008bfb"}
                className={`max-w-[14rem] delay-75 ${
                  inViewPhase3 ? "opacity-100" : "opacity-0 translate-y-28"
                } `}
              />
              <CardRoadmap
                title={
                  <>
                    <span className="font-bold">Virtual Event </span>
                    <span className="font-normal">Platform went Live </span>
                  </>
                }
                color={"#008bfb"}
                className={`max-w-[14rem] delay-100 ${
                  inViewPhase3 ? "opacity-100" : "opacity-0 translate-y-28"
                } `}
              />
              <CardRoadmap
                title={
                  <>
                    <span className="font-normal">Acquired </span>
                    <span className="font-bold">3000+ Users </span>
                  </>
                }
                color={"#008bfb"}
                className={`max-w-[14rem] delay-150 ${
                  inViewPhase3 ? "opacity-100" : "opacity-0 translate-y-28"
                } `}
              />
              <CardRoadmap
                title={
                  <>
                    <span className="font-bold">50+ Companies </span>
                    <span className="font-normal">have used the platform </span>
                  </>
                }
                color={"#008bfb"}
                className={`max-w-[14rem] delay-200 ${
                  inViewPhase3 ? "opacity-100" : "opacity-0 translate-y-28"
                } `}
              />
              <CardRoadmap
                title={
                  <>
                    <span className="font-bold">20+ Registered </span>
                    <span className="font-normal">event planners </span>
                  </>
                }
                color={"#008bfb"}
                className={`max-w-[14rem] delay-300 ${
                  inViewPhase3 ? "opacity-100" : "opacity-0 translate-y-28"
                } `}
              />
              <CardRoadmap
                title={
                  <>
                    <span className="font-bold">215k+ Subscribed </span>
                    <span className="font-normal">potential future users </span>
                  </>
                }
                color={"#008bfb"}
                className={`max-w-[14rem] delay-500 ${
                  inViewPhase3 ? "opacity-100" : "opacity-0 translate-y-28"
                } `}
              />
            </div>
          </div>
        </div>

        {/* Phase 4  */}
        <div className="flex flex-row grow">
          <PhaseRoadmap
            number={"04"}
            bgcolor={`${inViewPhase4 ? "h-full" : "h-0"} bg-[#008bfb]`}
            className={`${inViewPhase4 ? "opacity-100" : "opacity-0"}`}
          />
          <div className="flex flex-col gap-8 p-8 grow">
            <h3
              className={cn(
                titilium.className,
                "text-[1.95313rem] leading-none sm:leading-normal flex flex-wrap gap-8 duration-300",
                `${inViewPhase4 ? "opacity-100" : "opacity-0 translate-y-28"}`
              )}
            >
              <span className="text-alice-white font-semibold">Q4 </span>
              <span className="text-alice-white/30 font-normal">2023 </span>
            </h3>
            <div className="flex flex-wrap gap-4" ref={refPhase4}>
              <CardRoadmap
                title={
                  <>
                    <span className="font-bold">Physical Events </span>
                    <span className="font-normal">platform release </span>
                  </>
                }
                color={"#008bfb"}
                className={`max-w-[14rem] delay-0 ${
                  inViewPhase4 ? "opacity-100" : "opacity-0 translate-y-28"
                } `}
              />
              <CardRoadmap
                title={
                  <>
                    <span className="font-normal">EventsX </span>
                    <span className="font-bold">In-Event Marketplace </span>
                    <span className="font-normal">Launch </span>
                  </>
                }
                color={"#008bfb"}
                className={`max-w-[14rem] delay-75 ${
                  inViewPhase4 ? "opacity-100" : "opacity-0 translate-y-28"
                } `}
              />
              <CardRoadmap
                title={
                  <>
                    <span className="font-bold">NFT Launch </span>
                  </>
                }
                color={"#008bfb"}
                className={`max-w-[14rem] delay-100 ${
                  inViewPhase4 ? "opacity-100" : "opacity-0 translate-y-28"
                } `}
              />
              <CardRoadmap
                title={
                  <>
                    <span className="font-bold">NFT Ticketing </span>
                    <span className="font-normal">Development</span>
                  </>
                }
                color={"#008bfb"}
                className={`max-w-[14rem] delay-150 ${
                  inViewPhase4 ? "opacity-100" : "opacity-0 translate-y-28"
                } `}
              />
              <CardRoadmap
                title={
                  <>
                    <span className="font-bold">EventsX ($EVEX) </span>
                    <span className="font-normal">Crypto Token ICO</span>
                  </>
                }
                color={"#008bfb"}
                className={`max-w-[14rem] delay-200 ${
                  inViewPhase4 ? "opacity-100" : "opacity-0 translate-y-28"
                } `}
              />
              <CardRoadmap
                title={
                  <>
                    <span className="font-bold">Metaverse </span>
                    <span className="font-normal">Beta Release</span>
                  </>
                }
                color={"#008bfb"}
                className={`max-w-[14rem] delay-300 ${
                  inViewPhase4 ? "opacity-100" : "opacity-0 translate-y-28"
                } `}
              />
              <CardRoadmap
                title={
                  <>
                    <span className="font-bold">AI Matchmaking algorithm </span>
                    <span className="font-normal">
                      for networking patent application submission
                    </span>
                  </>
                }
                color={"#008bfb"}
                className={`max-w-[26.3rem] delay-500 ${
                  inViewPhase4 ? "opacity-100" : "opacity-0 translate-y-28"
                } `}
              />
            </div>
          </div>
        </div>

        {/* Phase 5  */}
        <div className="flex flex-row grow">
          <PhaseRoadmap
            number={"05"}
            bgcolor={`${inViewPhase5 ? "h-full" : "h-0"} bg-[#008bfb]`}
            className={`${inViewPhase5 ? "opacity-100" : "opacity-0"}`}
          />
          <div className="flex flex-col gap-8 p-8 grow">
            <h3
              className={cn(
                titilium.className,
                "text-[1.95313rem] leading-none sm:leading-normal flex flex-wrap gap-8 duration-300",
                `${inViewPhase5 ? "opacity-100" : "opacity-0 translate-y-28"}`
              )}
            >
              <span className="text-alice-white font-semibold">Beyond </span>
              <span className="text-alice-white/30 font-normal">2024 </span>
            </h3>
            <div className="flex flex-wrap gap-4" ref={refPhase5}>
              <CardRoadmap
                title={
                  <>
                    <span className="font-normal">Launch </span>
                    <span className="font-bold">AI Event Engine</span>
                    <span className="font-normal">development </span>
                  </>
                }
                color={"#008bfb"}
                className={`max-w-[14rem] delay-75 ${
                  inViewPhase5 ? "opacity-100" : "opacity-0 translate-y-28"
                } `}
              />
              <CardRoadmap
                title={
                  <>
                    <span className="font-normal">Launch </span>
                    <span className="font-bold">AI Host and Event Control</span>
                    <span className="font-normal">development </span>
                  </>
                }
                color={"#008bfb"}
                className={`max-w-[14rem] delay-100 ${
                  inViewPhase5 ? "opacity-100" : "opacity-0 translate-y-28"
                } `}
              />
              <CardRoadmap
                title={
                  <>
                    <span className="font-normal">Patent application for </span>
                    <span className="font-bold">AI Event Engine</span>
                  </>
                }
                color={"#008bfb"}
                className={`max-w-[14rem] delay-150 ${
                  inViewPhase5 ? "opacity-100" : "opacity-0 translate-y-28"
                } `}
              />
              <CardRoadmap
                title={
                  <>
                    <span className="font-normal">Reach </span>
                    <span className="font-bold">250k+ Active users, </span>
                    <span className="font-normal">
                      equivalent to $3.7M in Revenue.{" "}
                    </span>
                    <span className="font-normal">Land </span>
                    <span className="font-bold">500 B2B Clients </span>
                  </>
                }
                color={"#008bfb"}
                className={`max-w-[14rem] delay-200 ${
                  inViewPhase5 ? "opacity-100" : "opacity-0 translate-y-28"
                } `}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
