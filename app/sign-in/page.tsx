import React from "react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaLinkedin, FaFacebookSquare } from "react-icons/fa";

export default function SignInPage() {
  return (
    <div className="flex flex-col text-center bg-neutral-100">
      {/* Header */}
      <div className="bg-[#959595] h-48 flex items-center text-center">
        <h2 className="font-bold text-3xl p-8 text-white">
          Be part of the world&apos;s largest beta library
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
        <form className="flex flex-col justify-center items-center gap-5 px-9 ">
          {/* onSubmit={handleSubmit} */}
          <input
            type="email"
            name="userEmail"
            placeholder="Email"
            required
            //onChange={handleChange}
            className="w-full h-9 mx-auto placeholder:px-2"
          />
          <input
            type="password"
            name="userPassword"
            id="userPassword"
            placeholder="Password"
            required
            //onChange={handleChange}
            className="w-full h-9 mx-auto placeholder:px-2"
          />
          {/* {error && (
        <p className="text-red-800 text-center text-xs mt-2 font-semibold md:text-base">
        {error}
        </p> 
      )}*/}
          <button className="w-full bg-amber-400 text-white p-1">LOG IN</button>
          <p className="text-center mt-2">
            Don&apos;t you have an account?{" "}
            <Link
              href={"/sign-up"}
              className="text-amber-400 font-semibold underline"
            >
              Sign up
            </Link>
          </p>
        </form>
        <div className="flex flex-col gap-2">
          <p>Sign in with</p>
          <div className="flex justify-center gap-6 max-h-11">
            <a href="">
              <FcGoogle size={44} />
            </a>
            <a href="">
              <FaFacebookSquare size={44} fill="#0A66C2" />
            </a>
            <a href="">
              <FaLinkedin size={44} fill="#0A66C2" />
            </a>
          </div>
        </div>
        <p>
          Upload without an account.{" "}
          <Link
            href={"/video-uploader"}
            className="text-amber-400 font-semibold underline"
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
