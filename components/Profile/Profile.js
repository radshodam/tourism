import { Cog6ToothIcon, UserIcon } from "@heroicons/react/24/outline";
import NavList from "../Navigation/NavList";

const ProfileData = [
  { name: "User", href: "#", icon: UserIcon, current: false },
  { name: "Setting", href: "#", icon: Cog6ToothIcon, current: false },
];

export default function Profile() {
  return (
    <nav className="flex px-6 w-full flex-1 flex-col">
      <NavList list={ProfileData} />
    </nav>
  );
}
