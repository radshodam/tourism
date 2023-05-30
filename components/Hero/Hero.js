import React from "react";
import CampImage from "/public/images/camp.jpg";
import Image from "next/image";

function Hero({ children }) {
  return (
    <div className=" relative  ">
      <div>{children}</div>
      <div className="w-full  mb-6 md:mb-0 md:max-h-screen h-screen min-h-[1100px] lg:min-h-[900px]">
        <Image
          src={CampImage}
          className=" w-full h-full object-cover "
          width={1500}
          height={1100}
        />
      </div>
    </div>
  );
}

export default Hero;
