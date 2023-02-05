import { FormEvent, useContext, useState } from 'react';

import { Input } from '@/components/ui/input';
import { DetailsContext } from '@/context/DetailsContext';
import {
  useGetCurrentDayWeather,
  useGetFiveDaysWeather
} from '@/features/weather/hooks';
import { useDebounce } from '@/hooks';

import styles from './SearchPlaceForm.module.css';

export const SearchPlaceForm = () => {
  const [place, setPlace] = useState('');
  const { details } = useContext(DetailsContext);
  const debouncedPlace = useDebounce(place);

  useGetCurrentDayWeather(debouncedPlace, details);

  useGetFiveDaysWeather(debouncedPlace, details);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <Input
        className='min-w-[10rem] sm:min-w-[30rem]'
        value={place}
        onChange={e => setPlace(e.target.value)}
        placeholder='Москва'
        type='search'
      />
    </form>
  );
};
