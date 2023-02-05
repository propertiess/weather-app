import { useAppSelector } from '@/store/hooks';

import classes from '../styleModules/City.module.css';

export const City = () => {
  const currentData = useAppSelector(state => state.currentWeather);
  return (
    <div className={classes.city}>
      {currentData.name && <p>{currentData.name}</p>}
    </div>
  );
};
