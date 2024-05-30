import zoneData from "@/lib/data/zoneData.json";
import { IArea, IWeatherData } from "@/lib/types";
import {
  getWeatherInfoByCoord,
  getCurrentTemperature,
} from "@/lib/api/fetchWeather";
import { formatWeatherData } from "@/lib/utils/utils";
import { Forecast } from "@/app/ui/Areas/Weather/Forecast";
import { CurrentWeather } from "@/app/ui/Areas/Weather/CurrentWeather";
import HeadComponent from "@/app/ui/HeadComponent";
import { useGetCurrentAreaData } from "@/lib/hooks/useGetCurrentAreaData";
import { useGetInfoWeather } from "@/lib/hooks/useGetInfoWeather";

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
  const { currentArea, currentAreaCoord } = useGetCurrentAreaData(
    decodeURIComponent(params.areaName)
  );
  const { forecastInfo, currentWeatherInfo, currentTemp } =
    await useGetInfoWeather(currentAreaCoord, process.env.WEATHER_API_KEY);

  const displayForecast = forecastInfo.map((dayData: IWeatherData) => {
    return <Forecast data={dayData} key={dayData.date} />;
  });

  return (
    <>
      <HeadComponent
        title={`Weather Forecast in ${currentArea}`}
        description={`Detailed weather forecast in ${currentArea}`}
      />
      <div className="px-6  rounded flex flex-col gap-6 py-6">
        <h3 className="font-semibold">
          Weather Forecast in {currentArea} Boulder
        </h3>
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
      </div>
    </>
  );
}
