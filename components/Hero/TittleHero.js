import React from "react";
import ButtonMd from "../button/ButtonMd";

function TittleHero() {
  return (
    <div className=" flex justify-center ">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl md:text-5xl font-semibold drop-shadow-xl tracking-normal text-white">
            Switzerland Has Never
            <br />
            <span className=" leading-[80px]">Been So Affordable</span>
          </h2>
          <p className="mx-auto  drop-shadow-xl mt-6 max-w-xl text-xl leading-8 text-gray-200">
            Discover Switzerland. Choose the best
            <br />
            Programs, guid, hotels and restaurants.
          </p>
          <div className="mt-16">
            <ButtonMd
              styleButton="bg-red-500 drop-shadow-xl py-3.5 px-10 text-white rounded-md hover:bg-red-400"
              link="/started"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TittleHero;
