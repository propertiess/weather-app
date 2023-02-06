import { Button } from '@/components';
import {
  CurrentWeatherCard,
  SearchPlaceForm,
  WeatherList
} from '@/features/weather/components';
import { useDetailsContext } from '@/features/weather/context';
import { useGetCurrentDayWeather } from '@/features/weather/hooks';

export const WeatherContainer = () => {
  const { detailsIsOpen, setOpenDetails } = useDetailsContext();
  const { data: currentWeather } = useGetCurrentDayWeather();

  const openDetails = () => {
    !detailsIsOpen && setOpenDetails(true);
  };

  return (
    <>
      <SearchPlaceForm />
      {detailsIsOpen ? (
        <WeatherList />
      ) : (
        <>
          <CurrentWeatherCard />
          {currentWeather && (
            <Button className='block mx-auto mt-7' onClick={openDetails}>
              Прогноз на ближ. дни
            </Button>
          )}
        </>
      )}
    </>
  );
};
