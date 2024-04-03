"use client";
import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import { IArea } from "@/app/lib/types";
import MarkerClusterGroup from "react-leaflet-cluster";
import { nanoid } from "nanoid";

const Map = ({
  data,
  height,
  mdHeight,
}: {
  data: IArea[];
  height: number;
  mdHeight: number;
}) => {
  const areaMarker = data.map((area: IArea) => {
    const icon = new Icon({
      iconUrl: "/logo/marker.webp",
      iconSize: [32, 32],
    });
    return (
      <Marker
        position={[area.latitude, area.longitude]}
        icon={icon}
        key={nanoid()}
      >
        <Popup>
          <a href={`/areas/${area.name}/info`}>{area.name}</a>
        </Popup>
      </Marker>
    );
  });

  const parkingMarkers = data.map((area: IArea) =>
    area.parkings?.map((parking) => {
      const parkingIcon = new Icon({
        iconUrl: "/logo/parking.png",
        iconSize: [32, 32],
      });
      return (
        <Marker
          position={[parking.parking_latitude, parking.parking_longitude]}
          icon={parkingIcon}
          key={nanoid()}
        >
          <Popup>
            <a
              href={`https://www.google.com/maps/place/${parking.parking_latitude},${parking.parking_longitude}`}
              target="_blank"
              className="text-blue-400 underline"
            >
              Open in Google Maps
            </a>
          </Popup>
        </Marker>
      );
    })
  );

  return (
    <MapContainer
      className={`h-[${height}px] md:h-[${mdHeight}px] z-0`}
      center={
        areaMarker.length == 1
          ? [data[0].latitude, data[0].longitude]
          : [10, 10]
      }
      zoom={areaMarker.length == 1 ? 10 : 2}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MarkerClusterGroup>
        {areaMarker}
        {parkingMarkers}
      </MarkerClusterGroup>
    </MapContainer>
  );
};

export default Map;
