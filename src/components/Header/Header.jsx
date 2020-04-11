import React from 'react';
import styles from './header.module.scss';
import Icon from '../Icon';

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

const Header = () => (
  <header>
    <nav className={`${styles.root} container`}>
      {
        links.map(link => 
          <HeaderLink {...link} />
        )
      }
    </nav>
  </header>
);

export default Header
