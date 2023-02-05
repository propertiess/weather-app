import { forwardRef, InputHTMLAttributes } from 'react';
import { clsx } from 'clsx';

import styles from './Input.module.css';

type Props = InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, Props>(function Input(
  { className, type, ...rest },
  ref
) {
  const style = clsx(className, {
    [styles.wrapper]: type !== 'checkbox'
  });

  if (type === 'file') {
    return (
      <>
        <input type={type} hidden />
        <input />
      </>
    );
  }

  return <input className={style} ref={ref} type={type} {...rest} />;
});
