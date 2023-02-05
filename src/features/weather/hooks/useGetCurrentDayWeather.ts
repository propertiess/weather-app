import { useQuery } from '@tanstack/react-query';

import { WeatherService } from '@/services/weather/weather.service';

export const useGetCurrentDayWeather = (
  place: string,
  isOpenDetails?: boolean
) => {
  return useQuery({
    queryKey: ['current-day'],
    queryFn: () => {
      if (isOpenDetails || !place.trim()) {
        return null;
      }
      return WeatherService.getCurrentWeatherByPlace(place);
    }
  });
};
