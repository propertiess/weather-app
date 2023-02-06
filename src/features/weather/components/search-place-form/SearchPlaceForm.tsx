import { FormEvent, useContext, useState } from 'react';

import { Button, Input } from '@/components';
import { DetailsContext } from '@/context/DetailsContext';
import {
  useGetCurrentDayWeatherWithPlace,
  useGetFiveDaysWeatherWithPlace
} from '@/features/weather/hooks';

import styles from './SearchPlaceForm.module.css';

export const SearchPlaceForm = () => {
  const [place, setPlace] = useState('');
  const { details } = useContext(DetailsContext);

  const { refetch: refetchCurrentDay } = useGetCurrentDayWeatherWithPlace(
    place,
    details
  );

  const { refetch: refetchFiveDays } = useGetFiveDaysWeatherWithPlace(
    place,
    details
  );

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (details) {
      refetchFiveDays();
    } else {
      refetchCurrentDay();
    }
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
      <Button type='submit'>Узнать</Button>
    </form>
  );
};
