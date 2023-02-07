import clsx from 'clsx';

import { getFullDate, getWeatherImage } from '@/utils';
import { FULL_DAYS } from '@/utils/consts/days';
import { MONTHS } from '@/utils/consts/moths';

interface Props {
  img: string;
  temp: number;
  dt: number;
  desc: string;
}

export const CurrentWeatherCard = ({ dt, temp, img, desc }: Props) => {
  const { date, day, month } = getFullDate(dt);

  return (
    <div className='grid w-[20rem] grid-cols-[1fr,0.5fr] gap-3 bg-secondary p-4 shadow-md'>
      <div className='flex flex-col gap-3'>
        <p className='flex flex-col text-xl font-medium uppercase'>
          <span>{FULL_DAYS[day]},</span>
          <span>{clsx(MONTHS[month], date)}</span>
        </p>
        <p>{Math.floor(temp)} &deg;</p>
        <p className='my-auto text-sm'>{desc}</p>
      </div>
      <div className='self-center text-end'>
        <img src={getWeatherImage(img)} alt={desc} />
      </div>
    </div>
  );
};
