export default function VideoUploaderPage() {
  return (
    <div className="relative flex flex-col h-[830px] md:h-[700px]">
      <header className="flex justify-center bg-[url('/images/bg-example.jpg')] h-[150px] md:h-[200px] bg-cover bg-center">
        <h2 className="text-white font-semibold text-2xl pt-8">
          UPLOAD YOUR BETA
        </h2>
      </header>
      <div className="absolute top-[100px] left-1/2 transform -translate-x-1/2">
        <form
          className="bg-neutral-100 grid grid-cols-2 p-8 rounded-lg shadow-lg w-64 md:w-96 mx-auto gap-4"
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
              placeholder="Problem"
              className="w-full pl-2 rounded"
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <input
              type="text"
              placeholder="Area"
              className="w-full pl-2 rounded"
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <input
              type="text"
              placeholder="Sector"
              className="w-full pl-2 rounded"
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <input
              type="text"
              placeholder="Grade"
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
          <div className="col-span-2 flex items-start">
            <input
              type="checkbox"
              id="check1"
              name="check1"
              value="check2"
              className="mr-2 my-auto"
            />
            <label htmlFor="check1" className="text-xs">
              I grant permission to MadBoulder to use the submitted video on
              YouTube for public display.
            </label>
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
        </form>
        <p className="text-[10px] text-center mt-4  w-64 md:w-96">
          MadBoulder reserves the right to not publish a video. Possible reasons
          are, but are not limited to: poor video quality, poor camera angle and
          wrong or repeated line. Please note that there might be a delay
          between uploading and publishing a video.
        </p>
      </div>
    </div>
  );
}
