export const AreaCard = () => {
  return (
    <button className="">
      <img
        src={"/images/example.jpeg"}
        alt={`Card image of ${"zone.name"}`}
        className="rounded-t h-32 lg:h-40 w-full object-cover shadow-xl"
      />
      <div className="py-2 text-center bg-white rounded-b shadow-xl">
        <h5 className="font-semibold">Ahedo</h5>
        <p className="text-xs">9 video</p>
      </div>
    </button>
  );
};
