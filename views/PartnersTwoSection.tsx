/* eslint-disable @next/next/no-img-element */
import React from "react";
const PartnersTwoSection = () => {
  return (
    <div className="grid grid-cols-2 relative h-[20rem] my-[2rem]">
      <div className="flex justify-center items-center bg-gradient-to-r h-full opacity-50 from-[#01ebfc] via-[#181A7E] to-[#DF1489] absolute -top-[0%] left-0 w-[50%] blur-3xl">
        top left
      </div>

      <div className="flex justify-center items-center bg-gradient-to-r h-full opacity-50 from-[#EC3934] via-[#F3802F] to-[#F6CB28] absolute -top-[0%] right-0 w-[50%] blur-3xl">
        top right
      </div>

      <div className="flex justify-center items-center bg-gradient-to-r h-full opacity-50 from-[#01ebfc] via-[#181A7E] to-[#DF1489] absolute -bottom-[0%] left-0 w-[50%] blur-3xl">
        bottom left
      </div>

      <div className="flex justify-center items-center bg-gradient-to-r h-full opacity-50 from-[#EC3934] via-[#F3802F] to-[#F6CB28] absolute -bottom-[0%] right-0 w-[50%] blur-3xl">
        bottom right
      </div>

      <div className="flex justify-center items-center py-3 bg-gradient-to-r from-[#01ebfc] via-[#181A7E] to-[#DF1489]"></div>
      <div className="flex justify-center items-center py-3 bg-gradient-to-r from-[#EC3934] via-[#F3802F] to-[#F6CB28]"></div>

      <div className="flex justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[19rem] text-black bg-[#ffffff] w-full px-4">
        <div className="overflow-x-scroll scroll overflow-y-hidden whitespace-nowrap scroll-smooth touch-pan-x custom-scroll flex justify-start sm:justify-center items-center gap-8">
          <img
            src={"/assets/partners/logo-evx.png"}
            alt={"EventsX"}
            width={303}
            height={48}
            className="ml-[4rem] sm:ml-4"
          />
          <img
            src={"/assets/partners/border.png"}
            alt={"border"}
            width={2}
            height={48}
          />
          <img
            src={"/assets/partners/crown-service.png"}
            alt={"CrownService"}
            width={303}
            height={48}
            className="mr-[8rem] sm:mr-4"
          />
        </div>
      </div>
    </div>
  );
};

export default PartnersTwoSection;
