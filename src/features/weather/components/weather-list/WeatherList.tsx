import { Loader } from '@/components';
import { WeatherCard } from '@/features/weather/components';
import { useGetFiveDaysWeather } from '@/features/weather/hooks';

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
    <div className={styles.wrapper}>
      {fiveDaysWeather?.list?.map(list =>
        list.weather.map(weather => {
          const regexp = new RegExp(/\b15:00\b/, 'g');
          const isFifteenHours = !!list.dt_txt.match(regexp);

          if (isFifteenHours) {
            return (
              <WeatherCard
                desc={weather.description}
                day={(day += 1)}
                key={weather.id}
                img={weather.icon}
                temp={list.main.temp}
                date={list.dt_txt!}
              />
            );
          }
          return null;
        })
      )}
    </div>
  );
};
