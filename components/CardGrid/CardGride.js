import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/20/solid";
import ListCard from "./ListCard";
import { BuildingLibraryIcon, MusicalNoteIcon, SparklesIcon } from "@heroicons/react/24/outline";

const data = [
  {
    name: "Audio Guid",
    title: "Select guide",

    icon: MusicalNoteIcon,
  },
  {
    name: "Programs",
    title: "Select program",

    icon: SparklesIcon,
  },
  {
    name: "Hotels & Restaurants",
    title: "Learn more",
    icon: BuildingLibraryIcon,
  },
  // More people...
];

export default function CardGride() {
  return (
    <div className="w-full flex justify-center">
      <ul
        role="list"
        className="grid grid-cols-1 gap-5 max-w-5xl sm:grid-cols-1 lg:grid-cols-3 "
      >
        <ListCard list={data} />
      </ul>
    </div>
  );
}
