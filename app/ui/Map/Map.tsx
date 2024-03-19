"use client";
import React, { useEffect } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import { IArea } from "@/app/lib/types";
import MarkerClusterGroup from "react-leaflet-cluster";

const Map = ({ data }: { data: any }) => {
  const markersList = data.map((area: IArea) => {
    const icon = new Icon({
      iconUrl: "/logo/marker.webp",
      iconSize: [32, 32],
    });
    return (
      <Marker
        position={[area.latitude, area.longitude]}
        icon={icon}
        key={area.name}
      >
        <Popup>{area.name}</Popup>
      </Marker>
    );
  });

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
      <MarkerClusterGroup>{markersList}</MarkerClusterGroup>
    </MapContainer>
  );
};

export default Map;
