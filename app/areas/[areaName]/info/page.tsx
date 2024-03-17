import Button from "@/app/ui/Button";

export default function InfoPage() {
  return (
    <div>
      {/* PHOTO + CTA EXPLORE: */}
      <div className="relative bg-[url('/images/example.jpeg')] bg-cover bg-center py-32 md:py-48 flex justify-center">
        <button className=" absolute bottom-8 bg-yellow-400 text-neutral-700 font-semibold rounded px-4 py-2 ">
          EXPLORE AREA
        </button>
      </div>
      {/* DESCRIPTION: */}
      <p className="p-8 text-xs text-center">
        Ahedo is a hidden sandstone gem for rock climbing enthusiasts located in
        the region of Cantabria, Spain. <br /> It offers a wide range of routes
        and boulder problems with crisp holds and an optimal climbing season in
        spring and autumn. <br />
        With its beautiful natural surroundings, Ahedo is a popular destination
        for climbers from around the world.
      </p>
      {/* SUMMARY: */}
      <div className="bg-neutral-400 p-8 flex gap-4 justify-center">
        <div className="h-40 w-40 rounded bg-[url('/images/example.jpeg')] bg-cover bg-center flex justify-center items-center">
          <p className="text-2xl text-white font-bold text-center">6 Areas</p>
        </div>
        <div className="h-40 w-40 rounded bg-[url('/images/example.jpeg')] bg-cover bg-center flex justify-center items-center">
          <p className="text-2xl text-white font-bold text-center">
            120 videos
          </p>
        </div>
      </div>
    </div>
  );
}
