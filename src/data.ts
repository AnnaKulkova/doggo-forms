import { MultiValue, StylesConfig } from 'react-select';

export const sexData = [
  {
    label: 'Мужчина',
    value: 'male',
  },
  {
    label: 'Женщина',
    value: 'female',
  },
  {
    label: 'Ламинат',
    value: 'other',
  },
];

export const langData: MultiValue<{ label: string; value: string }> = [
  { value: 'ru', label: 'Русский' },
  { value: 'eng', label: 'Английский' },
  { value: 'de', label: 'Немецкий' },
  { value: 'fr', label: 'Французский' },
  { value: 'cow', label: 'Говяжий' },
];

export const customSelectStyles: StylesConfig<{
  label: string;
  value: string;
}> = {
  container: (provided) => ({
    ...provided,
    maxWidth: 480,
    width: '100%',
  }),
  control: (provided, state) => ({
    ...provided,
    borderRadius: 'var(--border-radius)',
    padding: '3px 6px',
    borderColor: 'var(--primary-3)',
    boxShadow: state.isFocused ? '0 0 0 1px var(--primary-2)' : 'none',
    '&:hover': {
      borderColor: 'var(--primary-2)',
    },
  }),
};
