import React from "react";

const Login = () => {
  return (
    <div className="p-8 flex flex-col gap-4">
      <h2 className="font-semibold text-3xl">Log In</h2>
      <p className="text-xs py-2">
        Log into your Mad Boulder account to upload betas as a contributor.
      </p>
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
          {/* <Link to={"/register"} className="text-black underline"> */}
          Sign up now
          {/* </Link> */}
        </p>
        <button className="md:w-full text-sm font-semibold p-2 px-6 w-fit mx-auto my-2 border rounded bg-yellow-400  hover:border-yellow-400 hover:bg-white">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
