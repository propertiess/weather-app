import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';

import { DAYS } from '@/utils/consts/days';
import { MONTHS } from '@/utils/consts/moths';

import styles from './WeatherCard.module.css';

interface IWeatherProps {
  img: string;
  temp: number;
  day: number;
  desc: string;
}

export const WeatherCard = ({ day, temp, img, desc }: IWeatherProps) => {
  const [dates, setDates] = useState<string>('');
  const [days, setDays] = useState<string>('');

  useEffect(() => {
    const date = new Date();
    date.setDate(day + date.getDate() - 1);
    setDays(DAYS[date.getDay()]);
    setDates(clsx(MONTHS[date.getMonth()], date.getDate()));
  }, [day]);

  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
    >
      <div className={styles.desc}>
        <p className={styles.date}>
          <span>{days},</span>
          <span>{dates}</span>
        </p>
        <p>{Math.floor(temp)} &deg;</p>
        <p className={styles.condition}>{desc}</p>
      </div>
      <div className={styles.img_wrapper}>
        <img
          src={`https://openweathermap.org/img/wn/${img}@2x.png`}
          alt={desc}
        />
      </div>
    </motion.div>
  );
};