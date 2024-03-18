import Map from "@/app/ui/Map/Map";
export default function ProblemPage() {
  return (
    <div>
      <header className="py-4 bg-neutral-300 text-center font-semibold text-2xl">
        {"Al filo - 6b"}
      </header>
      <div className=" flex flex-col justify-center ">
        <iframe
          width="100%"
          height="100%"
          src={"https://www.youtube.com/embed/hURLiUDxyrA"}
          allowFullScreen
          className="mx-auto py-4 h-[250px] md:h-[400px] lg:h-[450px]"
        ></iframe>
        <div className="p-8 bg-neutral-200">
          <p>Name: {"Al filo"}</p>
          <p>Grade: {"6b"}</p>
          <p>Zone: {"Ahedo"}</p>
          <p>Sector: {"Ladrones de Sierrasecha "}</p>
          <p>Boulder: {"unknown"}</p>
          <p>Climber: {""}</p>
        </div>
      </div>
      <div className="relative">
        <Map />

        <div className="absolute bottom-4 left-0 right-0 flex justify-center z-10">
          <button className="bg-yellow-400 p-2 rounded mx-2">
            Explore more videos
          </button>
          <button className="bg-black text-yellow-400 p-2 rounded mx-2">
            Upload your beta
          </button>
        </div>
      </div>
    </div>
  );
}
