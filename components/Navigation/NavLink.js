import classNames from "@/functions/classNames";

export default function NavLink({ href, current, icon: Icon, name }) {
  return (
    <a
      href={href}
      className={classNames(
        current
          ? "bg-white bg-opacity-10 font-semibold"
          : "hover:bg-white hover:bg-opacity-20",
        "group flex gap-x-3 rounded-r-3xl py-2 my-2.5 pl-9 font-light text-sm leading-6  text-white"
      )}
    >
      <Icon
        className="opacity-60 h-6 w-6 shrink-0 text-white"
        aria-hidden="true"
      />
      {name}
      {name === "Comments" && (
        <p className="bg-red-500 hover:bg-red-400  ml-auto mr-2 font-extralight text-center flex justify-center items-center rounded-full w-5 h-5">
          3
        </p>
      )}
    </a>
  );
}