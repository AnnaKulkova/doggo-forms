import { customSelectStyles, langData, sexData } from 'data';
import React, { FC, useCallback } from 'react';
import { Controller, useForm } from 'react-hook-form';
import Select, { MultiValue } from 'react-select';
import {
  Button,
  CheckBox,
  Header,
  ImagePicker,
  RadioButtonGroup,
  TextInput,
} from 'ui';
import './styles.css';

interface Props {}

interface IForm {
  sex: number;
  photo?: File;
  name: string;
  age: number;
  hasChildren: boolean;
  married: boolean;
  languages: MultiValue<{ label: string; value: string }>;
}

const Form: FC<Props> = () => {
  console.log('form rerender');

  const submit = (data: IForm) => {
    console.clear();
    console.log(`
    <-----Doggo профиль----->\n
      🟢 Имя: ${data.name}\n
      🟢 Возраст: ${data.age}\n
      🟢 Пол: ${sexData[data.sex]?.label} (${sexData[data.sex]?.value})\n
      🟢 Фото: ${data.photo?.name}\n
      🟢 Есть дети: ${data.hasChildren}\n
      🟢 Женат/Замужем: ${data.married}\n
      🟢 Выбранные языки: ${data.languages?.map((item) => item.label)}\n
    <----------------------->
        `);
  };

  const renderNoElementText = useCallback(() => 'Ничего не осталось', []);

  const { register, handleSubmit, control, watch } = useForm<IForm>();

  const watchSex = watch('sex');

  return (
    <div className="form_container">
      <Header title="Форма будущего" showBackButton />
      <form onSubmit={handleSubmit(submit, console.warn)}>
        <header className="form_header bottom-offset">Doggo профиль</header>
        <div className="form_avatar-block bottom-offset">
          <Controller<IForm, 'photo'>
            name="photo"
            control={control}
            render={({ field }) => {
              return (
                <ImagePicker
                  title="Фото"
                  photo={field.value}
                  onFilePick={field.onChange}
                />
              );
            }}
          />
          <Controller<IForm, 'sex'>
            name="sex"
            control={control}
            defaultValue={0}
            render={({ field }) => {
              return (
                <RadioButtonGroup
                  data={sexData}
                  label="Пол"
                  selected={field.value}
                  onRadioChange={field.onChange}
                />
              );
            }}
          />
          <div className="form_family-block">
            <span className="input-label">Семейное положение</span>
            <CheckBox label="Есть дети" {...register('hasChildren')} />
            <CheckBox
              label={`Женат${watchSex === 1 ? 'a' : ''}/Замужем`}
              {...register('married')}
            />
          </div>
        </div>
        <TextInput
          containerClassName="full-width bottom-offset"
          label="Имя"
          defaultValue="Doggo"
          {...register('name')}
        />
        <TextInput
          containerClassName="full-width bottom-offset"
          label="Возраст"
          type="number"
          min={14}
          max={201}
          defaultValue={23}
          {...register('age')}
        />
        <span className="input-label">Языки</span>
        <Controller<IForm, 'languages'>
          name="languages"
          control={control}
          render={({ field }) => {
            return (
              <Select<{ label: string; value: string }, true>
                options={langData}
                isMulti
                placeholder="Выберите языки..."
                noOptionsMessage={renderNoElementText}
                value={field.value}
                onChange={field.onChange}
                styles={customSelectStyles}
              />
            );
          }}
        />

        <Button className="form_button" type="submit">
          Отправить
        </Button>
      </form>
    </div>
  );
};

export default Form;
