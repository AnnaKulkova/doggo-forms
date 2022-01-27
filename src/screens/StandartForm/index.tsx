import { customSelectStyles, langData, sexData } from 'data';
import React, { FC, FormEventHandler, useState } from 'react';
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

const Form: FC<Props> = () => {
  const [name, setName] = useState('Doggo');
  const [age, setAge] = useState('23');
  const [sex, setSex] = useState(0);
  const [photo, setPhoto] = useState<File>();
  const [hasChildren, setHasChildren] = useState(false);
  const [married, setMarried] = useState(false);
  const [languages, setLanguages] = useState<
    MultiValue<{ label: string; value: string }>
  >([]);
  console.log('form rerender');

  const submit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.clear();
    console.log(`
<-----Doggo профиль----->\n
🟢 Имя: ${name}
🟢 Возраст: ${age}
🟢 Пол: ${sexData[sex].label} (${sexData[sex].value})
🟢 Фото: ${photo?.name}
🟢 Есть дети: ${hasChildren ? 'Да' : 'Нет'}
🟢 Женат/Замужем: ${married ? 'Да' : 'Нет'}
🟢 Выбранные языки: ${
      languages.length ? languages.map((item) => item.label) : 'Нет'
    }\n
<----------------------->
    `);
  };

  return (
    <div className="form_container">
      <Header title="Типичная форма" showBackButton />
      <form onSubmit={submit}>
        <header className="form_header bottom-offset">Doggo профиль</header>
        <div className="form_avatar-block bottom-offset">
          <ImagePicker title="Фото" onFilePick={setPhoto} photo={photo} />
          <RadioButtonGroup
            data={sexData}
            onRadioChange={setSex}
            label="Пол"
            selected={sex}
          />
          <div className="form_family-block">
            <span className="input-label">Семейное положение</span>
            <CheckBox
              label="Есть дети"
              checked={hasChildren}
              onChange={(e) => setHasChildren(e.target.checked)}
            />
            <CheckBox
              label={`Женат${sex === 1 ? 'a' : ''}/Замужем`}
              checked={married}
              onChange={(e) => setMarried(e.target.checked)}
            />
          </div>
        </div>
        <TextInput
          containerClassName="full-width bottom-offset"
          label="Имя"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextInput
          containerClassName="full-width bottom-offset"
          label="Возраст"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          type="number"
          min={14}
          max={201}
        />
        <span className="input-label">Языки</span>
        <Select<{ label: string; value: string }, true>
          options={langData}
          isMulti
          placeholder="Выберите языки..."
          noOptionsMessage={() => 'Ничего не осталось'}
          value={languages}
          onChange={(newValue) => setLanguages(newValue)}
          styles={customSelectStyles}
        />
        <Button className="form_button" type="submit">
          Отправить
        </Button>
      </form>
    </div>
  );
};

export default Form;
