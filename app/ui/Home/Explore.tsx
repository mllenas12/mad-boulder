import Button from "../Button";
import Carousel from "./Carousel";

export const Explore = () => {
  return (
    <div className="text-center flex flex-col justify-center gap-4 bg-neutral-200 py-16 px-4">
      <h2 className="font-bold">EXPLORE BOULDERING DESTINATIONS</h2>
      <p>The best boulder climbing destinations only one click away.</p>
      <Carousel />

      <Button url="/areas" className="">
        BROWSE BOULDERING AREAS
      </Button>
    </div>
  );
};
