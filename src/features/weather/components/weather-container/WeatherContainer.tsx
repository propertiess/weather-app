import { Button } from '@/components';
import { CurrentWeatherCard, WeatherList } from '@/features/weather/components';
import { useDetailsContext } from '@/features/weather/context';
import { useGetCurrentDayWeather } from '@/features/weather/hooks';

export const WeatherContainer = () => {
  const { detailsIsOpen, setOpenDetails } = useDetailsContext();
  const { data: currentWeather } = useGetCurrentDayWeather();

  const openDetails = () => {
    !detailsIsOpen && setOpenDetails(true);
  };

  if (detailsIsOpen) {
    return <WeatherList />;
  }

  return (
    <>
      <CurrentWeatherCard />
      {currentWeather && (
        <Button className='block mx-auto mt-7' onClick={openDetails}>
          Прогноз на ближ. дни
        </Button>
      )}
    </>
  );
};
