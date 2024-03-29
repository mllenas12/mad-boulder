import React from "react";

export default function SignInPage() {
  return (
    <div className="flex flex-col gap-4 text-center bg-neutral-100">
      {/* Header */}
      <div className="bg-[#959595]">
        <h2 className="font-bold text-2xl  p-8 text-white">
          Be part of the world&apos;s largest beta library
        </h2>
      </div>
      {/* Main */}
      <div className="">
        <div className="p-6">
          <h2 className="font-bold text-2xl">Sign in</h2>
          <p className="text-neutral-400 text-xs py-2">
            Enter your email and password
          </p>
        </div>
        <form className="flex flex-col bg-white rounded-3xl mx-auto gap-2 md:px-20 text-black">
          {/* onSubmit={handleSubmit} */}
          <label htmlFor="userEmail" className="font-semibold md:text-xl">
            Enter your email
          </label>
          <input
            type="email"
            name="userEmail"
            required
            //onChange={handleChange}
            className="rounded w-full bg-slate-200  mx-auto mb-2 md:h-10"
          />
          <label htmlFor="UserPassword" className="font-semibold md:text-xl">
            Password
          </label>
          <input
            type="password"
            name="userPassword"
            id="userPassword"
            required
            //onChange={handleChange}
            className="rounded w-full bg-slate-200  mx-auto  md:h-10"
          />
          {/* {error && (
        <p className="text-red-800 text-center text-xs mt-2 font-semibold md:text-base">
        {error}
        </p> 
      )}*/}
          <p className="text-slate-400 text-xs text-center mt-2">
            Don&apos;t have an account yet?{" "}
            {/* <Link to={"/sign-up"} className="text-black underline"> */}
            Sign up now
            {/* </Link> */}
          </p>
          <button className="md:w-full text-sm font-semibold p-2 px-6 w-fit mx-auto my-2 border rounded bg-yellow-400  hover:border-yellow-400 hover:bg-white">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

{
  /* <h2 className="font-semibold text-3xl">Log In</h2>
      <p className="text-xs py-2">
        Log into your Mad Boulder account to upload betas as a contributor.
      </p> */
}
// <form className="flex flex-col bg-white rounded-3xl mx-auto gap-2 md:px-20 text-black">
// {/* onSubmit={handleSubmit} */}
// <label htmlFor="userEmail" className="font-semibold md:text-xl">
//   Enter your email
// </label>
// <input
//   type="email"
//   name="userEmail"
//   required
//   //onChange={handleChange}
//   className="rounded w-full bg-slate-200  mx-auto mb-2 md:h-10"
// />
// <label htmlFor="UserPassword" className="font-semibold md:text-xl">
//   Password
// </label>
// <input
//   type="password"
//   name="userPassword"
//   id="userPassword"
//   required
//   //onChange={handleChange}
//   className="rounded w-full bg-slate-200  mx-auto  md:h-10"
// />
// {/* {error && (
// <p className="text-red-800 text-center text-xs mt-2 font-semibold md:text-base">
// {error}
// </p>
// )}*/}
// <p className="text-slate-400 text-xs text-center mt-2">
//   Don&apos;t have an account yet?{" "}
//   {/* <Link to={"/sign-up"} className="text-black underline"> */}
//   Sign up now
//   {/* </Link> */}
// </p>
// <button className="md:w-full text-sm font-semibold p-2 px-6 w-fit mx-auto my-2 border rounded bg-yellow-400  hover:border-yellow-400 hover:bg-white">
//   Login
// </button>
// </form>
