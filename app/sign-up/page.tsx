export default function SignUpPage() {
  return (
    <div className="p-8 flex flex-col gap-4">
      <h2 className="font-semibold text-2xl">Create Your Account</h2>
      <p className="text-xs">
        Star Wars is part of The Walt Disney Family of Companies. You&apos;ll be
        able to log into services and experiences using the same email and
        password.
      </p>
      <form
        className="bg-neutral-100 grid grid-cols-2 p-8 rounded-lg shadow-lg w-64 md:w-96 mx-auto gap-4 my-4"
        action=""
      >
        <div className="col-span-2 md:col-span-1">
          <input
            type="text"
            placeholder="Name"
            className="w-full pl-2 rounded"
          />
        </div>
        <div className="col-span-2 md:col-span-1">
          <input
            type="text"
            placeholder="Last name"
            className="w-full pl-2 rounded"
          />
        </div>
        <div className="col-span-2">
          <input
            type="email"
            placeholder="Email"
            className="w-full pl-2 rounded"
          />
        </div>
        <div className="col-span-2 md:col-span-1">
          <input
            type="text"
            placeholder="Country"
            className="w-full pl-2 rounded"
          />
        </div>
        <div className="col-span-2 flex items-start">
          <input
            type="checkbox"
            id="check2"
            name="check2"
            value="cehck2"
            className="mr-2 my-auto"
          />
          <label htmlFor="check2" className="text-xs">
            {" "}
            I wish to subscribe to MadBoulder&apos;s newsletter
          </label>
        </div>
        <button className="col-span-2 bg-yellow-400  text-neutral-700 font-semibold rounded w-fit px-4 py-2 mx-auto">
          Sign In
        </button>
      </form>
    </div>
  );
}
