"use client";
import { FcGoogle } from "react-icons/fc";
import { FaLinkedin, FaFacebookSquare } from "react-icons/fa";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link.js";
import { getAuth } from "@/app/lib/firebase/firebase-utils";
import { IFormErrors } from "../lib/types";
export const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });
  const router = useRouter();

  const validateEmail = (email: string) => {
    const re = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return re.test(email.trim());
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    setErrors({ email: "", password: "" });

    let formErrors: IFormErrors = { email: "", password: "" };

    if (!validateEmail(email)) {
      formErrors.email = "Invalid email address";
    }
    if (!password) {
      formErrors.password = "Password is required";
    }

    if (formErrors.email === "" && formErrors.password === "") {
      getAuth(email.trim(), password, router, false);
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <form
      className="flex flex-col justify-center items-center gap-5 px-9 "
      onSubmit={handleSubmit}
    >
      <input
        type="email"
        name="userEmail"
        placeholder="Email"
        required
        onChange={(e) => setEmail(e.target.value.trim())}
        className="w-full md:w-1/2 h-9 mx-auto placeholder:px-2"
      />
      <input
        type="password"
        name="userPassword"
        id="userPassword"
        placeholder="Password"
        required
        onChange={(e) => setPassword(e.target.value)}
        className="w-full md:w-1/2 h-9 mx-auto placeholder:px-2"
      />
      {errors.password && (
        <p className="text-red-500 text-xs font-semibold ">{errors.password}</p>
      )}
      {errors.email && (
        <p className="text-red-500 text-xs font-semibold">{errors.email}</p>
      )}
      <button
        type="submit"
        className="w-full md:w-1/2 bg-amber-400 text-white p-1"
      >
        LOG IN
      </button>
      <p className="text-center mt-2">
        Don&apos;t you have an account?{" "}
        <Link
          href={"/sign-up"}
          className="text-amber-400 font-semibold underline cursor-pointer"
        >
          Sign up
        </Link>
      </p>

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
    </form>
  );
};
