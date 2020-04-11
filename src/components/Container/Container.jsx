import React from 'react';
import styles from './container.module.scss';

const Container = ({ children, className, element = 'div', padded = true }) => {
  const Element = element;
  return (
    <Element className={`${styles.root} ${className} ${padded && styles.padded}`}>
      {children}
    </Element>
  );
};

export default Container;
