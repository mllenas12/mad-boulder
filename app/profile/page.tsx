import {
  PiMedal,
  PiMapTrifoldBold,
  PiHeartBold,
  PiStarBold,
  PiSunBold,
  PiUploadBold,
  PiMoonBold,
  PiVideoBold,
} from "react-icons/pi";
import { IoLanguage } from "react-icons/io5";
import { BsGraphUp } from "react-icons/bs";
import Link from "next/link";
import { BiLike } from "react-icons/bi";
export default function ProfilePage() {
  return (
    <>
      {/* Options */}
      <div className="absolute top-[400px] list-none w-full md:w-2/3 md:mx-auto text-sm text-start">
        <li className="flex flex-col gap-2">
          <p className="font-semibold bg-neutral-100 px-6 py-1">Explore</p>
          <ul className="flex gap-3 px-4">
            <PiStarBold className="my-auto" />
            <p>Popular</p>
          </ul>
          <ul className="flex gap-3 px-4">
            <PiSunBold className="my-auto" />
            <p>Today&apos;s forecast</p>
          </ul>
          <ul className="flex gap-3 px-4">
            <BiLike className="my-auto" />
            <p>Recommendations</p>
          </ul>
          <ul className="flex gap-3 px-4 pb-2">
            <PiMapTrifoldBold className="my-auto" />
            <p>Plan my climbing trip</p>
          </ul>
        </li>
        <li className="flex flex-col gap-2">
          <p className="font-semibold bg-neutral-100 px-6 py-1">Content</p>
          <ul className="flex gap-3 px-4">
            <PiHeartBold className="my-auto" />
            <p>Favourites</p>
          </ul>
          <Link href="/video-uploader">
            <ul className="flex gap-3 px-4">
              <PiUploadBold className="my-auto" />
              <p>Upload</p>
            </ul>
          </Link>
          <Link href="/profile/my-videos">
            <ul className="flex gap-3 px-4">
              <PiVideoBold className="my-auto" />
              <p>My Videos</p>
            </ul>
          </Link>
          <ul className="flex gap-3 px-4 pb-2">
            <BsGraphUp className="my-auto" />
            <p>Statistics</p>
          </ul>
        </li>
        <li className="flex flex-col gap-2">
          <p className="font-semibold bg-neutral-100 px-6 py-1">Preferences</p>
          <ul className="flex gap-3 px-4">
            <IoLanguage className="my-auto" />
            <p>Language</p>
          </ul>
          <ul className="flex gap-3 px-4">
            <PiMoonBold className="my-auto" />
            <p>Darkmode</p>
          </ul>
        </li>
      </div>
    </>
  );
}
