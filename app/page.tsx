import { Beta } from "@/app/ui/Home/Beta";
import { Explore } from "@/app/ui/Home/Explore";
import Hero from "@/app/ui/Home/Hero";
import { AreaFinder } from "@/app/ui/Home/AreaFinder";
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
