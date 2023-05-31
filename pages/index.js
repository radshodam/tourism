import Image from "next/image";
import { Inter } from "next/font/google";
import Sidebar from "@/components/sidebar/Sidebar";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import TittleHero from "@/components/Hero/TittleHero";
import CardGride from "@/components/CardGrid/CardGride";
import ProgramsGrid from "@/components/ProgramsGrid/ProgramsGrid";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      {/* <Sidebar /> */}
      <Hero>
        <div className="absolute w-full min-h-[600px] top-8">
          <TittleHero />
          <CardGride />
        </div>
      </Hero>
      <Header />
      <Sidebar />
      <div>
        <section className="relative bg-gradient-to-b h-[2500px] from-[#0c0605] to-[#140a08]">
          <div className="flex justify-center flex-col w-full py-16 md:py-24 items-center">
            <h4 className="text-4xl md:text-5xl text-white">Top Programs</h4>
            <h4 className="mx-auto  drop-shadow-xl mt-9 max-w-xl text-xl leading-8 text-gray-200">
              Our programs are complied by the best guides. Each tourism
              <br /> will be able to choose a program according to their level.
            </h4>
          </div>
          <ProgramsGrid />
        </section>
      </div>
    </>
  );
}
