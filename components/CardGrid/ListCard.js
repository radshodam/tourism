import Link from "next/link";
import React from "react";

function ListCard({ list }) {
  return (
    <>
      {list.map((item) => (
        <li
          key={item.name}
          className="col-span-1 transition-all ease-in mx-auto justify-center rounded-md bg-gray-400 bg-opacity-50 hover:bg-opacity-20 shadow"
        >
          <div className="flex w-full min-w-[296px]  items-center justify-between space-x-6 p-6">
            <div className="flex-1 truncate">
              <div className="flex items-center justify-between space-x-3">
                <h3 className="truncate text-md font-semibold text-white">
                  {item.name}
                </h3>
                <item.icon
                  className="opacity-60 h-6 w-6 shrink-0 text-white"
                  aria-hidden="true"
                />
              </div>
              <p className="mt-1 truncate text-sm text-gray-200">
                {item.title}
              </p>
              <Link href="/" passHref>
                <p className=" border-b text-white w-fit hover:text-red-500 border-b-red-500 pt-6">
                  link
                </p>
              </Link>
            </div>
          </div>
        </li>
      ))}
    </>
  );
}

export default ListCard;
