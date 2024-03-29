import Link from "next/link";
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
        <form className="flex flex-col justify-center items-center gap-5 px-9 ">
          {/* onSubmit={handleSubmit} */}
          <input
            type="text"
            name="userName"
            placeholder="Full name"
            required
            //onChange={handleChange}
            className="w-full md:w-1/2 h-9 mx-auto placeholder:px-2"
          />
          <input
            type="email"
            name="userEmail"
            placeholder="Email"
            required
            //onChange={handleChange}
            className="w-full md:w-1/2 h-9 mx-auto placeholder:px-2"
          />
          <input
            type="password"
            name="userPassword"
            id="userPassword"
            placeholder="Password"
            required
            //onChange={handleChange}
            className="w-full md:w-1/2 h-9 mx-auto placeholder:px-2"
          />
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Confirm your password"
            required
            //onChange={handleChange}
            className="w-full md:w-1/2 h-9 mx-auto placeholder:px-2"
          />
          {/* FALTA AQUI UN SELECT / CHECKBOX PER POSAR SI ETS CONTRIBUTOR */}
          {/* {error && (
        <p className="text-red-800 text-center text-xs mt-2 font-semibold md:text-base">
        {error}
        </p> 
      )}*/}
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

          <button className="w-full md:w-1/2 bg-amber-400 text-white p-1">
            SIGN UP
          </button>
        </form>
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
