import React from "react";
import TokenomicsSpline from "@/components/graph";
import { cn } from "@/lib/utils";

import { titilium } from "@/public/fonts";

const EvxToken = () => {
  return (
    <section
      id="EVEX-token"
      className="flex justify-center items-center relative my-16  "
    >
      <div className="absolute top-0 left-0 rounded-full bg-primary blur-[160px] opacity-[0.32] h-full w-full max-w-[747px] max-h-[747px]" />
      <div className="relative flex flex-col gap-3 grow my-[5rem] p-8 bg-black/30 backdrop-blur-lg rounded-[4rem] border border-alice-white/10 mx-4 xl:mx-0 container z-[2]">
        <div className="flex flex-col gap-4 p-4">
          <h1
            className={cn(
              titilium.className,
              "text-left text-2xl sm:text-[3.051rem] sm:leading-[4rem] font-normal"
            )}
          >
            Unleashing the Power of Decentralized{" "}
            <br className="hidden sm:block" /> Event Planning with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#58B4FF] from-[43.18%] via-[#008DFF] via-[61.58%] to-[#B719EE] to-[96.65%]">
              EVEX
            </span>
          </h1>
          <p
            className={cn(
              titilium.className,
              "text-left text-base text-alice-white/70"
            )}
          >
            Discover the heart of a revolutionized event economy. EventsX is
            proud to present EVEXX, our <br className="hidden sm:block" />{" "}
            native cryptocurrency, crafted to facilitate, empower, and elevate
            your event experiences.
          </p>
        </div>

        <div className="relative flex flex-col xl:flex-row justify-between grow items-center xl:items-end">
          <div className="flex flex-col gap-3 w-full">
            <div className="flex flex-wrap gap-4">
              <div className="flex flex-col gap-4 p-4 w-full max-w-[320px]">
                <h1
                  className={cn(
                    titilium.className,
                    "text-base text-primary font-semibold"
                  )}
                >
                  Seamless Integration
                </h1>
                <p
                  className={cn(
                    titilium.className,
                    "text-alice-white/70 text-base font-normal"
                  )}
                >
                  Built on the Ethereum blockchain, with the speed and
                  efficiency of the Polygon chain, Evexoffers a secure gateway
                  to the world of decentralized event planning.
                </p>
              </div>
              <div className="flex flex-col gap-4 p-4 w-full max-w-[320px]">
                <h1
                  className={cn(
                    titilium.className,
                    "text-base text-primary font-semibold"
                  )}
                >
                  Absolute Transparency
                </h1>
                <p
                  className={cn(
                    titilium.className,
                    "text-alice-white/70 text-base font-normal"
                  )}
                >
                  With EVEX, indulge in the luxury of transparent transactions.
                  Every coin has a story, and with us, it&lsquo;s always
                  authentic.{" "}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4 p-4">
              <h1
                className={cn(
                  titilium.className,
                  "text-base text-primary font-semibold"
                )}
              >
                An Ecosystem of Opportunities
              </h1>
              <div className="flex flex-wrap gap-4">
                <div className="flex flex-col gap-2 p-2 w-full max-w-[320px]">
                  <h1
                    className={cn(
                      titilium.className,
                      "text-base text-alice-white font-semibold"
                    )}
                  >
                    EventsX Economy (35%)
                  </h1>
                  <p
                    className={cn(
                      titilium.className,
                      "text-alice-white/70 text-base font-normal"
                    )}
                  >
                    Access premium features, make easy transactions, or immerse
                    yourself in a bustling event marketplace. Evexis your key.
                  </p>
                </div>
                <div className="flex flex-col gap-2 p-2 w-full max-w-[320px]">
                  <h1
                    className={cn(
                      titilium.className,
                      "text-base text-alice-white font-semibold"
                    )}
                  >
                    EventsX Economy (30%)
                  </h1>
                  <p
                    className={cn(
                      titilium.className,
                      "text-alice-white/70 text-base font-normal"
                    )}
                  >
                    For us, innovation never stops. We reserve a significant
                    portion for refining, redefining, and revolutionizing our
                    platform.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="flex flex-col gap-2 p-2 w-full max-w-[320px]">
                  <h1
                    className={cn(
                      titilium.className,
                      "text-base text-alice-white font-semibold"
                    )}
                  >
                    Community Engagement (20%)
                  </h1>
                  <p
                    className={cn(
                      titilium.className,
                      "text-alice-white/70 text-base font-normal"
                    )}
                  >
                    We envision a world where our community shapes us. Be part
                    of our growth journey, influence decisions, and embrace
                    community-centric events with DAO protocols.
                  </p>
                </div>
                <div className="flex flex-col gap-2 p-2 w-full max-w-[320px]">
                  <h1
                    className={cn(
                      titilium.className,
                      "text-base text-alice-white font-semibold"
                    )}
                  >
                    Team & Future Talents (7.5%)
                  </h1>
                  <p
                    className={cn(
                      titilium.className,
                      "text-alice-white/70 text-base font-normal"
                    )}
                  >
                    We believe in our dream and our team. This allocation stands
                    as a testament to our dedication to make EventsX an
                    unparalleled platform.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2 p-2 w-full">
                <h1
                  className={cn(
                    titilium.className,
                    "text-base text-alice-white font-semibold"
                  )}
                >
                  VCs and Visionaries (7.5%)
                </h1>
                <p
                  className={cn(
                    titilium.className,
                    "text-alice-white/70 text-base font-normal"
                  )}
                >
                  Celebrating those who believed in our vision early on and
                  continue to propel us towards success.
                </p>
              </div>
            </div>
          </div>

          <TokenomicsSpline />
        </div>
      </div>
    </section>
  );
};

export default EvxToken;
