import classNames from "@/functions/classNames";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import ToggleButton from "../toggleButton/toggleButton";
import { Bars3BottomLeftIcon } from "@heroicons/react/24/outline";
function NavItem({ href, children }) {
  let isActive = useRouter().pathname === href;

  return (
    <li>
      <a
        href={href}
        className={classNames(
          "relative block px-2 py-2 transition text-white",
          isActive ? "text-white hover:text-red-500 " : "hover:text-red-500 "
        )}
      >
        {children}
        {isActive && (
          <span className="absolute inset-x-1 -bottom-[12px] h-[3px] bg-gradient-to-r from-red-500/0 via-red-500/40 to-red-500/0 " />
        )}
      </a>
    </li>
  );
}

function Header() {
  return (
    <div className=" absolute w-full top-0 flex justify-between border-b border-opacity-25 border-white ">
      <div className="z-10">
        <h3 className="text-red-400 px-3 py-2 text-3xl">Logo</h3>
      </div>
      <div className="py-2.5">
        <ul
          className={` hidden md:flex md:w-max px-2 text-sm lg:text-xl font-light text-zinc-800backdrop-blur `}
        >
          <NavItem href="/">Day tours</NavItem>
          <NavItem href="/Multi-day">Multi-day tours</NavItem>
          <NavItem href="/Attractions">Attractions</NavItem>
          <NavItem href="/Themes">Themes</NavItem>
        </ul>
      </div>
      <div className="bg-red-500 flex items-center z-10 hover:bg-red-400 ">
        <ToggleButton />
      </div>
    </div>
  );
}

export default Header;
