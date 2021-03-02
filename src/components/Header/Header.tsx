import React from 'react';
import styles from './header.module.scss';
import Icon from '../Icon';
import links, { LinkItem } from './links';

interface HeaderLinkProps {
  link: LinkItem;
  theme?: string;
}

const HeaderLink: React.FC<HeaderLinkProps> = ({
  link: { root, icon },
  theme,
}) => (
  <a className={styles.link} rel="noopener noreferrer" {...root}>
    <Icon {...icon} />
    {theme === 'home' && (
      <>
        <span>{root.title}</span>
        <Icon className={styles.chevron} symbol="chevron" />
      </>
    )}
  </a>
);

const Header: React.FC<{ theme?: string }> = ({ theme = 'default' }) => {
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
        {links.map((link) => (
          <HeaderLink key={link.icon.symbol} link={link} theme={theme} />
        ))}
      </nav>
    </header>
  );
};

export default Header;
