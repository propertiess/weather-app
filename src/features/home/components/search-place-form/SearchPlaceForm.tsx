import { FormEvent, useState } from 'react';

import { Button, Input } from '@/components';
import { useDetailsContext } from '@/features/home/context';
import {
  useGetCurrentDayWeatherWithPlace,
  useGetFiveDaysWeatherWithPlace
} from '@/features/home/hooks';

import styles from './SearchPlaceForm.module.css';

export const SearchPlaceForm = () => {
  const [place, setPlace] = useState('');
  const { detailsIsOpen } = useDetailsContext();

  const { refetch: refetchCurrentDay } = useGetCurrentDayWeatherWithPlace(
    place,
    detailsIsOpen
  );

  const { refetch: refetchFiveDays } = useGetFiveDaysWeatherWithPlace(
    place,
    detailsIsOpen
  );

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (detailsIsOpen) {
      refetchFiveDays();
    } else {
      refetchCurrentDay();
    }
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <Input
        className='w-full sm:max-w-[30rem] text-lg'
        value={place}
        onChange={e => setPlace(e.target.value)}
        placeholder='Москва'
        type='search'
      />
      <Button type='submit'>Узнать</Button>
    </form>
  );
};
