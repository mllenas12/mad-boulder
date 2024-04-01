import Map from "@/app/ui/Map/Map";
import problemsData from "@/app/lib/data/problemsData.json";
import { IProblem, IProblemArea } from "@/app/lib/types";
import Link from "next/link";
export async function generateStaticParams() {
  const problemsList = problemsData.items.flatMap((area: IProblemArea) =>
    area.problem_list.map((problem: IProblem) => problem.name)
  );

  return problemsList.map((problem: string) => ({
    problemName: problem,
  }));
}

export default function ProblemPage({
  params,
}: {
  params: { problemName: string };
}) {
  const currentProblem = decodeURIComponent(params.problemName);
  const allProblems = problemsData.items.flatMap(
    (area: IProblemArea) => area.problem_list
  );

  const currentProblemData = allProblems.find(
    (problem: IProblem) => problem.name == currentProblem
  );

  const url = currentProblemData?.url.replace("watch?v=", "embed/");

  const hardcodeData = {
    name: "Ahedo",
    latitude: 43.038219,
    longitude: -3.825742,
    country: "es",
    state: "cantabria",
    rock_type: "sand",
    overview: [
      "Ahedo is a hidden sandstone gem for rock climbing enthusiasts located in the region of Cantabria, Spain. It offers a wide range of routes and boulder problems with crisp holds and an optimal climbing season in spring and autumn. With its beautiful natural surroundings, Ahedo is a popular destination for climbers from around the world.",
      "Ahedo es un peque\u00f1o para\u00edso para los amantes de la escalada en roca arenisca, situado en la regi\u00f3n de Cantabria, Espa\u00f1a. Ofrece una gran variedad de rutas y problemas boulder con agarres n\u00edtidos y una temporada \u00f3ptima en primavera y oto\u00f1o. Con su hermoso entorno natural, Ahedo es un lugar popular para escaladores de todo el mundo.",
    ],
    zone_code: "ahedo",
    altitude: 925.0,
    zoom: 16,
    parkings: [
      {
        parking_latitude: 43.037679,
        parking_longitude: -3.825853,
      },
      {
        parking_latitude: 43.037541,
        parking_longitude: -3.812197,
      },
    ],
    links: [
      {
        name: "Bulder Ahedo",
        link: "https://bulderahedo.blogspot.com/p/blog-page.html",
        free: true,
      },
    ],
    guides: [
      {
        name: "Boulder en Espa\u00f1a",
        link: ["https://amzn.to/3UizeG0", "https://amzn.to/3SiGNuV"],
        thumbnail:
          "https://m.media-amazon.com/images/I/81UJX3rkGML._AC_UY218_.jpg",
      },
    ],
    sectors: [
      {
        name: "Ladrones de Sierrasecha",
        sector_code: "ladrones-de-sierrasecha",
        id: "PLlwn5IhJiUnPxqlzz1GlqOm_F22mhTyF8",
        video_count: 8,
      },
    ],
    video_count: 9,
    thumbnail: "https://i.ytimg.com/vi/TgxuSHTBgNU/maxresdefault.jpg",
  };

  return (
    <div>
      <header className="py-4 bg-neutral-300 text-center font-semibold text-2xl">
        {currentProblemData?.name}
      </header>
      <div className=" flex flex-col justify-center ">
        <iframe
          width="100%"
          height="100%"
          src={url}
          allowFullScreen
          className="mx-auto py-4 h-[250px] md:h-[400px] lg:h-[450px]"
        ></iframe>
        <div className="p-8 bg-neutral-200">
          <p>Name: {currentProblemData?.name}</p>
          <p>Grade: {currentProblemData?.grade}</p>
          <p>Zone: {currentProblemData?.zone}</p>
          <p>
            Sector:{" "}
            <Link
              href={`/areas/${currentProblemData?.zone}/explore?sectors=${currentProblemData?.sector}`}
            >
              {currentProblemData?.sector}
            </Link>
          </p>
          <p>Boulder: {currentProblemData?.boulder}</p>
          <p>Climber: {currentProblemData?.climber}</p>
        </div>
      </div>
      <div className="relative">
        <Map data={[hardcodeData]} />

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
