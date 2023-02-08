import { useQuery } from '@tanstack/react-query';

import { WeatherService } from '@/services/weather/weather.service';
import { IFiveDaysData } from '@/types';

export const useGetFiveDaysWeather = (place?: string) => {
  const get = useQuery<IFiveDaysData>({
    queryKey: ['five-days'],
    enabled: false
  });

  const withPlace = useQuery({
    queryKey: ['five-days'],
    enabled: false,
    queryFn: () => {
      return WeatherService.getFiveDaysWeatherByPlace(place!);
    },
    refetchInterval: 60 * 1000
  });

  if (place === undefined) {
    return get;
  } else {
    return withPlace;
  }
};
