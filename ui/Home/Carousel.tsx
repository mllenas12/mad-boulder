"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

export default function Carousel() {
  const data = [
    {
      zone: "Albarracín",
      img: "https://i.ytimg.com/vi/gzYvLc6M_cY/maxresdefault.jpg",
      description:
        "Albarracín, in Spain, stands as a world class bouldering destination, renowned for its distinctive red sandstone rocks.",
    },
    {
      zone: "Magic Wood",
      img: "https://i.ytimg.com/vi/qQEmGAFCbHw/maxresdefault.jpg",
      description:
        "Magic Wood, in Switzerland, stands as a beacon for bouldering enthusiast with its enchanting ambiance and world class boulders.",
    },
    {
      zone: "Rocklands",
      img: "https://i.ytimg.com/vi/jsiAvNRj808/maxresdefault.jpg",
      description:
        "Located in South Africa, Rocklands is renowned for its stunning red sandstone boulders adn stunning landscape.",
    },
    {
      zone: "Red Rocks",
      img: "https://i.ytimg.com/vi/9PDLJH3QBbs/maxresdefault.jpg",
      description:
        "Red Rocks, in Las Vegas, stands as a bouldering gem, renowned for its beautiful sandstone boulders under the desert sun.",
    },
    {
      zone: "Fontainebleau",
      img: "https://i.ytimg.com/vi/bdOutNHHFQY/maxresdefault.jpg",
      description:
        "Fontainebleau is a world-renowned bouldering destination in France boasting an incredible array of sandstone boulders.",
    },
    {
      zone: "Targasonne",
      img: "https://i.ytimg.com/vi/YitmF3ybluM/maxresdefault.jpg",
      description:
        "Targasonne is considered one of the best bouldering areas in Southern Europe with its chaos of granite boulders.",
    },
    {
      zone: "Joe's Valley",
      img: "https://i.ytimg.com/vi/WvuZ7z_d1Pc/maxresdefault.jpg",
      description:
        "Joe's Valley, in Utah, is a quartzite bouldering paradise with a wide range of unique boulder problems.",
    },
  ];
  const settings = {
    infinite: true,
    className: "center",
    centerMode: true,
    centerPadding: "60px",
    speed: 500,
    slidesToShow: 7,
    responsive: [
      {
        breakpoint: 2140,
        settings: {
          slidesToShow: 5,
          infinite: true,
        },
      },
      {
        breakpoint: 1590,
        settings: {
          slidesToShow: 4,
          infinite: true,
        },
      },
      {
        breakpoint: 1340,
        settings: {
          slidesToShow: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 1040,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  //   infinite: true,
  //   className: "center",
  //   centerMode: true,
  //   centerPadding: "60px",
  //   speed: 500,
  //   slidesToShow: 6,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 6,
  //         infinite: true,
  //       },
  //     },
  //     {
  //       breakpoint: 900,
  //       settings: {
  //         slidesToShow: 3,
  //       },
  //     },
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 3,
  //       },
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //       },
  //     },
  //   ],
  // };
  return (
    <div className="px-2 mx-4 md:w-3/4  md:mx-auto">
      <div className="mt-4">
        <Slider {...settings}>
          {data.map((d, index) => (
            <Link
              href={`/areas/${d.zone}/info`}
              key={index}
              className={`bg-white h-[320px] lg:h-[330px]  text-black rounded-xl`}
            >
              <img src={d.img} alt="" className={`rounded-t-xl h-40 w-full `} />
              <div className="text-center flex flex-col gap-2 p-3">
                <p className="font-semibold md:text-xl">- {d.zone} -</p>
                <p className="text-xs">{d.description}</p>
              </div>
            </Link>
          ))}
        </Slider>
      </div>
    </div>
  );
}
