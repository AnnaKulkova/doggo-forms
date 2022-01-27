import React, { FC } from 'react';
import { BlockLink, Header } from 'ui';
import './styles.css';

interface Props {}

const Home: FC<Props> = () => {
  return (
    <div className="home">
      <Header title="Обработка форм" />
      <div className="home_links">
        <BlockLink href="standart" image={require('assets/small_doggo.png')}>
          Типичная форма
        </BlockLink>
        <BlockLink image={require('assets/doggo_big.jpg')} href="refs">
          Форма сына маминой подруги
        </BlockLink>
        <BlockLink image={require('assets/very_big_doggo.jpeg')} href="hooks">
          Форма будущего
        </BlockLink>
      </div>
    </div>
  );
};

export default Home;
