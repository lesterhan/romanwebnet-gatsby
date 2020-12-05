import React from 'react';
import styles from './header.module.scss';
import Icon from '../Icon';
import Container from '../Container';

const links = [
  {
    root: {
      href: 'https://medium.com/@romanwebnet',
      title: 'Blog',
    },
    icon: {
      symbol: 'rss',
    }
  },
  {
    root: {
      href: 'https://twitter.com/romanwebnet',
      title: 'Twitter',
    },
    icon: {
      symbol: 'twitter',
    }
  },
  {
    root: {
      href: 'https://github.com/groman00',
      title: 'Github',
    },
    icon: {
      symbol: 'github',
    }
  },    
  {
    root: {
      href: 'https://www.linkedin.com/in/gregory-roman-8486485',
      title: 'LinkedIn',
    },
    icon: {
      symbol: 'linkedin',
    }
  }, 
  {
    root: {
      href: 'mailto:gregorymichaelroman@gmail.com',
      title: 'Email',
    },
    icon: {
      symbol: 'email',
    }
  },     
];

const HeaderLink = ({ root, icon }) => (
  <a 
    className={styles.link} 
    target="_blank" 
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

const CompactNav = () => (
  <>
    <div class={styles.compactLogo}>
      <h3><a href="/" title="home">Romanwebnet.com</a></h3>
    </div>
    <div class={styles.compactLinks}>
      {renderLinks()}
    </div>
  </>
);

const Header = ({ theme = 'compact' }) => (
  <header className={styles[theme]}>
    <Container element="nav" className={styles.nav} padded={false}>
      { theme === 'compact' ? <CompactNav /> : renderLinks()}
    </Container>
  </header>
);

export default Header;
