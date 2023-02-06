import { useContext } from 'react';

import { Button, Loader } from '@/components';
import { DetailsContext } from '@/context/DetailsContext';
import { WeatherCard, WeatherList } from '@/features/weather/components';
import { useGetCurrentDayWeather } from '@/features/weather/hooks';

export const WeatherContainer = () => {
  const { details, setOpenDetails } = useContext(DetailsContext);

  const {
    data: currentDayWeather,
    isError,
    isFetching
  } = useGetCurrentDayWeather();

  const openDetails = () => {
    if (!details) {
      setOpenDetails(true);
    }
  };

  if (isFetching) {
    return (
      <div className='flex justify-center'>
        <Loader />
      </div>
    );
  }

  if (isError) {
    return <div className='flex justify-center'>Ошибка!</div>;
  }

  return (
    <>
      {currentDayWeather?.name && (
        <h3 className='text-2xl text-center mt-7'>{currentDayWeather?.name}</h3>
      )}
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
          {currentDayWeather && (
            <Button onClick={openDetails}>Прогноз на ближ. дни</Button>
          )}
        </div>
      ) : (
        <WeatherList />
      )}
    </>
  );
};
