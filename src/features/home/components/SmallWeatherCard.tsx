import { getFullDate, getWeatherImage } from '@/utils';
import { SHORT_DAYS } from '@/utils/consts/days';

type Props = {
  img: string;
  temp: number;
  dt: number;
};

export const SmallWeatherCard = ({ dt, temp, img }: Props) => {
  const day = getFullDate(dt).day;

  return (
    <div className='grid w-[10rem] grid-cols-[1fr,0.2fr] border border-solid border-secondary p-2'>
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
