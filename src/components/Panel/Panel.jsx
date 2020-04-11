import React from 'react';
import styles from './panel.module.scss';

const themes = {
  none: 'bg-transparent',
  white: 'bg-white',
  light: 'bg-gray-lightest',
  dark: 'bg-gray-darker'
};

const Panel = ({ children, theme = 'none' }) => (
  <section className={ `${styles.panel} ${themes[theme]}`}>
     {children} 
  </section>
);

export default Panel;
