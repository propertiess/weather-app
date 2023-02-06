import { useGetCurrentDayWeather } from '@/features/weather/hooks';

import styles from './Place.module.css';

export const Place = () => {
  const { data } = useGetCurrentDayWeather();

  return <div className={styles.place}>{data?.name && <p>{data.name}</p>}</div>;
};
