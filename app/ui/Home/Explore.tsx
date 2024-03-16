import Button from "../Button";

export const Explore = () => {
  return (
    <div className="text-center h-[643px] flex flex-col justify-center gap-4">
      <h2 className="font-semibold text-3xl">
        EXPLORE BOULDERING DESTINATIONS
      </h2>
      <p>The best boulder climbing destinations only one click away.</p>
      {/* carrousel */}
      <Button>BROWSE BOULDERING AREAS</Button>
    </div>
  );
};
