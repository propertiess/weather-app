import { useQuery } from '@tanstack/react-query';

import { WeatherService } from '@/services/weather/weather.service';
import { IFiveDaysData } from '@/types';

export const useGetFiveDaysWeather = () => {
  return useQuery<IFiveDaysData>({
    queryKey: ['five-days']
  });
};

export const useGetFiveDaysWeatherWithPlace = (
  place: string,
  detailsIsOpen?: boolean
) => {
  return useQuery({
    queryKey: ['five-days'],
    queryFn: () => {
      if (!detailsIsOpen || !place?.trim()) {
        return null;
      }
      return WeatherService.getFiveDaysWeatherByPlace(place);
    },
    refetchInterval: 60 * 1000
  });
};
