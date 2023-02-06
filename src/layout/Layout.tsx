import { PropsWithChildren } from 'react';

type Props = PropsWithChildren;

export const Layout = ({ children }: Props) => {
  return (
    <>
      <header className='p-2'>
        <h1 className='text-4xl text-center'>Weather</h1>
      </header>
      <main>{children}</main>
      <footer className='p-2 bg-secondary'>
        <p className='text-center'>&copy; 2022</p>
      </footer>
    </>
  );
};
