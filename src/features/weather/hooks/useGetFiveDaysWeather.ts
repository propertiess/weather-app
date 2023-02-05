import { useQuery } from '@tanstack/react-query';

import { WeatherService } from '@/services/weather/weather.service';

export const useGetFiveDaysWeather = (
  place: string,
  isOpenDetails?: boolean
) => {
  return useQuery({
    queryKey: ['five-days'],
    enabled: isOpenDetails && !!place.trim(),
    queryFn: () => WeatherService.getFiveDaysWeatherByPlace(place)
  });
};
