export interface IFiveDaysData {
  city?: ICity;
  list?: IList[];
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
}

export interface ICity {
  id: number;
  name: string;
}

export interface IList {
  weather: IWeather[];
  dt_txt: string;
  dt: number;
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
