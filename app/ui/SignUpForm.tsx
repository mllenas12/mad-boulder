"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { getAuth } from "../lib/firebase/firebase-utils";
import { IFormErrors } from "../lib/types";

export const SignUpForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [confirmedPassword, setConfifmedPassword] = useState("");
  const router = useRouter();

  const validateEmail = (email: string) => {
    const re = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return re.test(email);
  };

  const validatePassword = (password: string) => {
    // Password with minimum of 6 characters
    return password.length >= 6;
  };

  const validateConfirmedPassword = (password: string) => {
    return password === confirmedPassword;
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    setErrors({ email: "", password: "" });

    let formErrors: IFormErrors = { email: "", password: "" };

    if (!validateEmail(email)) {
      formErrors.email = "Invalid email adress";
    }
    if (!validatePassword(password)) {
      formErrors.password = "Password must be at least 6 characters long";
    }
    if (!validateConfirmedPassword(password)) {
      formErrors.password = "Passwords don't match";
    }

    if (formErrors.email === "" && formErrors.password === "") {
      getAuth(email.trim(), password, router, true);
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
        type="text"
        name="name"
        value={name}
        placeholder="Full name"
        required
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 md:w-1/2 h-9 mx-auto placeholder:px-2"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        required
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 md:w-1/2 h-9 mx-auto placeholder:px-2"
      />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Password"
        value={password}
        required
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-2 md:w-1/2 h-9 mx-auto placeholder:px-2"
      />
      <input
        type="password"
        name="confirmedPassword"
        id="confirmedPassword"
        placeholder="Confirm your password"
        required
        onChange={(e) => setConfifmedPassword(e.target.value)}
        className="w-full p-2 md:w-1/2 h-9 mx-auto placeholder:px-2"
      />

      {errors.password && (
        <p className="text-red-500 text-xs font-semibold ">{errors.password}</p>
      )}
      {errors.email && (
        <p className="text-red-500 text-xs font-semibold">{errors.email}</p>
      )}
      <div className="flex flex-col md:w-1/2 md:mx-auto gap-2 mr-auto">
        <div className="flex gap-2">
          <input
            type="checkbox"
            id="check1"
            name="check1"
            value="check1"
            className=""
          />
          <label htmlFor="check1" className="text-xs">
            {" "}
            ...
          </label>
        </div>
        <div className="flex gap-2">
          <input
            type="checkbox"
            id="check2"
            name="check2"
            value="check2"
            className=""
          />
          <label htmlFor="check2" className="text-xs">
            {" "}
            I wish to subscribe to MadBoulder&apos;s newsletter
          </label>
        </div>
      </div>

      <button
        type="submit"
        className="w-full md:w-1/2 bg-amber-400 text-white p-1"
      >
        SIGN UP
      </button>
    </form>
  );
};
