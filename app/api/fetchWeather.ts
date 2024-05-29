import {
    IWeatherDataForecast,
    IOpenWeatherData,
} from "@/lib/types";

export async function getWeatherInfoByCoord(
    LAT: number | undefined,
    LON: number | undefined,
    apiKey: string | undefined
): Promise<IWeatherDataForecast> {
    try {
        const res = await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?lat=${LAT}&lon=${LON}&appid=${apiKey}&units=metric`
        );
        if (!res.ok) {
            throw new Error("Failed to fetch data");
        }
        return res.json();
    } catch (error) {
        console.error("Error fetching weather");
        throw error;
    }
}

export async function getCurrentTemperature(
    LAT: number | undefined,
    LON: number | undefined,
    apiKey: string | undefined
): Promise<IOpenWeatherData> {
    try {
        const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${apiKey}&units=metric`
        );
        if (!res.ok) {
            throw new Error("Failed to fetch data");
        }
        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Error fetching weather");
        throw error;
    }
}