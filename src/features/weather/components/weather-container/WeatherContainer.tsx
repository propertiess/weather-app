import { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';

import { Button, Loader } from '@/components';
import { DetailsContext } from '@/context/DetailsContext';
import { WeatherCard, WeatherList } from '@/features/weather/components';
import { ICurrentData } from '@/types';

export const WeatherContainer = () => {
  const { details, setOpenDetails } = useContext(DetailsContext);

  const {
    data: currentDayWeather,
    isLoading,
    isError,
    errorUpdateCount
  } = useQuery<ICurrentData>({
    queryKey: ['current-day'],
    enabled: false,
    refetchOnWindowFocus: false
  });

  const openDetails = () => {
    if (!details) {
      setOpenDetails(true);
    }
  };

  if (isLoading) {
    return (
      <div className='flex justify-center'>
        <Loader />
      </div>
    );
  }

  if (errorUpdateCount > 1 && isError) {
    return <div className='flex justify-center'>Ошибка!</div>;
  }

  return (
    <>
      {!details ? (
        <div className='flex flex-col items-center gap-3 justify-center mt-7'>
          {currentDayWeather?.weather.map(weather => {
            return (
              <WeatherCard
                desc={weather.description}
                day={1}
                key={weather.id}
                img={weather.icon}
                temp={currentDayWeather.main!.temp}
                date={currentDayWeather.dt!}
              />
            );
          })}
          {!details && currentDayWeather && (
            <Button onClick={openDetails}>Прогноз на ближ. дни</Button>
          )}
        </div>
      ) : (
        <WeatherList />
      )}
    </>
  );
};
