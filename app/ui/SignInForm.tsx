"use client";
import { FcGoogle } from "react-icons/fc";
import { FaLinkedin, FaFacebookSquare } from "react-icons/fa";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link.js";
import { IFormErrors } from "@/app/lib/types";
import { useAuth } from "../lib/context/AuthProvider";

export const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });
  const router = useRouter();
  const { loginWithGoogle, logIn } = useAuth();
  const validateEmail = (email: string) => {
    const re = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return re.test(email.trim());
  };

  const handleLoginWithGoogle = () => {
    loginWithGoogle()
      .then(() => router.push("/video-uploader"))
      .catch((err: string) => {
        console.log(err);
      });
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
      logIn(email.trim(), password, router);
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <form
        className="flex flex-col justify-center items-center gap-5"
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          name="userEmail"
          placeholder="Email"
          required
          onChange={(e) => setEmail(e.target.value.trim())}
          className="w-full  h-9 mx-auto placeholder:px-4"
        />
        <input
          type="password"
          name="userPassword"
          id="userPassword"
          placeholder="Password"
          required
          onChange={(e) => setPassword(e.target.value)}
          className="w-full h-9 mx-auto placeholder:px-4"
        />
        {errors.password && (
          <p className="text-red-500 text-xs font-semibold ">
            {errors.password}
          </p>
        )}
        {errors.email && (
          <p className="text-red-500 text-xs font-semibold">{errors.email}</p>
        )}
        <button type="submit" className="w-full bg-amber-400 text-white p-1">
          LOG IN
        </button>
        <p className="text-center">
          Don&apos;t you have an account?{" "}
          <Link
            href={"/sign-up"}
            className="text-amber-400 font-semibold underline cursor-pointer"
          >
            Sign up
          </Link>
        </p>
      </form>
      <div className="divider text-xs">OR</div>

      <button
        onClick={handleLoginWithGoogle}
        className="w-full flex border p-2 justify-center gap-2 bg-white"
      >
        <FcGoogle className="my-auto" />
        <p>Continue with Google</p>
      </button>
    </div>
  );
};
