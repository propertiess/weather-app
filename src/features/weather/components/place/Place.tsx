import { useAppSelector } from '@/store/hooks';

import styles from './Place.module.css';

export const Place = () => {
  const currentData = useAppSelector(state => state.currentWeather);
  return (
    <div className={styles.place}>
      {currentData.name && <p>{currentData.name}</p>}
    </div>
  );
};
