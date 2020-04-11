import React from 'react';
import styles from './heading.module.scss';

const Heading = ({ text, element, theme = 'light' }) => {
  const Tag = element;
  return (
    <Tag className={`${styles.root} ${styles[theme]}`}>{text}</Tag>
  );
};

export default Heading;
