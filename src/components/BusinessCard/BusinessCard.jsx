import React from 'react';
import styles from './businessCard.module.scss';
import Icon from '../Icon';

const BusinessCard = () => (
  <div className={styles.root}>
    <div className={styles.heading}>
      <h1 className={styles.name}>
        <b className={styles.nameB}>G</b>reg <b className={styles.nameB}>Roman</b>
      </h1>
      <h4 className={styles.title}><b className={styles.titleB}>S</b>oftware <b className={styles.titleB}>E</b>ngineer</h4>
    </div>
    <h6 className={styles.contact}>Jersey City, NJ | gregorymichaelroman@gmail.com</h6>
    <div className={styles.arrow}>
      <Icon className="bounce" symbol="chevron-down" />
    </div>      
  </div>
);

export default BusinessCard;
