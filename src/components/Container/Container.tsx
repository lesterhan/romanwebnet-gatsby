import React from 'react';
import styles from './container.module.scss';

const Container = ({ children, className = '', element = 'div' }) => {
  const Element = element;
  return (
    <Element className={`${styles.root} ${className}`}>{children}</Element>
  );
};

export default Container;
