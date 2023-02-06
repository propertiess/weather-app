import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';
import { clsx } from 'clsx';

import styles from './Button.module.css';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'primary' | 'secondary';
}

export const Button: FC<PropsWithChildren<Props>> = ({
  className,
  children,
  color = 'primary',
  type = 'button',
  ...rest
}) => {
  const btnStyles = clsx(styles.wrapper, className, styles[color]);

  return (
    <button className={btnStyles} type={type} {...rest}>
      {children}
    </button>
  );
};
