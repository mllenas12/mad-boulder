import FeatherIcon from "feather-icons-react";
import zoneData from "../data/zoneData.json";
import { IArea, IParking, TSector } from "../types";
import { PiMapPin } from "react-icons/pi";
import { nanoid } from "nanoid";

export const useGetCurrentAreaData = (
  areaName: string,
  params?: any | undefined
) => {
  const currentArea = decodeURIComponent(areaName);
  const currentAreaData = zoneData.items.find(
    (zone: IArea) => zone.name == currentArea
  );

  const imageUrl = currentAreaData?.thumbnail || "/images/example.jpeg";

  const links = currentAreaData?.links.map((link) => {
    return (
      <a
        key={link.link}
        href={link.link}
        target="_blank"
        className="flex gap-2 border rounded p-2 bg-neutral-100 font-semibold"
      >
        <FeatherIcon icon="book" className="text-neutral-600" /> {link.name}
      </a>
    );
  });

  const parkingList = currentAreaData?.parkings.map((parking: IParking) => {
    return (
      <p key={nanoid()} className="px-4 flex gap-1">
        <PiMapPin className="my-auto" /> Parking:
        <a
          href={`https://www.google.com/maps/place/${parking.parking_latitude},${parking.parking_longitude}`}
          target="_blank"
          className="text-blue-400 underline"
        >
          Google Maps Location
        </a>
      </p>
    );
  });

  const query =
    typeof params?.sector === "string"
      ? params.sector.toLowerCase()
      : undefined;

  let filteredData = query
    ? currentAreaData?.sectors.filter((sector: TSector) =>
        sector.name.toLowerCase().includes(query)
      )
    : currentAreaData?.sectors;

  const sectors = filteredData?.map((sector: TSector) => {
    return {
      name: sector.name,
      code: sector.sector_code,
      video_count: sector.video_count,
      id: sector.id,
    };
  });

  const currentAreaCoord = {
    LAT: currentAreaData?.latitude,
    LON: currentAreaData?.longitude,
  };
  return {
    currentArea,
    currentAreaData,
    imageUrl,
    links,
    parkingList,
    filteredData,
    sectors,
    currentAreaCoord,
  };
};
