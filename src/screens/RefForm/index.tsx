import { customSelectStyles, langData, sexData } from 'data';
import React, {
  FC,
  FormEventHandler,
  useCallback,
  useRef,
  useState,
} from 'react';
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
  const [sex, setSex] = useState(0);
  const [photo, setPhoto] = useState<File>();
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const hasChildrenRef = useRef<HTMLInputElement>(null);
  const marriedRef = useRef<HTMLInputElement>(null);
  const [languages, setLanguages] = useState<
    MultiValue<{ label: string; value: string }>
  >([]);
  console.log('form rerender');

  const submit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.clear();
    console.log(`
<-----Doggo профиль----->\n
  🟢 Имя: ${nameRef.current?.value}\n
  🟢 Возраст: ${ageRef.current?.value}\n
  🟢 Пол: ${sexData[sex].label} (${sexData[sex].value})\n
  🟢 Фото: ${photo?.name}\n
  🟢 Есть дети: ${hasChildrenRef.current?.checked}\n
  🟢 Женат/Замужем: ${marriedRef.current?.checked}\n
  🟢 Выбранные языки: ${languages.map((item) => item.label)}\n
<----------------------->
    `);
  };

  const renderNoElementText = useCallback(() => 'Ничего не осталось', []);
  return (
    <div className="form_container">
      <Header title="Форма сына маминой подруги" showBackButton />
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
            <CheckBox label="Есть дети" ref={hasChildrenRef} />
            <CheckBox
              label={`Женат${sex === 1 ? 'a' : ''}/Замужем`}
              ref={marriedRef}
            />
          </div>
        </div>
        <TextInput
          containerClassName="full-width bottom-offset"
          label="Имя"
          defaultValue="Doggo"
          ref={nameRef}
        />
        <TextInput
          containerClassName="full-width bottom-offset"
          label="Возраст"
          type="number"
          min={14}
          max={201}
          defaultValue={23}
          ref={ageRef}
        />
        <span className="input-label">Языки</span>
        <Select<{ label: string; value: string }, true>
          options={langData}
          isMulti
          placeholder="Выберите языки..."
          noOptionsMessage={renderNoElementText}
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
