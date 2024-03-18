export default function JoinUsPage() {
  return (
    <div className="p-8 md:px-24 flex flex-col gap-8 text-center">
      <img
        src="/logo/logo.png"
        alt="madboulder-logo"
        className="w-1/2 mx-auto"
      />
      <p>
        There are no opportunities opened for the moment but we are always open!
      </p>
      <p>
        You can give us your information here and we&apos;ll contact you when
        some opportunity arises:
      </p>
      <div>
        <form
          className="bg-neutral-100 grid grid-cols-2 p-8 rounded-lg shadow-lg w-64 md:w-96 mx-auto gap-4"
          action=""
        >
          <div className="col-span-2">
            <input
              type="text"
              placeholder="Name"
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

          <div className="col-span-2">
            <textarea
              placeholder="Message"
              className="w-full h-20 resize-none pl-2 rounded"
            />
          </div>
          <div className="col-span-2">
            <input
              type="file"
              className="file-input file-input-bordered file-input-xs w-full max-w-xs"
            />
          </div>
          <button className="col-span-2 bg-yellow-400  text-neutral-700 font-semibold rounded w-fit px-4 py-2 mx-auto">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
