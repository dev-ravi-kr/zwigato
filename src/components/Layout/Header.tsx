import type { FC } from 'react';
import { Fragment } from 'react';

import mealsImage from "../../assets/meals.jpg";
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

interface HeaderProps {
  onShowCart: () => void;
}

const Header: FC<HeaderProps> = ({ onShowCart }) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Zwigato-Food Delivery</h1>
        <HeaderCartButton onClick={onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt='A table full of delicious food!' />
      </div>
    </Fragment>
  );
};

export default Header;
