"use client";
import React from "react";
import FooterCard from "@/components/FooterCard";
import { titilium } from "@/public/fonts";
import { cn } from "@/lib/utils";
import { Link as LinkS } from "react-scroll";

const products = [
  {
    name: "Virtual Venue",
    linkUrl: "https://www.eventsx.com/products/virtual-venue",
  },
  {
    name: "Metaverse",
    linkUrl: "https://www.eventsx.com/metaverse",
  },
  {
    name: "Onsite Event",
    linkUrl: "https://www.eventsx.com/products/onsite-event-management",
  },
  {
    name: "Management",
    linkUrl: "https://www.eventsx.com/products/onsite-event-management",
  },
  {
    name: "White Label",
    linkUrl: "https://www.eventsx.com/white-label-solution",
  },
];

const features = [
  {
    name: "Features",
    linkUrl: "https://www.eventsx.com/products/feature-list",
  },
  {
    name: "Artificial Intelligence",
    linkUrl: "https://www.eventsx.com/products/artificial-intelligence",
  },
  {
    name: "Why EventsX",
    linkUrl: "https://www.eventsx.com/company/why-eventsx",
  },
];

const solutions = [
  {
    name: "Virtual Event Platform",
    linkUrl: "https://www.eventsx.com/solutions/virtual-event-platform",
  },
  {
    name: "Hybrid Event Platform",
    linkUrl: "https://www.eventsx.com/solutions/hybrid-event-platform",
  },
  {
    name: "In-Person Events",
    linkUrl: "https://www.eventsx.com/solutions/in-person-events",
  },
  {
    name: "Webinar",
    linkUrl: "https://www.eventsx.com/solutions/webinars",
  },
  {
    name: "Internal Events",
    linkUrl: "https://www.eventsx.com/solutions/internal-events",
  },
  {
    name: "Event Marketing",
    linkUrl: "https://www.eventsx.com/solutions/event-marketing",
  },
];

const eventtypes = [
  {
    name: "Award Shows",
    linkUrl: "https://www.eventsx.com/solutions/award-show",
  },
  {
    name: "Conference",
    linkUrl: "https://www.eventsx.com/solutions/conference",
  },
  {
    name: "Employee Engagement",
    linkUrl: "https://www.eventsx.com/solutions/employee-engagement",
  },
  {
    name: "Hackathons",
    linkUrl: "https://www.eventsx.com/solutions/hackthons",
  },
  {
    name: "Medical Events",
    linkUrl: "https://www.eventsx.com/solutions/medical-events",
  },

  {
    name: "Member Engagement",
    linkUrl: "https://www.eventsx.com/solutions/member-engagement",
  },
  {
    name: "Social Gathering",
    linkUrl: "https://www.eventsx.com/solutions/social-gathering",
  },

  {
    name: "Trade Show",
    linkUrl: "https://www.eventsx.com/solutions/trade-show",
  },

  {
    name: "Training & Workshops",
    linkUrl: "https://www.eventsx.com/solutions/training-workshops",
  },
  {
    name: "Agency",
    linkUrl: "https://www.eventsx.com/solutions/agency",
  },
  {
    name: "Job fair",
    linkUrl: "https://www.eventsx.com/solutions/job-fair",
  },
];

const company = [
  {
    name: "About Us",
    linkUrl: "https://www.eventsx.com/company/about-us",
  },
  {
    name: "Customers",
    linkUrl: "https://www.eventsx.com/company/customers",
  },
  {
    name: "Press",
    linkUrl: "https://www.eventsx.com/company/press",
  },
  {
    name: "Careers",
    linkUrl: "https://www.eventsx.com/company/careers",
  },
  {
    name: "Our Vision",
    linkUrl: "https://www.eventsx.com/company/our-vision",
  },

  {
    name: "Community Guidelines",
    linkUrl: "https://www.eventsx.com/company/community-guidelines",
  },
  {
    name: "Giving Back",
    linkUrl: "https://www.eventsx.com/company/giving-back",
  },

  {
    name: "EventsX API",
    linkUrl:
      "https://documenter.getpostman.com/view/5469043/UVXnHZmj#0ae7660e-3301-47af-9450-a7b091f63dff",
  },

  {
    name: "Brand Identity",
    linkUrl: "https://www.eventsx.com/company/brand-identity",
  },
];

const support = [
  {
    name: "Request Demo (Try Now)",
    linkUrl: "https://www.eventsx.com/request-a-demo",
  },
  {
    name: "FAQ",
    linkUrl: "https://www.eventsx.com/faq",
  },
];

const resources = [
  {
    name: "Blog",
    linkUrl: "https://www.eventsx.com/resources/blog",
  },
  {
    name: "EventsX Learn",
    linkUrl: "https://www.eventsx.com/resources/eventsx-learn",
  },
  {
    name: "Knowledge Center",
    linkUrl: "https://www.eventsx.com/resources/knowledge-center",
  },
  {
    name: "Directory Listing",
    linkUrl: "https://www.eventsx.com/resources/directory-listing",
  },
  {
    name: "Agency Program",
    linkUrl: "https://www.eventsx.com/resources/agency-program",
  },
  {
    name: "Partners",
    linkUrl: "https://www.eventsx.com/resources/partners",
  },
];

const information = [
  {
    name: "Terms & Conditions",
    linkUrl: "https://www.eventsx.com/terms-and-conditions",
  },
  {
    name: "Privacy and Cookie Policy",
    linkUrl: "https://www.eventsx.com/privacy-and-policy",
  },
  {
    name: "Data Management",
    linkUrl: "https://www.eventsx.com/data-management",
  },
  {
    name: "GDPR",
    linkUrl: "https://www.eventsx.com/gdpr",
  },
  {
    name: "Sitemap",
    linkUrl: "https://www.eventsx.com/site-map",
  },
  {
    name: "Status",
    linkUrl: "https://status.eventsx.com/",
  },
];

const navigation = [
  {
    href: "home",
    title: "Home",
    offset: -120,
  },
  {
    href: "nft-implementation",
    title: "NFT Implementation",
    offset: -50,
  },
  {
    href: "EVEX-token",
    title: "EVEX Token",
    offset: -50,
  },
  {
    href: "use-case",
    title: "Use Case",
    offset: -100,
  },
  {
    href: "security",
    title: "Security",
    offset: -100,
  },
  {
    href: "market",
    title: "Market",
    offset: -100,
  },
  {
    href: "roadmap",
    title: "Roadmap",
    offset: -100,
  },
  {
    href: "team",
    title: "Team",
    offset: -100,
  },
  {
    href: "advisors",
    title: "Advisors",
    offset: -100,
  },
  {
    href: "partners",
    title: "Partners",
    offset: -100,
  },
];

const Footer = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="grid grid-cols-2 sm:grid-cols-2 gap-8 lg:grid-cols-5 xl:grid-cols-7 max-w-[90rem] grow py-[5rem] px-4 xl:px-0">
        <div className="flex flex-col gap-8">
          <FooterCard title={"Products"} object={products} />
          <FooterCard title={"Features"} object={features} />
        </div>

        <div className="flex flex-col gap-8">
          <FooterCard title={"Solutions"} object={solutions} />
        </div>

        <div className="flex flex-col gap-8">
          <FooterCard title={"Event Types"} object={eventtypes} />
        </div>

        <div className="flex flex-col gap-8">
          <FooterCard title={"Company"} object={company} />
        </div>

        <div className="flex flex-col gap-8">
          <FooterCard title={"Support"} object={support} />
          <FooterCard title={"Resources"} object={resources} />
        </div>

        <div className="flex flex-col gap-8">
          <FooterCard title={"Information"} object={information} />
        </div>

        <div className="flex flex-col xl:items-end">
          {navigation.map((data) => {
            return (
              <LinkS
                key={data.href}
                to={data.href}
                smooth={true}
                duration={500}
                spy={true}
                offset={data.offset}
                activeClass="active"
                className={cn(
                  titilium.className,
                  "p-2 font-semibold text-base text-alice-white cursor-pointer"
                )}
              >
                {data.title}
              </LinkS>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
