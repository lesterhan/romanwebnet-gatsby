import React from 'react';

const themes = {
  none: 'bg-transparent',
  white: 'bg-white',
  light: 'bg-gray-lightest',
  dark: 'bg-gray-darker',
};

const Panel = ({ children, theme = 'none' }) => (
  <section className={themes[theme]}>{children}</section>
);

export default Panel;
