import React from 'react';
import styles from './card.module.scss';

const CardList = ({ children }) => (
  <div className={styles.cardList}>{children}</div>
);

export default CardList;
