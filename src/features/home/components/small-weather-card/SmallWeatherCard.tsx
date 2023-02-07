import { getFullDate, getWeatherImage } from '@/utils';
import { SHORT_DAYS } from '@/utils/consts/days';

import styles from './SmallWeatherCard.module.css';

type Props = {
  img: string;
  temp: number;
  dt: number;
};

export const SmallWeatherCard = ({ dt, temp, img }: Props) => {
  const day = getFullDate(dt).day;

  return (
    <div className={styles.card}>
      <div className='uppercase'>
        <p className='flex flex-col'>
          <span>{SHORT_DAYS[day]}</span>
          <span>{Math.floor(temp)} &deg;</span>
        </p>
      </div>
      <div>
        <img
          className='w-10'
          src={getWeatherImage(img)}
          alt={`weather-${day}`}
        />
      </div>
    </div>
  );
};
