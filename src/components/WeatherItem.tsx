import React, { FC, useContext, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import { DetailsContext } from '@/context/DetailsContext';
import { DAYS } from '@/utils/constants/days';
import { MONTHS } from '@/utils/constants/moths';

import '../styles/WeatherItem.css';

interface IWeatherProps {
  date: string | Date;
  img: string;
  temp: number;
  city?: string;
  day: number;
  desc: string;
}

export const WeatherItem = ({ date, day, temp, img, desc }: IWeatherProps) => {
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
    <>
      <motion.div
        className={'block' + weightWeather}
        initial={{ opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <p className={'days'}>{days}</p>
        {dates?.trim() && <p className={'date'}>{dates}</p>}
        <img
          className={'img' + imgOne}
          src={` https://openweathermap.org/img/wn/${img}@2x.png`}
          alt='213'
        />
        <p className={'tempNow'}>{Math.floor(temp)} &#8451;</p>
        <p className={'condition' + visibleCondition}>{desc}</p>
      </motion.div>
    </>
  );
};
