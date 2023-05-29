import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function SearchInput() {
  return (
    <>
      <div className="relative mt-2 rounded-md ">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2.5">
          <MagnifyingGlassIcon
            className="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </div>
        <input
          type="search"
          name="search"
          id="search"
          className="block w-full rounded-md py-1.5 border-none pl-10 bg-opacity-10 bg-white text-white ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="Search"
        />
      </div>
    </>
  );
}
