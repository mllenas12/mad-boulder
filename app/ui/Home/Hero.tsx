import React from "react";
import { useTranslation } from "react-i18next";
import { Suspense } from "react";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { appWithTranslation } from "next-i18next";
import Button from "../Button";
const Hero = () => {
  //const { t, i18n } = useTranslation("translations");

  return (
    <div className="h-[952px] text-center text-white flex flex-col justify-center bg-cover bg-no-repeat bg-[url('/images/home/hero-background-small.png')] md:bg-[url('/images/home/hero-background.png')]">
      <h1 className="text-7xl font-bold">
        ROCK CLIMBING ACCESSIBLE FOR EVERYONE
      </h1>
      <h3 className="text-2xl font-semibold p-5">
        Explore our available climbing areas and get all the information you
        need for your next climbing trip
      </h3>
      <Button>EXPLORE MAP</Button>
      {/* <h1>{t("home.heroSection.title")}</h1>
      <h3>{t("home.heroSection.subtitle")}</h3> */}
    </div>
  );
};

export default Hero;
