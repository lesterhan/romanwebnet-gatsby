import React from 'react';
import styles from './card.module.scss';

const Card = ({
  cta,
  description,
  link,
  subtext,
  title,
}) => (
  <div className={styles.card}>
    <div className={styles.cardLeft}>
      <h4 className="title">
        { link ? (
            <a target="_blank" rel="noopener noreferrer" href={link} title={title}>{title}</a>
          ) : (
            {title}
          )
        }
      </h4>
      <p className="description">{description}</p>
      <h5 className={`${styles.subtext}`}>{subtext}</h5>
    </div>
    <h5 className={styles.cardRight}>
      <a 
        className={styles.cta}
        target="_blank" 
        rel="noopener noreferrer" 
        href={link} 
        title={cta}>
          {cta}
      </a>
    </h5>
  </div>
);

export default Card;
