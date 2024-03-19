import { ActionMeta, MultiValue } from "react-select";
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
    }[];
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