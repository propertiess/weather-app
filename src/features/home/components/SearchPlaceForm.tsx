import { FormEvent, useRef, useState } from 'react';

import { Button, Input } from '@/components';
import { useGetFiveDaysWeather } from '@/features/home/hooks';

export const SearchPlaceForm = () => {
  const [place, setPlace] = useState('');
  const prevPlaceRef = useRef<string>('');

  const { refetch: refetchFiveDays, isError: isErrorFiveDays } =
    useGetFiveDaysWeather(place);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (place === prevPlaceRef.current && !isErrorFiveDays) {
      return;
    }

    refetchFiveDays();

    prevPlaceRef.current = place;
  };

  return (
    <form className='mt-5 flex justify-center gap-3 px-2' onSubmit={onSubmit}>
      <Input
        className='w-full text-lg sm:max-w-[30rem]'
        value={place}
        onChange={e => setPlace(e.target.value)}
        placeholder='Местоположение'
        type='search'
      />
      <Button type='submit'>Узнать</Button>
    </form>
  );
};
