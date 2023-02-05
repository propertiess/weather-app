import { useContext } from 'react';
import clsx from 'clsx';

import { Button, Loader } from '@/components';
import { DetailsContext } from '@/context/DetailsContext';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { fetchFiveDaysWeather } from '@/store/reducers/FiveDaysWeather';
import { AutoCityWeather } from '@/utils/AutoCityWeather';

import { WeatherCard } from '../';

import styles from './WeatherList.module.css';

export const WeatherList = () => {
  const { details, setOpenDetails } = useContext(DetailsContext);
  const fiveDaysData = useAppSelector(state => state.fiveDaysWeather);
  const currentData = useAppSelector(state => state.currentWeather);
  const dispatch = useAppDispatch();
  AutoCityWeather();
  let day = 0;

  if (currentData.loading === 'none' && fiveDaysData.loading !== 'idle') {
    return null;
  } else if (
    currentData.loading === 'loading' ||
    fiveDaysData.loading === 'loading'
  ) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Loader />
      </div>
    );
  } else if (
    currentData.loading === 'failed' ||
    fiveDaysData.loading === 'failed'
  ) {
    return <div>{currentData.error?.message}</div>;
  }

  const openDetails = () => {
    dispatch(fetchFiveDaysWeather({ place: currentData.name! }));
    if (!details) {
      setOpenDetails(true);
    }
  };

  return (
    <>
      <div className={clsx(styles.wrapper, !details && 'flex justify-center')}>
        <div className={styles.row}>
          {currentData.weather.map(weather => {
            return (
              <WeatherCard
                desc={weather.description}
                day={(day += 1)}
                key={weather.id}
                img={weather.icon}
                temp={currentData.main!.temp}
                date={currentData.dt!}
                city={currentData.name}
              />
            );
          })}
          {fiveDaysData.list?.map(list =>
            list.weather.map(weather => {
              const regexp = new RegExp(/\b15:00\b/, 'g');
              const isFifteenHours = !!list.dt_txt.match(regexp);

              if (isFifteenHours && day !== 0) {
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
      <div className='flex justify-center mt-7'>
        {!details && (
          <Button onClick={openDetails}>Прогноз на ближ. дни</Button>
        )}
      </div>
    </>
  );
};
