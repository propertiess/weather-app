import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';

import { DAYS } from '@/utils/consts/days';
import { MONTHS } from '@/utils/consts/moths';

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
  const [days, setDays] = useState<string>('');

  useEffect(() => {
    const date = new Date();
    date.setDate(day + date.getDate() - 1);
    setDays(DAYS[date.getDay()]);
    setDates(clsx(MONTHS[date.getMonth()] + ' ' + date.getDate()));
  }, [date, day]);

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
          {days}, {dates}
        </p>
        <p className={styles.tempNow}>{Math.floor(temp)} &#8451;</p>
        <p className={styles.condition}>Ощущается {desc}</p>
      </div>
      <div className={styles.img_wrapper}>
        <img
          className={styles.img}
          src={`https://openweathermap.org/img/wn/${img}@2x.png`}
          alt={desc}
        />
      </div>
    </motion.div>
  );
};
