import classNames from "@/functions/classNames";
import { Disclosure } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
// import { ChevronRightIcon } from "@heroicons/react/outline";

export default function DisclosureNavLink({
  icon: Icon,
  current,
  name,
  submenu,
}) {
  return (
    <Disclosure as="div">
      {({ open }) => (
        <>
          <Disclosure.Button
            className={classNames(
              current
                ? "bg-white bg-opacity-10 font-semibold"
                : "hover:bg-white hover:bg-opacity-20",
              "flex items-center w-full text-left rounded-3xl my-1 py-2 pl-9  gap-x-3 text-sm leading-6 font-light text-white"
            )}
          >
            <Icon
              className="opacity-60 h-6 w-6 shrink-0 text-white"
              aria-hidden="true"
            />
            {name}
            <ChevronRightIcon
              className={classNames(
                open ? "rotate-90 text-white" : "text-white",
                "mr-2 ml-auto h-5 w-5 shrink-0"
              )}
              aria-hidden="true"
            />
          </Disclosure.Button>
          <Disclosure.Panel as="ul" className="mt-1 px-2">
          {submenu.map((subItem) => (
              <li key={subItem.name}>
                {/* 44px */}
                <Disclosure.Button
                  as="a"
                  href={subItem.href}
                  className={classNames(
                    subItem.current
                      ? "bg-white bg-opacity-10 font-semibold"
                      : "hover:bg-white hover:bg-opacity-10",
                    "group flex gap-x-3 rounded-r-3xl py-2 pl-16 font-light text-sm leading-6  text-white"
                  )}
                >
                  <Icon
                    className="opacity-60 h-5 w-5 shrink-0 text-white"
                    aria-hidden="true"
                  />
                  {subItem.name}
                </Disclosure.Button>
              </li>
            ))}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
