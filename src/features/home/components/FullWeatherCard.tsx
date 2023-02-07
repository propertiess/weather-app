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
    return <div className='mt-7 flex justify-center'>Ошибка!</div>;
  }
  const currentDayWeather = fiveDaysWeather?.list?.[0];

  return (
    <>
      {fiveDaysWeather?.city?.name && (
        <h3 className='mt-7 text-center text-2xl'>
          {fiveDaysWeather?.city?.name}
        </h3>
      )}
      <div className='my-3 flex flex-col items-center px-2'>
        {currentDayWeather && (
          <CurrentWeatherCard
            desc={currentDayWeather.weather[0].description}
            dt={currentDayWeather.dt}
            key={currentDayWeather.dt_txt}
            img={currentDayWeather.weather[0].icon}
            temp={currentDayWeather.main.temp}
          />
        )}
        <div className='grid w-[20rem] grid-cols-2'>
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
