import React from "react";
import Link from "next/link";
import { SignInForm } from "../ui/SignInForm";

export default function SignInPage() {
  return (
    <div className="flex flex-col text-center bg-neutral-100">
      {/* Header */}
      <div className="bg-[#959595] h-48 flex items-center justify-center text-center">
        <h2 className="font-bold text-3xl p-8 text-white">
          Now you can upload your videos as a Contributor
        </h2>
      </div>
      {/* Main */}
      <div className="py-8 flex flex-col gap-6">
        <div className="">
          <h2 className="font-bold text-2xl">Sign in</h2>
          <p className="text-neutral-400 text-sm py-2">
            Enter your email and password
          </p>
        </div>
        <SignInForm />
        <p>
          Upload without an account.{" "}
          <Link
            href={"/video-uploader"}
            className="text-amber-400 font-semibold underline cursor-pointer"
          >
            Skip now
          </Link>
        </p>
        <div className="my-6 flex flex-col gap-2 justify-center h-[139px] w-[312px] mx-auto rounded text-white font-bold  text-center text-2xl bg-cover bg-[url('/images/example.jpeg')]">
          <h4>591</h4>
          <h4>CONTRIBUTORS</h4>
        </div>
      </div>
    </div>
  );
}
