"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { IFormErrors } from "@/app/lib/types";
import Link from "next/link";
import { useAuth } from "@/app/lib/context/AuthProvider";
import { nanoid } from "nanoid";
export const SignUpForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<string[]>([]);
  const [confirmedPassword, setConfifmedPassword] = useState("");
  const [displayErrors, setDisplayErrors] = useState<any>();
  const { signUp } = useAuth();
  const router = useRouter();

  const validatePassword = (password: string) => {
    return password.length >= 6;
  };

  const validateConfirmedPassword = (password: string) => {
    return password === confirmedPassword;
  };

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    console.log(errors);
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
      } catch (error) {
        const errorCode = error.code
          .split("auth/")[1]
          .replaceAll("-", " ")
          .toUpperCase();

        formErrors.push("jelou");
      }
    }
    setErrors((prevErrors: string[]) => [...prevErrors, ...formErrors]);
  };

  const getErrors = errors.map((errors: string) => {
    return (
      <p key={nanoid()} className="text-red-500 text-xs font-semibold ">
        {errors}
      </p>
    );
  });

  // const [errors, setErrors] = useState({ email: "", password: "" });

  // const [confirmedPassword, setConfifmedPassword] = useState("");
  // const { signUp } = useAuth();
  // const router = useRouter();

  // const validateEmail = (email: string) => {
  //   const re = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  //   return re.test(email);
  // };

  // const validatePassword = (password: string) => {
  //   return password.length >= 6;
  // };

  // const validateConfirmedPassword = (password: string) => {
  //   return password === confirmedPassword;
  // };

  // const handleSubmit = (event: React.SyntheticEvent) => {
  //   event.preventDefault();
  //   setErrors({ email: "", password: "" });

  //   let formErrors: IFormErrors = { email: "", password: "" };

  //   if (!validateEmail(email)) {
  //     formErrors.email = "Invalid email adress";
  //   }
  //   if (!validatePassword(password)) {
  //     formErrors.password = "Password must be at least 6 characters long";
  //   }
  //   if (!validateConfirmedPassword(password)) {
  //     formErrors.password = "Passwords don't match";
  //   }
  //   if (formErrors.email === "" && formErrors.password === "") {
  //     signUp(email.trim(), password, name, router);
  //   } else {
  //     setErrors(formErrors);
  //   }
  // };

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
          className="w-full  h-9 mx-auto placeholder:px-4"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          className="w-full h-9 mx-auto placeholder:px-4"
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
          className="w-full h-9 mx-auto placeholder:px-4"
        />
        <input
          type="password"
          name="confirmedPassword"
          id="confirmedPassword"
          placeholder="Confirm your password"
          required
          onChange={(e) => setConfifmedPassword(e.target.value)}
          className="w-full h-9 mx-auto placeholder:px-4"
        />

        <div className="flex flex-col">{displayErrors}</div>

        {/* {errors.password && (
          <p className="text-red-500 text-xs font-semibold ">
            {errors.password}
          </p>
        )}
        {errors.email && (
          <p className="text-red-500 text-xs font-semibold">{errors.email}</p>
        )} */}
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
                className="text-amber-400 font-semibold  cursor-pointer"
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

        <button type="submit" className="w-full bg-amber-400 text-white p-1">
          SIGN UP
        </button>
      </form>
    </div>
  );
};
