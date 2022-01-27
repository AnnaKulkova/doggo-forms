import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

interface Props {
  title?: string;
  showBackButton?: boolean;
}

const Header: FC<Props> = ({ title, showBackButton }) => {
  return (
    <header className="header">
      {showBackButton && (
        <Link className="header_back-button" to={'/'}>
          ‹
        </Link>
      )}
      <span className="header_title">{title}</span>
    </header>
  );
};

export default Header;
