import Image from "next/image";
import { Inter } from "next/font/google";
import Sidebar from "@/components/sidebar/Sidebar";
import Example from "@/components/sidebar/Sidebar2";
import ToggleButton from "@/components/toggleButton/toggleButton";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      {/* <Sidebar /> */}
      <ToggleButton />
      <Example />
    </>
  );
}
