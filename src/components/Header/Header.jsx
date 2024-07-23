import React from 'react';
import { Logo} from 'components/Logo/Logo';
import { BurgerMenuBtn } from 'components/BurgerMenuBtn/BurgerMenuBtn';
import s from './Header.module.css';

const Header = () => {
  return (
    <header className={s.header}>
      <Logo/>
      <BurgerMenuBtn/>
    </header>
  )
}

export default Header;