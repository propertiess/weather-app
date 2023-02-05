import { FormEvent, useContext, useRef } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { DetailsContext } from '@/context/DetailsContext';
import { useAppDispatch } from '@/store/hooks';
import { fetchCurrentWeather } from '@/store/reducers/CurrentWeather';
import { resetData } from '@/store/reducers/FiveDaysWeather';

import styles from './SearchPlaceForm.module.css';

export const SearchPlaceForm = () => {
  const ref = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const { setOpenDetails } = useContext(DetailsContext);

  const searchWeather = () => {
    if (ref.current?.value.trim()) {
      dispatch(resetData());
      setOpenDetails(false);
      dispatch(fetchCurrentWeather({ place: ref.current.value.trim() }));
      ref.current.value = '';
    }
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchWeather();
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <Input
        className='min-w-[10rem] sm:min-w-[30rem]'
        ref={ref}
        placeholder='Москва'
        type='search'
      />
      <Button onClick={searchWeather}>Узнать</Button>
    </form>
  );
};
