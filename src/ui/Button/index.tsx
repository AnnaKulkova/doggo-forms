import React, { ButtonHTMLAttributes, FC } from 'react';
import './styles.css';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: FC<Props> = ({ type, children, className, ...rest }) => {
  return (
    <button type={type ?? 'button'} className={'button ' + className} {...rest}>
      {children}
    </button>
  );
};

export default Button;
