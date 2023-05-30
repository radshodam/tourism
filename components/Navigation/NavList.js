import React from "react";
import NavLink from "./NavLink";
import DisclosureNavLink from "./DisclosureNavLink";
import classNames from "@/functions/classNames";

function NavList({ list }) {
  return (
    <ul role="list" className="flex flex-1 flex-col gap-y-7">
      <li>
        <ul role="list" className="-ml-9 -mr-5 space-y-1">
          {list?.map((item) => (
            <li
              key={item.name}
              className={classNames(
                item.name === "Started" &&
                  "border-t border-white mt-1.5 border-opacity-30 mb-10"
              )}
            >
              {!item.children ? (
                <NavLink
                  href={item.href}
                  current={item.current}
                  icon={item.icon}
                  name={item.name}
                />
              ) : (
                <DisclosureNavLink
                  icon={item.icon}
                  name={item.name}
                  submenu={item.children}
                  current={item.current}
                />
              )}
            </li>
          ))}
        </ul>
      </li>
    </ul>
  );
}

export default NavList;