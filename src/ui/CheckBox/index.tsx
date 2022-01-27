import React, { InputHTMLAttributes, forwardRef } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  containerClassName?: string;
}

const CheckBox = forwardRef<HTMLInputElement, Props>(
  ({ label, containerClassName, ...rest }, ref) => {
    return (
      <div className={' ' + (containerClassName ?? '')}>
        <input type="checkbox" {...rest} ref={ref} />
        {label && <label htmlFor="check-box">{label}</label>}
      </div>
    );
  }
);

export default CheckBox;
