import React from 'react';
import styles from './header.module.scss';
import Icon from '../Icon';
import links, { Link } from './links';

const HeaderLink = ({ root, children }) => (
  <a className={styles.link} rel="noopener noreferrer" {...root}>
    {children}
  </a>
);

const Header: React.FC<{ theme: string }> = ({ theme = 'default' }) => {
  const LogoTag = theme === 'home' ? 'h1' : 'h3';
  return (
    <header className={styles[theme]}>
      <div className={styles.logo}>
        <LogoTag className={`h5 ${styles.logoText}`}>
          <a className="light" href="/" title="home">
            Romanwebnet.com
          </a>
        </LogoTag>
      </div>
      <nav className={styles.nav}>
        {links.map(({ root, icon }: Record<string, {}>) => (
          <HeaderLink root={root} key={icon}>
            <Icon {...icon} />
            {theme === 'home' && (
              <>
                <span>{root.title}</span>
                <Icon className={styles.chevron} symbol="chevron" />
              </>
            )}
          </HeaderLink>
        ))}
      </nav>
    </header>
  );
};

export default Header;
