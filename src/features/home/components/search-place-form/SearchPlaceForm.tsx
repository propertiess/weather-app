import { FormEvent, useRef, useState } from 'react';

import { Button, Input } from '@/components';
import { useGetFiveDaysWeatherWithPlace } from '@/features/home/hooks';

import styles from './SearchPlaceForm.module.css';

export const SearchPlaceForm = () => {
  const [place, setPlace] = useState('');
  const prevPlaceRef = useRef<string>('');

  const { refetch: refetchFiveDays, isError: isErrorFiveDays } =
    useGetFiveDaysWeatherWithPlace(place);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (place === prevPlaceRef.current && !isErrorFiveDays) {
      return;
    }

    refetchFiveDays();

    prevPlaceRef.current = place;
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
