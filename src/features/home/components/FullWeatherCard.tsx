import { Loader } from '@/components';
import {
  CurrentWeatherCard,
  SmallWeatherCard
} from '@/features/home/components';
import { useGetFiveDaysWeather } from '@/features/home/hooks';
import { getFullDate } from '@/utils';

export const FullWeatherCard = () => {
  const {
    data: fiveDaysWeather,
    isFetching,
    isError
  } = useGetFiveDaysWeather();

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
  const currentDayWeather = fiveDaysWeather?.list?.[0];

  return (
    <>
      {fiveDaysWeather?.city?.name && (
        <h3 className='text-2xl text-center mt-7'>
          {fiveDaysWeather?.city?.name}
        </h3>
      )}
      <div className='flex flex-col items-center px-2 my-3'>
        {currentDayWeather && (
          <CurrentWeatherCard
            desc={currentDayWeather.weather[0].description}
            dt={currentDayWeather.dt}
            key={currentDayWeather.dt_txt}
            img={currentDayWeather.weather[0].icon}
            temp={currentDayWeather.main.temp}
          />
        )}
        <div className='grid grid-cols-2 w-[20rem]'>
          {fiveDaysWeather?.list?.map(list => {
            const date = getFullDate(list.dt).date;
            const currentDate = new Date().getDate();

            if (date === currentDate) {
              return null;
            }

            const weather = list.weather[0];
            const regexp = new RegExp(/\b15:00\b/, 'g');
            const isFifteenHours = !!list.dt_txt.match(regexp);

            if (isFifteenHours) {
              return (
                <SmallWeatherCard
                  key={list.dt_txt}
                  dt={list.dt}
                  img={weather.icon}
                  temp={list.main.temp}
                />
              );
            }

            return null;
          })}
        </div>
      </div>
    </>
  );
};
