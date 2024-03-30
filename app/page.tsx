import { Beta } from "@/app/ui/Home/Beta";
import { Connect } from "@/app/ui/Home/Connect";
import { Explore } from "@/app/ui/Home/Explore";
import Hero from "@/app/ui/Home/Hero";
import Project from "@/app/ui/Home/Project";
import { Shop } from "@/app/ui/Home/Shop";
import { AreaFinder } from "./ui/Home/AreaFinder";
import Head from "next/head";
export default function HomePage() {
  return (
    <>
      <Head>
        <title>Explore Rock Bouldering with Mad Boulder </title>
        <link rel="icon" href="/logo/marker.webp" />
      </Head>
      <main className="flex-grow">
        <Hero />
        <AreaFinder />
        <Explore />
        <Beta />
      </main>
    </>
  );
}
