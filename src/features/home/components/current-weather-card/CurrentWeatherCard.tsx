import clsx from 'clsx';

import { getFullDate, getWeatherImage } from '@/utils';
import { FULL_DAYS } from '@/utils/consts/days';
import { MONTHS } from '@/utils/consts/moths';

import styles from './CurrentWeatherCard.module.css';

interface Props {
  img: string;
  temp: number;
  dt: number;
  desc: string;
}

export const CurrentWeatherCard = ({ dt, temp, img, desc }: Props) => {
  const { date, day, month } = getFullDate(dt);

  return (
    <div className={styles.card}>
      <div className={styles.desc}>
        <p className={styles.date}>
          <span>{FULL_DAYS[day]},</span>
          <span>{clsx(MONTHS[month], date)}</span>
        </p>
        <p>{Math.floor(temp)} &deg;</p>
        <p className={styles.condition}>{desc}</p>
      </div>
      <div className={styles.img_wrapper}>
        <img src={getWeatherImage(img)} alt={desc} />
      </div>
    </div>
  );
};
