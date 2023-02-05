import { PropsWithChildren } from 'react';

import { Form } from '@/components/Form';

type Props = PropsWithChildren;

export const Layout = ({ children }: Props) => {
  return (
    <>
      <header>
        <Form />
      </header>
      <main>{children}</main>
      <footer></footer>
    </>
  );
};
