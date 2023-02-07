import { PropsWithChildren } from 'react';

type Props = PropsWithChildren;

export const Layout = ({ children }: Props) => {
  return (
    <>
      <header className='p-2'>
        <h1 className='text-center text-4xl'>Weather</h1>
      </header>
      <main>{children}</main>
      <footer className='bg-secondary p-2'>
        <p className='text-center'>&copy; 2022</p>
      </footer>
    </>
  );
};
