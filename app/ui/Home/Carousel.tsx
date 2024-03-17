"use client";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Carousel() {
  const data = [
    {
      zone: "Fontainebleau",
      img: "https://i.ytimg.com/vi/bdOutNHHFQY/maxresdefault.jpg",
      description:
        "Fontainebleau is a world-renowned bouldering destination in France boasting an incredible array of sandstone boulders.",
    },
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
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="px-2 mx-4">
      <div className="mt-4">
        <Slider {...settings}>
          {data.map((d, index) => (
            <div
              key={d.zone}
              className={`bg-white h-[370px] lg:h-[330px]  text-black rounded`}
            >
              <img src={d.img} alt="" className={`rounded-t h-48 `} />
              <div className="text-center flex flex-col gap-2 p-3">
                <p className="font-semibold md:text-xl">{d.zone}</p>
                <p className="text-xs">{d.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
