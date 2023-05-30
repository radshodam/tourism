import React from "react";
import CustomStyle from "./styles.module.css";
import swImage1 from "/public/images/natural/swi-1.webp";
import swImage2 from "/public/images/natural/swi-2.webp";
import swImage3 from "/public/images/natural/swi-3.webp";
import swImage4 from "/public/images/natural/swi-4.webp";
import swImage5 from "/public/images/natural/swi-5.webp";
import swImage6 from "/public/images/natural/swi-6.webp";
import Profile from "/public/images/profile/profile.jpg";
import Image from "next/image";
import { ClockIcon, TicketIcon } from "@heroicons/react/20/solid";

function ProgramsGrid() {
  const gridItems = [
    {
      id: 1,
      className: CustomStyle.card1,
      content: "Div 1",
      image: swImage1,
      title: "The Best of Zurich",
      iconTime: ClockIcon,
      iconTicket: TicketIcon,
    },
    {
      id: 2,
      className: CustomStyle.card2,
      content: "Div 2",
      image: swImage2,
      title: "Other Place ",
      iconTime: ClockIcon,
      iconTicket: TicketIcon,
    },
    {
      id: 3,
      className: CustomStyle.card3,
      content: "Div 3",
      image: swImage3,
      title: "Other Place ",
      iconTime: ClockIcon,
      iconTicket: TicketIcon,
    },
    {
      id: 4,
      className: CustomStyle.card4,
      content: "Div 4",
      image: swImage4,
      title: "Other Place ",
      iconTime: ClockIcon,
      iconTicket: TicketIcon,
    },
    {
      id: 5,
      className: CustomStyle.card5,
      content: "Div 5",
      image: swImage5,
      title: "Other Place ",
      iconTime: ClockIcon,
      iconTicket: TicketIcon,
    },
    {
      id: 6,
      className: CustomStyle.card6,
      content: "Div 6",
      image: swImage6,
      title: "Other Place ",
      iconTime: ClockIcon,
      iconTicket: TicketIcon,
    },
  ];
  return (
    <div className={`${CustomStyle.parent}`}>
      {gridItems.map((item) => (
        <div
          key={item.id}
          className={`${item.className} mt-5 md:mt-0 transition-all ease-in relative h-full hover:mix-blend-plus-lighter`}
        >
          <Image
            src={item.image}
            className=" w-full h-full object-cover rounded-lg backdrop-opacity-90 "
            width={1500}
            height={200}
          />
          <div className=" absolute top-0 h-full">
            <div className="h-full relative">
              <div className="flex h-full flex-col items-start justify-between ">
                <div className="flex-col flex px-6 mt-4 ">
                  <h3
                    className={`${CustomStyle.textShadowHead} text-white text-2xl font-semibold `}
                  >
                    {item.title}
                  </h3>
                  <div className="flex justify-start px-2">
                    <div className="flex justify-start">
                      <item.iconTicket
                        className={`${CustomStyle.textShadowHead} mx-1 h-6 w-6 font-extrabold shrink-0 text-white`}
                        aria-hidden="true"
                      />
                      <p className="font-light text-white mt-1 text-sm">
                        $12,000
                      </p>
                    </div>
                    <div className="flex justify-start">
                      <item.iconTime
                        className={`${CustomStyle.textShadowHead} mx-1 h-6 w-6 font-extrabold shrink-0 text-white`}
                        aria-hidden="true"
                      />
                      <p className="font-light text-white mt-1 text-sm">
                        3 hours
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-start px-6 mb-4">
                  <div>
                    <Image
                      className="inline-block h-10 w-10 rounded-full ring-8 ring-gray-500 ring-opacity-60"
                      src={Profile}
                      alt="profile"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="flex flex-col px-4">
                    <p className="text-white font-semibold">name: </p>
                    <p className="text-white font-light ">city:</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProgramsGrid;
