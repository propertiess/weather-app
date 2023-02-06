import { Button, Loader } from '@/components';
import { WeatherCard, WeatherList } from '@/features/weather/components';
import { useDetailsContext } from '@/features/weather/context';
import { useGetCurrentDayWeather } from '@/features/weather/hooks';

export const WeatherContainer = () => {
  const { detailsIsOpen, setOpenDetails } = useDetailsContext();

  const {
    data: currentDayWeather,
    isError,
    isFetching
  } = useGetCurrentDayWeather();

  const openDetails = () => {
    if (!detailsIsOpen) {
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
    return <div className='flex justify-center mt-7'>Ошибка!</div>;
  }

  return (
    <>
      {currentDayWeather?.name && (
        <h3 className='text-2xl text-center mt-7'>{currentDayWeather?.name}</h3>
      )}
      {!detailsIsOpen ? (
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
