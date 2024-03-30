import { ActionMeta, MultiValue } from 'react-select';
export interface IArea {
    name: string;
    latitude: number;
    longitude: number;
    country: string;
    state?: string | null;
    rock_type: string;
    overview: string[];
    zone_code: string;
    altitude: number;
    zoom: number;
    parkings: {
        parking_latitude: number;
        parking_longitude: number;
    }[]
    ;
    links?: {
        name: string;
        link: string;
        free?: boolean;
    }[];
    guides: {
        name: string;
        link: string | string[];
        thumbnail: string
    }[];
    sectors: {
        name: string;
        sector_code: string;
        id: string;
        video_count: number;
    }[];
    video_count: number;
    thumbnail: string
}[]



export interface ICountry {
    reduced_code: string;
    code: string;
    name: string[];
    overview: string[];
    states?: {
        code: string;
        name: string[];
    }[];
}[]

export type TOptions = (
    newValue: MultiValue<{ value: string; label: string }>,
    actionMeta: ActionMeta<{ value: string; label: string }>
) => void;


export type ArrowProps = {
    isOrdered: boolean;
};


export type TSector = {
    name: string,
    sector_code: string,
    id: string,
    video_count: number
}

export interface IParking {
    parking_latitude?: number,
    parking_longitude?: number
}[]

export interface IProblemsData {
    date: string;
    items: IProblemArea[];
}

export interface IProblemArea {
    name: string,
    problem_list: IProblem[]
}

export interface IProblem {
    name: string,
    title: string,
    grade: string,
    grade_with_info: string,
    zone: string,
    sector: string,
    climber: string,
    boulder: string,
    url: string,
    date: string

}[]

export interface IOpenWeatherData {
    base: string;
    clouds: {
        all: number;
    }
    cod: number;
    coord: {
        lat: number;
        lon: number;
    }
    dt: number;
    id: number;
    main: {
        feels_like: number;
        humidity: number;
        pressure: number;
        temp: number;
        temp_min: number;
        temp_max: number;


        sea_level: number;
        grnd_level: number;
    }
    name: string;
    sys: {
        country: string;
        id: number;
        sunrise: number;
        sunset: number;
        type: number;
    }
    timezone: number;
    visibility: number;
    weather: {
        description: string;
        icon: string;
        id: number;
        main: string;
    }[]
    wind: {
        deg: number;
        gust: number;
        speed: number;
    }
}


export interface IWeatherDataForecast {
    cod: string;
    message: number;
    cnt: number;
    list: IWeatherForecast[];
    city: {
        id: number;
        name: string;
        coord: {
            lat: number;
            lon: number;
        };
        country: string;
        population: number;
        timezone: number;
        sunrise: number;
        sunset: number;
    };
}

export interface IWeatherForecast {
    dt: number;
    main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        sea_level: number;
        grnd_level: number;
        humidity: number;
        temp_kf: number;
    };
    weather: {
        id: number;
        main: string;
        description: string;
        icon: string;
    }[];
    clouds: {
        all: number;
    };
    wind: {
        speed: number;
        deg: number;
        gust: number;
    };
    visibility: number;
    pop: number;
    rain?: {
        "3h": number;
    };
    snow?: {
        "3h": number;
    };
    sys: {
        pod: string;
    };
    dt_txt: string;
}
export interface IDayWeather {
    currentTemp: number;
    tempMax: number;
    tempMin: number;
    humidity: number[];
    windSpeed: number[];
    icon: string;
    weekday: string;
    description: string;
    averageHumidity: number;
    averageWindSpeed: number;
}

export interface IWeatherData {
    date: string;
    info: IDayWeather;
}

export interface IFormErrors {
    email: string
    password: string
}

export interface IUser {
    name: string,
    email: string,
    password: string,
}

export interface User {
    avatar: string;
    username: string;
    email: string
}