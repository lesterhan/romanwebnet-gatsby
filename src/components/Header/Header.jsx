import React from 'react';
import styles from './header.module.scss';
import Icon from '../Icon';
import Container from '../Container';
import links from './links';

const HeaderLink = ({ root, icon }) => (
  <a 
    className={styles.link} 
    target={`${root.ext ? '_blank': '_self'}`} 
    rel="noopener noreferrer"
    {...root}
  >
    <Icon {...icon} />
  </a>
);

const renderLinks = () => (
  links.map((link, key) => 
    <HeaderLink {...link} key={key} />
  )
);

const Header = ({ theme = 'compact' }) => (
  <header className={styles[theme]}>
    <div className={styles.logo}>
      {/* Todo: Make this h1 on home page. */}
      <h5 className={styles.logoText}><a className="light" href="/" title="home">Romanwebnet.com</a></h5>
    </div>    
    <nav className={styles.nav}>
      { renderLinks() }
    </nav>
  </header>
);

export default Header;
