import React from "react";
import { getIdUrl, getShortDate } from "@/lib/utils/utils";
import FeatherIcon from "feather-icons-react";
import { IWeatherData } from "@/lib/types";

export const CurrentWeather = ({
  data,
  currentTemp,
}: {
  data: IWeatherData;
  currentTemp: number;
}) => {
  const iconUrl = getIdUrl(data.info.icon);
  const currentShortDate = getShortDate();
  return (
    <div className="flex flex-col bg-sky-800 rounded-2xl p-4 text-center text-white">
      <div className="flex flex-col mx-auto">
        <img src={iconUrl} alt="Current weather icon" className="w-32" />
        <div className="text-white flex flex-col gap-2">
          <p className="text-4xl text-white font-bold ">{currentTemp}ºC</p>
          <p className="text-xl">{data.info.description}</p>
          <p className="">Today, {currentShortDate}</p>
        </div>
      </div>
      <div className="divider divider-warning rounded"></div>
      <div className="flex justify-between">
        <div className="flex flex-col justify-center items-center gap-3 w-1/3">
          <FeatherIcon icon="thermometer" />
          <div className="font-semibold">
            <p>{data.info.tempMin}ºC /</p>
            <p>{data.info.tempMax}ºC</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-3 w-1/3">
          <FeatherIcon icon="wind" />
          <div>
            <p className="font-semibold">{data.info.averageWindSpeed}km/h</p>
            <p>wind</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-3 w-1/3">
          <FeatherIcon icon="droplet" />
          <div>
            <p className="font-semibold">{data.info.averageHumidity}%</p>
            <p>humidity</p>
          </div>
        </div>
      </div>
    </div>
  );
};
