import React from 'react';
import burgerIcon from 'assets/icons/burger.svg';
import s from './BurgerMenuBtn.module.css';

export const BurgerMenuBtn = () => {
  return (
    <div className={s.burgerMenu}>
      <img src={burgerIcon} alt="burgerIcon" />
    </div>
  )
}
