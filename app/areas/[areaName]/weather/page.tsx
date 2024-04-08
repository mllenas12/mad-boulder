import zoneData from "@/lib/data/zoneData.json";
import { IArea, IWeatherData } from "@/lib/types";
import {
  getWeatherInfoByCoord,
  getCurrentTemperature,
} from "@/app/api/fetchWeather";
import { formatWeatherData } from "@/lib/utils/utils";
import { Forecast } from "@/ui/Areas/Weather/Forecast";
import { CurrentWeather } from "@/ui/Areas/Weather/CurrentWeather";

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
  const apiKey = process.env.WEATHER_API_KEY;

  const data = await getWeatherInfoByCoord(LAT, LON, apiKey);
  const weatherInfo = formatWeatherData(data);

  const currentData = getCurrentTemperature(LAT, LON, apiKey);
  const currentTemp = Math.round((await currentData).main.temp);

  const currentWeatherInfo = weatherInfo[0];

  let forecastInfo = [...weatherInfo];
  forecastInfo.shift();

  const displayForecast = forecastInfo.map((dayData: IWeatherData) => {
    return <Forecast data={dayData} key={dayData.date} />;
  });

  return (
    <div className="px-6  rounded flex flex-col gap-6 py-6">
      <h3 className="font-semibold">
        Weather Forecast in {currentArea} Boulder
      </h3>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="md:w-1/2 ">
          <CurrentWeather data={currentWeatherInfo} currentTemp={currentTemp} />
        </div>
        <div className="flex flex-col gap-4  md:w-1/2 ">{displayForecast}</div>
      </div>
    </div>
  );
}
