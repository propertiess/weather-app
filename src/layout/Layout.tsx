import { PropsWithChildren } from 'react';

import { SearchPlaceForm } from '@/features/weather/components';

type Props = PropsWithChildren;

export const Layout = ({ children }: Props) => {
  return (
    <>
      <header>
        <SearchPlaceForm />
      </header>
      <main>{children}</main>
      <footer></footer>
    </>
  );
};
