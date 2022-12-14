import React, { FC, useContext } from 'react';
import WeatherItem from './WeatherItem';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import classes from '../styleModules/Weathers.module.css';
import Loader from './Loader';
import { fetchFiveDaysWeather } from '../store/reducers/FiveDaysWeather';
import DetailsContext from '../context/DetailsContext';
import AutoCityWeather from '../utils/AutoCityWeather';

const WeatherItems: FC = () => {
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
      <div className={classes.row}>
        {currentData.weather.map((weather, i) => {
          return (
            <WeatherItem
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
        {fiveDaysData.list?.map((list, i) =>
          list.weather.map(weather => {
            if (
              list.dt_txt.substring(11, list.dt_txt.length - 3) === '15:00' &&
              day !== 0
            ) {
              return (
                <WeatherItem
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
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 30 }}>
        {!details && (
          <button className={classes.btn} onClick={openDetails} type={'button'}>
            ?????????????? ???? ????????. ??????
          </button>
        )}
      </div>
    </>
  );
};

export default WeatherItems;
