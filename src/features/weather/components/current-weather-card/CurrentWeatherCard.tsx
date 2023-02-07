import { Loader } from '@/components';
import { WeatherCard } from '@/features/weather/components';
import { useGetCurrentDayWeather } from '@/features/weather/hooks';

export const CurrentWeatherCard = () => {
  const {
    data: currentDayWeather,
    isError,
    isFetching
  } = useGetCurrentDayWeather();

  if (isFetching) {
    return (
      <div className='flex justify-center'>
        <Loader />
      </div>
    );
  }

  if (isError) {
    return <div className='flex justify-center mt-7'>Ошибка!</div>;
  }

  return (
    <>
      {currentDayWeather?.name && (
        <h3 className='text-2xl text-center mt-7'>{currentDayWeather?.name}</h3>
      )}
      <div className='flex flex-col items-center gap-3 justify-center mt-7'>
        {currentDayWeather?.weather.map(weather => {
          return (
            <WeatherCard
              desc={weather.description}
              day={1}
              key={weather.id}
              img={weather.icon}
              temp={currentDayWeather.main!.temp}
            />
          );
        })}
      </div>
    </>
  );
};
