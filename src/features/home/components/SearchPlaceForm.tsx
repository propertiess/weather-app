import { FormEvent, useRef, useState } from 'react';

import { Button, Input } from '@/components';
import { useGetFiveDaysWeatherWithPlace } from '@/features/home/hooks';

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
    <form className='flex justify-center mt-5 gap-3 px-2' onSubmit={onSubmit}>
      <Input
        className='w-full sm:max-w-[30rem] text-lg'
        value={place}
        onChange={e => setPlace(e.target.value)}
        placeholder='Местоположение'
        type='search'
      />
      <Button type='submit'>Узнать</Button>
    </form>
  );
};
