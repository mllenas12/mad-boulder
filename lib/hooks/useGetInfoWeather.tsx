import {
  getCurrentTemperature,
  getWeatherInfoByCoord,
} from "../api/fetchWeather";
import { TCoord } from "../types";
import { formatWeatherData } from "../utils/utils";

export const useGetInfoWeather = async (
  coord: TCoord,
  apiKey: string | undefined
) => {
  const data = await getWeatherInfoByCoord(coord.LAT, coord.LON, apiKey);

  const weatherInfo = formatWeatherData(data);
  const currentData = getCurrentTemperature(coord.LAT, coord.LON, apiKey);
  const currentTemp = Math.round((await currentData).main.temp);

  const currentWeatherInfo = weatherInfo[0];

  let forecastInfo = [...weatherInfo];
  forecastInfo.shift();

  return { forecastInfo, currentWeatherInfo, currentTemp };
};
