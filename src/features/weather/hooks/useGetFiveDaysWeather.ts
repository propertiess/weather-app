import { useQuery } from '@tanstack/react-query';

import { WeatherService } from '@/services/weather/weather.service';

export const useGetFiveDaysWeather = (
  place: string,
  isOpenDetails?: boolean
) => {
  return useQuery({
    queryKey: ['five-days'],
    queryFn: () => {
      if (!isOpenDetails || !place.trim()) {
        return null;
      }
      return WeatherService.getFiveDaysWeatherByPlace(place);
    }
  });
};
