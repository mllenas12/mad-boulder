
import { IWeatherDataForecast, IUniqueGrades, IWeatherData, IDayWeather, IProblem, ISelectOptions } from "../types";

export function formatWeatherData(data: IWeatherDataForecast): IWeatherData[] {
    const weatherPerDay = groupWeatherByDay(data);
    return calculateAverages(weatherPerDay);
}

function groupWeatherByDay(data: IWeatherDataForecast): {
    [date: string]: IDayWeather;
} {
    const weatherPerDay: { [date: string]: IDayWeather } = {};
    const weekdays = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];

    data.list.forEach((forecast) => {
        const dateParts = forecast.dt_txt.split(" ")[0];
        const description = forecast.weather[0].main;
        const [year, month, day] = dateParts.split("-").map(Number);
        const date = new Date(year, month - 1, day);
        const weekday = weekdays[date.getDay()];

        if (!weatherPerDay[dateParts]) {
            weatherPerDay[dateParts] = initializeDayWeather(description, weekday);
        }

        updateDayWeather(weatherPerDay[dateParts], forecast);
    });

    return weatherPerDay;
}

function initializeDayWeather(
    description: string,
    weekday: string
): IDayWeather {
    return {
        tempMax: Number.NEGATIVE_INFINITY,
        tempMin: Number.POSITIVE_INFINITY,
        currentTemp: 0,
        humidity: [],
        windSpeed: [],
        averageHumidity: 0,
        averageWindSpeed: 0,
        icon: "",
        weekday: weekday,
        description: description,
    };
}

function updateDayWeather(dayWeather: IDayWeather, forecast: any): void {
    dayWeather.tempMax = Math.round(
        Math.max(dayWeather.tempMax, forecast.main.temp_max)
    );
    dayWeather.tempMin = Math.round(
        Math.min(dayWeather.tempMin, forecast.main.temp_min)
    );
    dayWeather.currentTemp = Math.round(forecast.main.temp);
    dayWeather.humidity.push(forecast.main.humidity);
    dayWeather.windSpeed.push(forecast.wind.speed);
    dayWeather.icon = forecast.weather[0].icon;
}

function calculateAverages(weatherPerDay: {
    [date: string]: IDayWeather;
}): IWeatherData[] {
    const weatherDataArray: IWeatherData[] = [];

    for (const date in weatherPerDay) {
        if (weatherPerDay.hasOwnProperty(date)) {
            const dayInfo = weatherPerDay[date];
            const averageHumidity = calculateAverage(dayInfo.humidity);
            const averageWindSpeed = calculateAverage(dayInfo.windSpeed);

            const weatherData: IWeatherData = {
                date: date,
                info: {
                    ...dayInfo,
                    averageHumidity: averageHumidity,
                    averageWindSpeed: averageWindSpeed,
                },
            };
            weatherDataArray.push(weatherData);
        }
    }

    return weatherDataArray;
}

function calculateAverage(values: number[]): number {
    const sum = values.reduce((acc, curr) => acc + curr, 0);
    return Math.round(sum / values.length);
}

export const getShortDate = () => {
    const shortDate = new Date();
    const day = shortDate.getDate();
    const monthIndex = shortDate.getMonth();
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    return `${day} ${months[monthIndex]}`;
};

export const getIdUrl = (iconId: string) => {
    return `https://openweathermap.org/img/wn/${iconId}@2x.png`;
};

export const capitalizeFirstLetter = (word: string | undefined) => {
    if (typeof word !== 'string' || word.length === 0) {
        return word;
    }
    return word.charAt(0).toUpperCase() + word.slice(1);
}

export const setRandomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

export const getFormattedActualDate = () => {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Los meses van de 0 a 11, por eso se suma 1
    const year = today.getFullYear();

    return `${day}/${month}/${year}`;
}

export const orderSelectOptionsByGrade = (array: IProblem[]) => {
    const gradeOptionsList: ISelectOptions[] = [];
    const uniqueGrades: IUniqueGrades = {};

    array.forEach((problem) => {
        const grade = problem.grade.trim(); // Eliminar espacios en blanco alrededor de la calificación
        if (!uniqueGrades.hasOwnProperty(grade)) {
            uniqueGrades[grade] = true;
            gradeOptionsList.push({
                value: grade,
                label: grade,
            });
        }
    });

    let sortedGradeList = [...gradeOptionsList];
    sortedGradeList.sort((a, b) => a.value.localeCompare(b.value));
    return sortedGradeList
}