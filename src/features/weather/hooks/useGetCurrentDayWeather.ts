import { useQuery } from '@tanstack/react-query';

import { WeatherService } from '@/services/weather/weather.service';
import { ICurrentData } from '@/types';

export const useGetCurrentDayWeather = () => {
  return useQuery<ICurrentData>({
    queryKey: ['current-day']
  });
};

export const useGetCurrentDayWeatherWithPlace = (
  place: string,
  detailsIsOpen?: boolean
) => {
  return useQuery({
    queryKey: ['current-day'],
    queryFn: () => {
      if (detailsIsOpen || !place.trim()) {
        return null;
      }
      return WeatherService.getCurrentWeatherByPlace(place);
    }
  });
};
