"use client";
import {
  PiMapTrifoldBold,
  PiHeartBold,
  PiStarBold,
  PiSunBold,
  PiUploadBold,
  PiMoonBold,
  PiVideoBold,
  PiGearBold,
} from "react-icons/pi";
import { BiLike } from "react-icons/bi";
import { IoLanguage } from "react-icons/io5";
import { BsGraphUp } from "react-icons/bs";
import Link from "next/link";

function ProfilePage() {
  return (
    <>
      {/* Options */}
      <div className="list-none w-full md:w-2/3 lg:w-1/2 md:mx-auto text-sm text-start">
        <li className="flex flex-col gap-2">
          <p className="font-semibold bg-neutral-100 px-6 py-1 md:text-lg">
            Explore
          </p>
          <ul className="flex px-4">
            <div className="flex gap-3 md:text-lg">
              <PiStarBold className="my-auto md:text-lg" />
              <p className="md:text-lg">Popular</p>
            </div>
          </ul>
          <ul className="flex gap-3 px-4">
            <PiSunBold className="my-auto md:text-lg" />
            <p className="md:text-lg">Today&apos;s forecast</p>
          </ul>
          <ul className="flex gap-3 px-4">
            <BiLike className="my-auto md:text-lg" />
            <p className="md:text-lg">Recommendations</p>
          </ul>
          <ul className="flex gap-3 px-4 pb-2">
            <PiMapTrifoldBold className="my-auto md:text-lg" />
            <p className="md:text-lg">Plan my climbing trip</p>
          </ul>
        </li>
        <li className="flex flex-col gap-2 ">
          <p className="font-semibold bg-neutral-100 px-6 py-1 md:text-lg">
            Content
          </p>
          <ul className="flex gap-3 px-4">
            <PiHeartBold className="my-auto md:text-lg" />
            <p className="md:text-lg">Favourites</p>
          </ul>
          <Link href="/video-uploader">
            <ul className="flex gap-3 px-4">
              <PiUploadBold className="my-auto md:text-lg" />
              <p className="md:text-lg">Upload</p>
            </ul>
          </Link>
          <Link href="/profile/my-videos">
            <ul className="flex gap-3 px-4">
              <PiVideoBold className="my-auto md:text-lg" />
              <p className="md:text-lg">My Videos</p>
            </ul>
          </Link>
          <ul className="flex gap-3 px-4 pb-2">
            <BsGraphUp className="my-auto md:text-lg" />
            <p className="md:text-lg">Statistics</p>
          </ul>
        </li>
        <li className="flex flex-col gap-2">
          <p className="font-semibold bg-neutral-100 px-6 py-1 md:text-lg">
            Preferences
          </p>
          <ul className="flex gap-3 px-4">
            <IoLanguage className="my-auto md:text-lg" />
            <p className="md:text-lg">Language</p>
          </ul>
          <ul className="flex gap-3 px-4 ">
            <PiMoonBold className="my-auto md:text-lg" />
            <p className="md:text-lg">Darkmode</p>
          </ul>
          <ul className="flex gap-3 px-4 mb-6">
            <PiGearBold className="my-auto md:text-lg" />
            <p className="md:text-lg">Upload Profile</p>
          </ul>
        </li>
      </div>
    </>
  );
}

export default ProfilePage;
