import { AreaCard } from "../ui/Areas/AreaCard";
import Map from "../ui/Map/Map";
export default function AreasPage() {
  return (
    <div className="flex flex-col gap-4 lg:gap-8">
      {/* MAP: */}
      <Map />
      <h3 className="font-semibold text-xl px-4 lg:px-24">FIND YOUR ZONE:</h3>
      {/* FINDER: */}
      <div className="grid grid-cols-2 gap-4 px-4 lg:px-24">
        <input
          type="text"
          placeholder="Country"
          className="input input-bordered w-full "
        />
        <input
          type="text"
          placeholder="Filters"
          className="input input-bordered w-full "
        />
        <input
          type="text"
          placeholder="Zone"
          className="input input-bordered w-full "
        />
        <input
          type="text"
          placeholder="Order"
          className="input input-bordered w-full "
        />
      </div>
      {/* LIST OF AREA CARDS: */}
      <div className="p-10  sm:px-24 2xl:px-96 bg-neutral-100">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <AreaCard />
          <AreaCard />
          <AreaCard />
          <AreaCard />
          <AreaCard />
          <AreaCard />
          <AreaCard />
          <AreaCard />
        </div>
      </div>
    </div>
  );
}
