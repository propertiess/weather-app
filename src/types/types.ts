import { SerializedError } from '@reduxjs/toolkit';

export interface IFiveDaysData {
  city?: ICity;
  list?: IList[];
  loading: string;
  error: SerializedError | null;
}

export interface FetchWeather {
  place?: string;
  lat?: number;
  lon?: number;
}

export interface ICurrentData {
  weather: IWeather[];
  main?: IMain;
  name?: string;
  dt?: Date;
  loading: string;
  error: SerializedError | null;
}

export interface ICity {
  id: number;
  name: string;
}

export interface IList {
  weather: IWeather[];
  dt_txt: string;
  main: IMain;
}

export interface IWeather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface IMain {
  feels_like: number;
  temp: number;
  temp_max: number;
  temp_min: number;
}
