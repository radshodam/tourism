import {
  ChartPieIcon,
  ClipboardIcon,
  FolderIcon,
  HomeIcon,
  Squares2X2Icon,
  StarIcon,
} from "@heroicons/react/24/outline";
import {
  CalendarDaysIcon,
  ChatBubbleOvalLeftEllipsisIcon,
} from "@heroicons/react/20/solid";
import NavList from "./NavList";

const navigation = [
  { name: "Dashboard", href: "#", icon: HomeIcon, current: true },
  { name: "Overview", href: "#", icon: Squares2X2Icon, current: false },
  {
    name: "Comments",
    href: "#",
    icon: ChatBubbleOvalLeftEllipsisIcon,
    current: false,
  },
  { name: "Calendar", href: "#", icon: CalendarDaysIcon, current: false },
  {
    name: "Projects",
    icon: FolderIcon,
    current: false,
    submenu: [
      { name: "Project 1", href: "#", icon: ClipboardIcon },
      { name: "project 2", href: "#", icon: ClipboardIcon },
    ],
  },
  { name: "Analytics", href: "#", icon: ChartPieIcon, current: false },
  { name: "Started", href: "#", icon: StarIcon, current: false },
];


export default function Navigation() {
  return (
    <nav className="flex px-6 flex-1 flex-col">
      <NavList list={navigation} />
    </nav>
  );
}
