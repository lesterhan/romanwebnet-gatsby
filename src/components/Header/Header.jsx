import React from 'react';
import styles from './header.module.scss';
import Icon from '../Icon';
import links from './links';

const Header = ({ theme = 'default' }) => {
  const LogoTag = theme === 'home' ? 'h1' : 'h3';
  return (
    <header className={styles[theme]}>
      <div className={styles.logo}>
        <LogoTag className={`h5 ${styles.logoText}`}>
          <a className="light" href="/" title="home">Romanwebnet.com</a>
        </LogoTag>
      </div>    
      <nav className={styles.nav}>
        {   
          links.map(({ root, icon }, key) => 
            <a 
              className={styles.link} 
              rel="noopener noreferrer"
              key={key}
              {...root}
            >
              <Icon {...icon} />
              <span className={styles.label}>
                {root.title}
              </span>
            </a>
          )
        }
      </nav>
    </header>
  );
};

export default Header;
