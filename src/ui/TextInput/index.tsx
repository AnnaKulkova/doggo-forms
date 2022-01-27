import React, { InputHTMLAttributes, forwardRef } from 'react';
import './styles.css';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  containerClassName?: string;
}

const TextInput = forwardRef<HTMLInputElement, Props>(
  ({ label, containerClassName, ...rest }, ref) => {
    return (
      <div className={'text-input_container  ' + containerClassName ?? ''}>
        {label && (
          <label className="input-label" htmlFor="text-input">
            {label}
          </label>
        )}
        <input
          type="text"
          id="text-input"
          className="full-width text-input"
          ref={ref}
          {...rest}
        />
      </div>
    );
  }
);

export default TextInput;
