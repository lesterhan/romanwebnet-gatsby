import React from 'react';
import styles from './repos.module.scss';
import Panel from '../Panel';
import Container from '../Container';
import Heading from '../Heading';

const Repos = () => (
  <Panel theme="light">
    <Container>
      <Heading element="h2" theme="dark" text="Pinned Repositories"/>
      <div className="list repos">
        <div className="list-item repo">
          <div className="list-item-left">
            <h4 className="title">
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/groman00/vue-pwa-starter" title="Vue PWA Starter">Vue PWA Starter</a>
            </h4>
            <p className="description">A simple boilerplate to start building progressive web apps with Vue js.</p>
            <h5 className="techs">Javascript, Vue, Progressive Web Apps, Webpack</h5>
          </div>
          <h5 className="list-item-right">
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/groman00/vue-pwa-starter" title="View on Github">View on Github</a>
          </h5>
        </div>
        <div className="list-item repo">
          <div className="list-item-left">
            <h4 className="title">
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/groman00/vue-music-box" title="Vue Music Box">Vue Music Box</a>
            </h4>
            <p className="description">A music box built with Laravel and Vue.js.</p>
            <h5 className="techs">Javascript, Vue, Laravel</h5>
          </div>
          <h5 className="list-item-right">
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/groman00/vue-music-box" title="View on Github">View on Github</a>
          </h5>
        </div>
        <div className="list-item repo">
          <div className="list-item-left">
            <h4 className="title">
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/groman00/vue-keyboard" title="Vue Keyboard">Vue Keyboard</a>
            </h4>
            <p className="description">Virtual keyboard using Vue js and the Web Audio API.</p>
            <h5 className="techs">Javascript, Vue, Web Audio API</h5>
          </div>
          <h5 className="list-item-right">
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/groman00/vue-keyboard" title="View on Github">View on Github</a>
          </h5>
        </div>
        <div className="list-item repo">
          <div className="list-item-left">
            <h4 className="title">
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/groman00/roku-remote" title="Vue PWA Starter">Roku Remote</a>
            </h4>
            <p className="description">A web version of the Roku&reg; remote control.</p>
            <h5 className="techs">Javascript, Node, Express, Socket.io</h5>
          </div>
          <h5 className="list-item-right">
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/groman00/roku-remote" title="View on Github">View on Github</a>
          </h5>
        </div>
      </div>
    </Container>
  </Panel>
);

export default Repos;
