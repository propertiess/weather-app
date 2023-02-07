import { Loader } from '@/components';
import { WeatherCard } from '@/features/home/components';
import { useGetFiveDaysWeather } from '@/features/home/hooks';

import styles from './WeatherList.module.css';

export const WeatherList = () => {
  let day = 0;

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

  return (
    <>
      {fiveDaysWeather?.city?.name && (
        <h3 className='text-2xl text-center mt-7'>
          {fiveDaysWeather?.city?.name}
        </h3>
      )}
      <div className={styles.wrapper}>
        {fiveDaysWeather?.list?.map(list => {
          const weather = list.weather[0];
          const regexp = new RegExp(/\b15:00\b/, 'g');
          const isFifteenHours = !!list.dt_txt.match(regexp);

          if (isFifteenHours) {
            return (
              <WeatherCard
                desc={weather.description}
                day={(day += 1)}
                key={list.dt_txt}
                img={weather.icon}
                temp={list.main.temp}
              />
            );
          }

          return null;
        })}
      </div>
    </>
  );
};
