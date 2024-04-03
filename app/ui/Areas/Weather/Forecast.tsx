import { IWeatherData } from "@/app/lib/types";
import { getIdUrl } from "@/app/lib/utils/utils";

export const Forecast = ({ data }: { data: IWeatherData }) => {
  const iconUrl = getIdUrl(data.info.icon);
  return (
    <div
      key={data.info.weekday}
      className="flex bg-slate-400 rounded-2xl px-6 text-center text-white justify-between items-center"
    >
      <div>
        <p>{data.info.weekday}</p>
      </div>
      <div className="flex justify-center items-center">
        <img src={iconUrl} alt="Current weather icon" className="w-16" />
        <p>{data.info.description}</p>
      </div>
      <div className="flex gap-1">
        <p>{Math.round(data.info.tempMin)} º /</p>
        <p>{Math.round(data.info.tempMax)} º</p>
      </div>
    </div>
  );
};
