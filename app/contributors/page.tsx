import Link from "next/link";
import { FaCheck } from "react-icons/fa6";
export default function ContributorsPage() {
  return (
    <div className="flex flex-col text-center gap-4 p-8 md:py-6 lg:w-3/5 md:mx-auto">
      <header className="flex flex-col gap-2">
        <h2 className="font-semibold">Upload your Video</h2>
        <p className="text-sm text-neutral-500">
          Now you can choose to upload your videos as a Contributor
        </p>
      </header>
      <div className="flex flex-col md:flex-row gap-4  text-white">
        <div className="rounded-2xl bg-sky-600 p-6 text-start md:w-1/2">
          <h4 className="text-xl font-semibold ">Upload as a Contributor</h4>
          <div className="divider m-0 "></div>
          <li className="text-sm list-none flex flex-col gap-2">
            <ul className="flex gap-2">
              <FaCheck className="my-auto" />
              Access to all your uploaded videos
            </ul>
            <ul className="flex gap-2">
              <FaCheck className="my-auto" />
              Track the status of your uploads
            </ul>
            <ul className="flex gap-2">
              <FaCheck className="my-auto" />
              Monitor the views your videos receive
            </ul>
            <ul className="flex gap-2">
              <FaCheck className="my-auto" />
              And much more!
            </ul>
          </li>
          <Link href="/sign-up">
            <button className="bg-sky-500 font-semibold mx-auto w-full rounded-xl my-4">
              Register now!
            </button>
          </Link>
          <p className="text-xs text-center">
            Already have an account?{" "}
            <Link
              href={"/log-in"}
              className="text-white font-bold underline cursor-pointer"
            >
              Log in here!
            </Link>
          </p>
        </div>

        <div className="rounded-2xl bg-sky-800 p-6 text-start md:w-1/2">
          <h4 className="text-xl font-semibold">
            Upload without registration:
          </h4>
          <div className="divider m-0"></div>
          <p className="text-sm list-none flex flex-col gap-2 h-[104px]">
            Don&apos;t want to register? No problem! You can still upload your
            video through our simple form.
          </p>
          <Link href="/video-uploader">
            <button className="bg-sky-500 font-semibold mx-auto w-full rounded-xl mt-4">
              Upload video
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
