import Button from "@/app/ui/Buttons/Button";
import Carousel from "@/app/ui/Home/Carousel";

export const Explore = () => {
  return (
    <div className="text-center flex flex-col justify-center gap-4 bg-neutral-200 py-12 px-4">
      <h2 className="font-semibold">EXPLORE BOULDERING DESTINATIONS</h2>
      <p>The best boulder climbing destinations only one click away.</p>
      <Carousel />
      <Button url="/areas" className="mx-auto mt-8">
        BROWSE BOULDERING AREAS
      </Button>
    </div>
  );
};
