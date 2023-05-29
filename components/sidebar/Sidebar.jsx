import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "@/store/slices/toggleSlice";
import SearchInput from "../searchInput/SearchInput";
import Navigation from "../Navigation/Index";
import Profile from "../Profile/Profile";
import { GetWindowSize } from "../CustomHook/windowSize/GetWindowSize";
import classNames from "@/functions/classNames";
import { companyIcon } from "../../public/images/Logo.png";
import Image from "next/image";
export default function Example() {
  const isToggled = useSelector((state) => state.toggle.isToggled);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggle());
  };
  const { height, width } = GetWindowSize();

  return (
    <Transition.Root show={isToggled} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={handleToggle}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden ">
            <div className="pointer-events-none  fixed inset-y-0 left-0 flex max-w-full pr-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto scrollbar-thin scrollbar-thumb-gray-50 scrollbar-track-gray-500 relative overflow-y-auto max-h-screen min-h-max w-72 rounded-r-lg border-gray-200 bg-sidebar ">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute px-6 right-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                      <button
                        type="button"
                        className="rounded-md text-white hover:text-white focus:outline-none focus:ring-1 focus:ring-white"
                        onClick={handleToggle}
                      >
                        <span className="sr-only">Close panel</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex px-6 h-16 shrink-0 items-center ">
                    <Image
                      className="h-10 w-auto"
                      src="/../public/images/Logo.png"
                      alt="Your Company"
                      width={100}
                      height={100}
                    />
                  </div>
                  {/* /* ------------- search ------------ */}
                  <div className="px-6">
                    <SearchInput />
                  </div>

                  {/* /* ------------- divider ------------  */}
                  <div className="relative py-6">
                    <div
                      className="absolute inset-0 flex items-center"
                      aria-hidden="true"
                    >
                      <div className="w-full border-t border-gray-300 opacity-25" />
                    </div>
                  </div>
                  {/* /* ------------------- nav ----------------------  */}
                  <Navigation />
                  <div
                    className={classNames(
                      height > 678 ? " absolute bottom-0" : "",
                      "w-full"
                    )}
                  >
                    {" "}
                    <Profile />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
