// import Hero from '@/components/hero-section';
import NFTImplementation from "@/components/nft-implementation/nft-implementation";
import Roadmap from "@/components/roadmap-section";
// import Tokenomics from "@/components/EVEX-token-section";

import HeroSection from "@/views/HeroSection";
import SecuritySection from "@/views/SecuritySection";
import Market from "@/components/market-section";
import Advisors from "@/components/advisors-section";
import Partners from "@/views/PartnersSection";
import Footer from "@/views/Footer";
import FooterTwo from "@/views/FooterTwo";
import FooterThree from "@/views/FooterThree";
import Team from "@/views/Team";
import UseCase from "@/views/UseCase";
import Tokenomics from "@/views/Tokenomics";
import StartUpAcc from "@/views/StartUpAcc";

export default function Home() {
  return (
    <>
      <HeroSection />
      <NFTImplementation />
      <Tokenomics />
      <UseCase />
      <SecuritySection />
      <Market />
      <Roadmap />
      <Team />
      <Advisors />
      <Partners />
      {/* <PartnersTwoSection /> */}
      <Footer />
      <FooterTwo />
      <FooterThree />
    </>
  );
}
