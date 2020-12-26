import React from 'react';
import styles from './card.module.scss';

const Card = ({
  cta,
  description,
  link,
  subtext,
  title,
  external = false,
}) => (
  <div className={styles.card}>
    <div className={styles.cardLeft}>
      <h4 className="title">
        { link ? (
            <a target={external ? '_blank': '_self'} rel="noopener noreferrer" href={link} title={title}>{title}</a>
          ) : (
            {title}
          )
        }
      </h4>
      <p className={styles.description}>{description}</p>
      { subtext && <h5 className={`${styles.subtext}`}>{subtext}</h5> }
    </div>
    <h5 className={styles.cardRight}>
      <a 
        className={styles.cta}
        target={external ? '_blank': '_self'}
        rel="noopener noreferrer" 
        href={link} 
        title={cta}>
          {cta}
      </a>
    </h5>
  </div>
);

export default Card;
