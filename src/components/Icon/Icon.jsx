import React from 'react';
import styles from './icon.module.scss';

const Icon = ({ symbol, size = 'default', className }) => (
  <svg className={`${styles.root} ${styles[size + 'Size']} ${className}`}>
    <use xlinkHref={`#icon-${symbol}`} />
  </svg>  
);

export default Icon;
