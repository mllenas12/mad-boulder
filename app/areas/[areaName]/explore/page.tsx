export default function ExplorePage() {
  return (
    <div className="px-8">
      {/* Search: */}
      <div className="py-4">
        <h4 className="font-semibold">Search: </h4>
        <div className=" py-2 grid grid-cols-2 gap-4 lg:px-24">
          <input
            type="text"
            placeholder="Grade"
            className="input input-bordered w-full "
          />
          <input
            type="text"
            placeholder="Sector"
            className="input input-bordered w-full "
          />
          <input
            type="text"
            placeholder="?"
            className="input input-bordered w-full "
          />
          <input
            type="text"
            placeholder="Order"
            className="input input-bordered w-full "
          />
        </div>
      </div>
      {/* List of videos */}
      <div className="text-xs sm:text-base flex gap-2 mb-4 bg-neutral-200 rounded">
        <img
          src={"/images/example.jpeg"}
          alt={`Photo of problem ${"Al filo"} in ${"unknown"} boulder Area`}
          className="w-30 h-16 rounded-l"
        />
        <div className=" flex flex-col gap-1 my-auto">
          <p className=" font-semibold">
            {"Al filo"} - {"6b"}
          </p>
          <p className="">{"Ladrones de Sierrasecha"}</p>
        </div>
      </div>

      <div className="text-xs sm:text-base flex gap-2 mb-4 bg-neutral-200 rounded">
        <img
          src={"/images/example.jpeg"}
          alt={`Photo of problem ${"Al filo"} in ${"unknown"} boulder Area`}
          className="w-30 h-16 rounded-l"
        />
        <div className=" flex flex-col gap-1 my-auto">
          <p className=" font-semibold">
            {"Al filo"} - {"6b"}
          </p>
          <p className="">{"Ladrones de Sierrasecha"}</p>
        </div>
      </div>

      <div className="text-xs sm:text-base flex gap-2 mb-4 bg-neutral-200 rounded">
        <img
          src={"/images/example.jpeg"}
          alt={`Photo of problem ${"Al filo"} in ${"unknown"} boulder Area`}
          className="w-30 h-16 rounded-l"
        />
        <div className=" flex flex-col gap-1 my-auto">
          <p className=" font-semibold">
            {"Al filo"} - {"6b"}
          </p>
          <p className="">{"Ladrones de Sierrasecha"}</p>
        </div>
      </div>

      <div className="text-xs sm:text-base flex gap-2 mb-4 bg-neutral-200 rounded">
        <img
          src={"/images/example.jpeg"}
          alt={`Photo of problem ${"Al filo"} in ${"unknown"} boulder Area`}
          className="w-30 h-16 rounded-l"
        />
        <div className=" flex flex-col gap-1 my-auto">
          <p className=" font-semibold">
            {"Al filo"} - {"6b"}
          </p>
          <p className="">{"Ladrones de Sierrasecha"}</p>
        </div>
      </div>
    </div>
  );
}
