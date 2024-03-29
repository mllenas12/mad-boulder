import Link from "next/link";
import { SignUpForm } from "../ui/SignUpForm";
export default function SignUpPage() {
  return (
    <div className="flex flex-col text-center bg-neutral-100">
      {/* Header */}
      <div className="bg-[#959595] h-48 flex items-center justify-center text-center">
        <h2 className="font-bold text-3xl p-8 text-white">
          Be part of the world&apos;s largest beta library
        </h2>
      </div>
      {/* Main */}
      <div className="py-8 flex flex-col gap-6">
        <div className="">
          <h2 className="font-bold text-2xl">Sign up</h2>
          <p className="text-neutral-400 text-sm py-2">
            Create an account and <br></br> save time sharing your betas
          </p>
        </div>
        <SignUpForm />
        <p>
          Upload without an account.{" "}
          <Link
            href={"/video-uploader"}
            className="text-amber-400 font-semibold underline cursor-pointer"
          >
            Skip now
          </Link>
        </p>
      </div>
    </div>
  );
}
