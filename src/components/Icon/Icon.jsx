import React from 'react';
import styles from './icon.module.scss';

const Icon = ({ symbol, size = 'default' }) => (
  <svg className={`${styles.root} ${styles[size + 'Size']}`}>
    <use xlinkHref={`#icon-${symbol}`} />
  </svg>  
);

export default Icon;
