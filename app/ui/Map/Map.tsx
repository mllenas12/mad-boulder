"use client";
import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { MarkerComp } from "./MarkerComp";
// import zone_data from "@/lib/data/zone_data.json";
// import { IZone } from "@/lib/types";
import MarkerClusterGroup from "react-leaflet-markercluster";
import { Icon } from "leaflet";
const Map = () => {
  // const latitude = zone.latitude;
  // const longitude = zone.longitude;
  // const icon = new Icon({
  //   iconUrl: "/logo/marker.webp",
  //   iconSize: [32, 32],
  // });

  // return (
  //   <Marker position={[latitude, longitude]} icon={icon}>
  //     <Popup>{zone.name}</Popup>
  //   </Marker>

  // const markers = zone_data.items.map((zone: IZone) => {
  //   const latitude = zone.latitude;
  //   const longitude = zone.longitude;
  //   const icon = new Icon({
  //     iconUrl: "/logo/marker.webp",
  //     iconSize: [32, 32],
  //   });
  //   return (
  //     <Marker position={[latitude, longitude]} icon={icon} key={zone.name}>
  //       <Popup>{zone.name}</Popup>
  //     </Marker>
  //   );
  // });

  return (
    <MapContainer
      className="h-[350px] z-0"
      center={[0, 0]}
      zoom={2}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* <MarkerClusterGroup>
        {zone_data.items.map((zone: IZone) => {
          const latitude = zone.latitude;
          const longitude = zone.longitude;
          const icon = new Icon({
            iconUrl: "/logo/marker.webp",
            iconSize: [32, 32],
          });
          return (
            <Marker
              position={[latitude, longitude]}
              icon={icon}
              key={zone.name}
            >
              <Popup>{zone.name}</Popup>
            </Marker>
          );
        })}
      </MarkerClusterGroup> */}
    </MapContainer>
  );
};

export default Map;
