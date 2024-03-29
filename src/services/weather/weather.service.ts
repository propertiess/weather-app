import { ICurrentData, IFiveDaysData } from '@/types';

import { currentWeatherInstance, fiveDaysWeatherInstance } from './instance';

export const WeatherService = {
  async getCurrentWeatherByPlace(place: string) {
    const { data } = await currentWeatherInstance.get<ICurrentData>('', {
      params: {
        q: place
      }
    });

    return data;
  },

  async getFiveDaysWeatherByPlace(place: string) {
    const { data } = await fiveDaysWeatherInstance.get<IFiveDaysData>('', {
      params: {
        q: place
      }
    });
    return data;
  },

  async getCurrentWeatherByLatLon(lat: number, lon: number) {
    const { data } = await currentWeatherInstance.get<ICurrentData>('', {
      params: {
        lat,
        lon
      }
    });
    return data;
  },

  async getFiveDaysWeatherByLatLon(lat: number, lon: number) {
    const { data } = await fiveDaysWeatherInstance.get<IFiveDaysData>('', {
      params: {
        lat,
        lon
      }
    });
    return data;
  }
};
