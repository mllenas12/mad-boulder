import { IWeatherData } from "@/lib/types";
import { getIdUrl } from "@/lib/utils/utils";

export const Forecast = ({ data }: { data: IWeatherData }) => {
  const iconUrl = getIdUrl(data.info.icon);
  return (
    <div
      key={data.info.weekday}
      className="flex bg-sky-600 rounded-2xl px-4 text-center text-white justify-between items-center"
    >
      <div className="w-1/4 text-start">
        <p>{data.info.weekday}</p>
      </div>
      <div className="flex justify-center items-center w-1/2">
        <img src={iconUrl} alt="Current weather icon" className="w-16" />
        <p className="text-start">{data.info.description}</p>
      </div>
      <div className="flex gap-1 w-1/4 justify-end">
        <p>{Math.round(data.info.tempMin)} º /</p>
        <p>{Math.round(data.info.tempMax)} º</p>
      </div>
    </div>
  );
};
