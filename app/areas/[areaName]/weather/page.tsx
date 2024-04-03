import zoneData from "@/app/lib/data/zoneData.json";
import { IArea, IWeatherData } from "@/app/lib/types";
import {
  getWeatherInfoByCoord,
  getCurrentTemperature,
} from "@/app/api/fetchWeather";
import { Suspense } from "react";
import { formatWeatherData } from "@/app/lib/utils/utils";
import { Forecast } from "@/app/ui/Areas/Weather/Forecast";
import { CurrentWeather } from "@/app/ui/Areas/Weather/CurrentWeather";

export function generateStaticParams() {
  const areaNames = zoneData.items.map((area: IArea) =>
    decodeURIComponent(area.name)
  );
  return areaNames.map((name) => ({ areaName: name }));
}

export default async function WeatherPage({
  params,
}: {
  params: { areaName: string };
}) {
  const currentArea = decodeURIComponent(params.areaName);
  const currentAreaData = zoneData.items.find(
    (area: IArea) => area.name == currentArea
  );

  const LAT = currentAreaData?.latitude;
  const LON = currentAreaData?.longitude;
  const apiKey = process.env.API_KEY;

  const data = await getWeatherInfoByCoord(LAT, LON, apiKey);

  const currentData = getCurrentTemperature(LAT, LON, apiKey);
  const currentTemp = Math.round((await currentData).main.temp);

  const weatherInfo = formatWeatherData(data);

  const currentWeatherInfo = weatherInfo[0];
  let forecastInfo = [...weatherInfo];
  forecastInfo.shift();

  const displayForecast = forecastInfo.map((day: IWeatherData) => {
    return <Forecast data={day} key={day.date} />;
  });

  return (
    <div className="p-8">
      <h3 className="font-semibold text-xl py-2">
        Weather Forecast in {currentArea} Boulder
      </h3>
      <Suspense fallback="Loading...">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="md:w-1/2 ">
            <CurrentWeather
              data={currentWeatherInfo}
              currentTemp={currentTemp}
            />
          </div>
          <div className="flex flex-col gap-4  md:w-1/2 ">
            {displayForecast}
          </div>
        </div>
      </Suspense>
    </div>
  );
}
