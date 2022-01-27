import React, { AnchorHTMLAttributes, FC } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  image?: string;
  href: string;
}

const BlockLink: FC<Props> = ({ children, image, href, ...linkProps }) => {
  return (
    <Link className="link-container" {...linkProps} to={href}>
      {!!image && <img className="link_image" src={image} alt="link_image" />}
      <span className="link_text">{children}</span>
    </Link>
  );
};

export default BlockLink;
