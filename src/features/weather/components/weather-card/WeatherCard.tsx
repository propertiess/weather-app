import { useContext, useEffect, useState } from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';

import { DetailsContext } from '@/context/DetailsContext';
import { DAYS } from '@/utils/constants/days';
import { MONTHS } from '@/utils/constants/moths';

import styles from './WeatherCard.module.css';

interface IWeatherProps {
  date: string | Date;
  img: string;
  temp: number;
  city?: string;
  day: number;
  desc: string;
}

export const WeatherCard = ({ date, day, temp, img, desc }: IWeatherProps) => {
  const [dates, setDates] = useState<string>();
  const { details } = useContext(DetailsContext);
  const [days, setDays] = useState<string>('');

  const weightWeather = day === 1 && !details ? ' block_weight' : '';
  const visibleCondition = day === 1 && !details ? ' condition_on' : '';
  const imgOne = day === 1 && !details ? ' img_one' : '';

  useEffect(() => {
    const date = new Date();
    date.setDate(day + date.getDate() - 1);
    setDays(DAYS[date.getDay()]);
    setDates((date.getDate() + ' ' + MONTHS[date.getMonth()]).toString());
  }, [date, day]);

  return (
    <motion.div
      className={clsx(styles.block, weightWeather)}
      initial={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
    >
      <p className={styles.days}>{days}</p>
      {dates?.trim() && <p className={styles.date}>{dates}</p>}
      <img
        className={clsx(styles.img, imgOne)}
        src={`https://openweathermap.org/img/wn/${img}@2x.png`}
        alt={desc}
      />
      <p className={styles.tempNow}>{Math.floor(temp)} &#8451;</p>
      <p className={clsx(styles.condition, visibleCondition)}>{desc}</p>
    </motion.div>
  );
};
