"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { nanoid } from "nanoid";
import { useSignUp } from "@/lib/hooks/useSignUp";

export const SignUpForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<string[]>([]);
  const [confirmedPassword, setConfifmedPassword] = useState("");
  const { signUp, error: signUpError } = useSignUp();
  const router = useRouter();

  const validatePassword = (password: string) => {
    return password.length >= 6;
  };

  const validateConfirmedPassword = (password: string) => {
    return password === confirmedPassword;
  };

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    setErrors([]);
    let formErrors: string[] = [];

    if (!validatePassword(password)) {
      formErrors.push("Password must be at least 6 characters long");
    }
    if (!validateConfirmedPassword(password)) {
      formErrors.push("Passwords don't match");
    }
    if (formErrors.length == 0) {
      try {
        await signUp(email.trim(), password, name, router);
      } catch (error: any) {
        const errorCode = error.code
          .split("auth/")[1]
          .replaceAll("-", " ")
          .toUpperCase();

        formErrors.push("");
      }
    }
    setErrors((prevErrors: string[]) => [...prevErrors, ...formErrors]);
  };

  const showErrors = errors.map((errors: string) => {
    return (
      <p key={nanoid()} className="text-red-500 text-xs font-semibold ">
        {errors}
      </p>
    );
  });

  return (
    <div className="flex flex-col gap-2">
      <form
        className="flex flex-col justify-center items-center gap-5"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="name"
          value={name}
          placeholder="Full name"
          required
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 h-9 mx-auto  rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          className="w-full h-9 mx-auto px-4 rounded"
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
          className="w-full h-9 mx-auto px-4 rounded"
        />
        <input
          type="password"
          name="confirmedPassword"
          id="confirmedPassword"
          placeholder="Confirm your password"
          required
          onChange={(e) => setConfifmedPassword(e.target.value)}
          className="w-full h-9 mx-auto px-4 rounded"
        />
        <div className="flex flex-col">{showErrors}</div>
        <div className="w-full mx-auto text-start flex flex-col gap-1">
          <div className="flex gap-2">
            <input
              type="checkbox"
              id="termsAndCond"
              name="termsAndCond"
              value="termsAndCond"
              required
            />
            <label htmlFor="termsAndCond" className="text-xs">
              {" "}
              I agreed to the{" "}
              <Link
                href={"/video-uploader"}
                className="text-amber-400 font-semibold cursor-pointer"
              >
                Terms and Conditions <span className="text-red-500">*</span>
              </Link>
            </label>
          </div>
          <div className="flex gap-2">
            <input type="checkbox" id="check2" name="check2" value="check2" />
            <label htmlFor="check2" className="text-xs">
              {" "}
              I wish to subscribe to MadBoulder&apos;s newsletter
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-amber-400 text-white p-1 rounded"
        >
          SIGN UP
        </button>
        {signUpError && (
          <p className="text-red-500 text-xs font-semibold">{signUpError}</p>
        )}
      </form>
    </div>
  );
};
