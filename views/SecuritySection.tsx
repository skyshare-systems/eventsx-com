"use client";
import Security from "@/public/assets/security/lock.svg";
import { cn } from "@/lib/utils";
import { titilium } from "@/public/fonts";
import React from "react";
import Marquee from "react-fast-marquee";
import { styled } from "@mui/material/styles";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import DataSecurityIcon from "@/public/icons/data-security.svg";
import SmartContract from "@/public/icons/smart-contract-integrity.svg";
import Uncompromising from "@/public/icons/uncompromising.svg";
import PrivacyConsent from "@/public/icons/privacy.svg";
import RiskManagement from "@/public/icons/risk-management.svg";
import Community from "@/public/icons/community.svg";
import Continous from "@/public/icons/continous.svg";

const marqueeComponent = [
  {
    icon: <DataSecurityIcon />,
    title: "Data Security",
    hoverDescription: (
      <div className="flex flex-col gap-2 p-2 rounded-2xl border border-alice-white/10 bg-alice-white/5">
        <h1
          className={cn(
            titilium.className,
            "text-[0.64rem] text-alice-white/70 font-normal"
          )}
        >
          GDPR compliance? Check. We don&rsquo;t just abide by data laws—we
          respect them.
        </h1>
        <h1
          className={cn(
            titilium.className,
            "text-[0.64rem] text-alice-white/70 font-normal"
          )}
        >
          Our transparent policies ensure you&rsquo;re always in the loop about
          your data&rsquo;s journey.
        </h1>
      </div>
    ),
  },
  {
    icon: <SmartContract />,
    title: "Smart Contract Integrity.",
    hoverDescription: (
      <div className="flex flex-col gap-2 p-2 rounded-2xl border border-alice-white/10 bg-alice-white/5">
        <h1
          className={cn(
            titilium.className,
            "text-[0.64rem] text-alice-white/70 font-normal"
          )}
        >
          Powering our platform are trusty smart contracts. And to ensure
          they&rsquo;re iron-clad, we&rsquo;ve partnered with top-tier auditing
          firms for meticulous code evaluations.
        </h1>
      </div>
    ),
  },
  {
    icon: <Uncompromising />,
    title: "Uncompromising User Authentication.",
    hoverDescription: (
      <div className="flex flex-col gap-2 p-2 rounded-2xl border border-alice-white/10 bg-alice-white/5">
        <h1
          className={cn(
            titilium.className,
            "text-[0.64rem] text-alice-white/70 font-normal"
          )}
        >
          No unwanted guests here! With our robust authentication measures, your
          account stays as private as you want it.
        </h1>
        <h1
          className={cn(
            titilium.className,
            "text-[0.64rem] text-alice-white/70 font-normal"
          )}
        >
          Want extra security? Go for our multi-factor authentication (MFA) and
          enjoy multiple layers of verification.
        </h1>
      </div>
    ),
  },
  {
    icon: <PrivacyConsent />,
    title: "Privacy and Consent",
    hoverDescription: (
      <div className="flex flex-col gap-2 p-2 rounded-2xl border border-alice-white/10 bg-alice-white/5">
        <h1
          className={cn(
            titilium.className,
            "text-[0.64rem] text-alice-white/70 font-normal"
          )}
        >
          GDPR compliance? Check. We don&rsquo;t just abide by data laws—we
          respect them. Our transparent policies ensure you&rsquo;re always in
          the loop about your data&rsquo;s journey.
        </h1>
      </div>
    ),
  },
  {
    icon: <RiskManagement />,
    title: "Risk Management",
    hoverDescription: (
      <div className="flex flex-col gap-2 p-2 rounded-2xl border border-alice-white/10 bg-alice-white/5">
        <h1
          className={cn(
            titilium.className,
            "text-[0.64rem] text-alice-white/70 font-normal"
          )}
        >
          We&rsquo;ve got a game plan. Our risk radar is always on, prepped to
          identify and tackle potential threats. And in the face of unforeseen
          events? Our well-oiled operational machinery ensures things run
          smoothly.
        </h1>
      </div>
    ),
  },
  {
    icon: <Community />,
    title: "Community Vigilance",
    hoverDescription: (
      <div className="flex flex-col gap-2 p-2 rounded-2xl border border-alice-white/10 bg-alice-white/5">
        <h1
          className={cn(
            titilium.className,
            "text-[0.64rem] text-alice-white/70 font-normal"
          )}
        >
          We believe in the power of community. And we&rsquo;re all ears for any
          security concerns you might spot. Together, we&rsquo;ll keep threats
          at bay.
        </h1>
      </div>
    ),
  },
  {
    icon: <Continous />,
    title: "Continuous Improvement",
    hoverDescription: (
      <div className="flex flex-col gap-2 p-2 rounded-2xl border border-alice-white/10 bg-alice-white/5">
        <h1
          className={cn(
            titilium.className,
            "text-[0.64rem] text-alice-white/70 font-normal"
          )}
        >
          The digital realm is always evolving. And so are we. Our
          finger&rsquo;s always on the pulse, ensuring our security protocols
          outpace potential threats.
        </h1>
      </div>
    ),
  },
];

const SecuritySection = () => {
  const CustomWidthTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))({
    [`& .${tooltipClasses.tooltip}`]: {
      maxWidth: 250,
      backgroundColor: "transparent",
      color: "white",
    },
  });

  return (
    <div className="flex justify-center items-center" id="security">
      <div className="flex flex-col justify-center items-center gap-8 px-4 xl:px-0">
        <div className="flex flex-col justify-end gap-4 w-full h-[39.8rem] max-w-[40rem] relative">
          <Security className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          <h1
            className={cn(
              titilium.className,
              "text-[2rem] leading-normal sm:text-[3.05188rem] text-transparent bg-clip-text bg-gradient-to-b from-[#F3F7FA] to-[rgba(243, 247, 250, 0.00)] z-[2] text-left sm:text-center"
            )}
          >
            Security at the Forefront
            <br /> of Web3 Experiences
          </h1>
          <p
            className={cn(
              titilium.className,
              "text-base text-alice-white/70 text-left sm:text-center leading-normal"
            )}
          >
            By marrying tech prowess with a proactive approach, we&rsquo;re
            ensuring that EventsX isn&rsquo;t just another Web3 platform.
            It&rsquo;s a haven. A space where you can breathe easy, knowing
            you&rsquo;re in safe hands. Dive in and experience Web3 events with
            utmost peace of mind.
          </p>
        </div>

        <div className="max-w-[300px] sm:max-w-[600px] md:max-w-[768px]  xl:max-w-[1240px] w-full mx-auto my-8">
          <Marquee
            gradient
            gradientColor="#0C141B, #0C141B00"
            pauseOnHover
            className="w-full my-4"
          >
            <div className="flex justify-center items-center gap-4 last:mr-4">
              {marqueeComponent.map((item, index) => {
                return (
                  <>
                    <CustomWidthTooltip
                      key={index}
                      title={item.hoverDescription}
                      className="transparent-tooltip"
                    >
                      <div className="bg-alice-white/[.04] p-4 flex flex-row gap-4 rounded-lg relative">
                        {item.icon}
                        <p
                          className={cn(
                            titilium.className,
                            "font-semibold leading-5"
                          )}
                        >
                          {item.title}
                        </p>
                      </div>
                    </CustomWidthTooltip>
                  </>
                );
              })}
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default SecuritySection;
