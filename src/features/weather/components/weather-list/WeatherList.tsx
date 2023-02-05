import { useQuery } from '@tanstack/react-query';

import { Loader } from '@/components';
import { IFiveDaysData } from '@/types';

import { WeatherCard } from '../';

import styles from './WeatherList.module.css';

export const WeatherList = () => {
  let day = 0;

  const {
    data: fiveDaysWeather,
    isLoading,
    isError
  } = useQuery<IFiveDaysData>({
    queryKey: ['five-days'],
    refetchOnWindowFocus: false
  });

  if (isLoading) {
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
    <div className={styles.wrapper}>
      <div className={styles.row}>
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
    </div>
  );
};
