import React from 'react';
import styles from './footer.module.scss';
import Panel from '../Panel';
import Container from '../Container';

const Footer = () => (
  <Panel theme="dark">
    <Container element="footer" className={styles.footer}>
      {new Date().getFullYear()} Romanwebnet.com. All rights reserved.
      <button className={styles.anchor} style={{ cursor: 'pointer' }} onClick={() => { window.scroll(0, 0);return false; }}>Back to top</button>
    </Container>
  </Panel>
);

export default Footer;
