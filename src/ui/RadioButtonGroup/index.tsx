import React, {
  ChangeEvent,
  FC,
  InputHTMLAttributes,
  useCallback,
} from 'react';
import './styles.css';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  containerClassName?: string;
  data: {
    label: string;
    value: string | number;
  }[];
  defaultSelected?: number;
  horizontal?: boolean;
  selected?: number;
  onRadioChange?(val: number): void;
}

const RadioButtonGroup: FC<Props> = ({
  label,
  name,
  containerClassName,
  data,
  defaultSelected,
  horizontal,
  selected,
  onRadioChange,
  onChange,
  ...rest
}) => {
  const handleChange = useCallback(
    (index: number) => (e: ChangeEvent<HTMLInputElement>) => {
      onRadioChange?.(index);
      onChange?.(e);
    },
    [onChange, onRadioChange]
  );
  return (
    <div className={'radio-group_container ' + (containerClassName ?? '')}>
      {label && (
        <label className="input-label" htmlFor="radio-button-group">
          {label}
        </label>
      )}
      <div
        id={'radio-button-group'}
        className={
          'radio-group full-width ' + (horizontal ? 'row ' : 'column ')
        }
      >
        {data.map((radio, index) => {
          return (
            <div key={index} className="row">
              <input
                type="radio"
                name="radio-group"
                value={radio.value}
                id={`radio-${index}`}
                defaultChecked={
                  typeof defaultSelected === 'number'
                    ? defaultSelected === index
                    : undefined
                }
                checked={
                  typeof selected === 'number' ? selected === index : undefined
                }
                onChange={handleChange(index)}
                {...rest}
              />
              <label htmlFor={`radio-${index}`}>{radio.label}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RadioButtonGroup;
