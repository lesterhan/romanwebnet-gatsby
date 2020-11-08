import React from 'react';
import styles from './resume.module.scss';
import Panel from "../Panel";
import Container from '../Container';
import Heading from '../Heading';

const Resume = () => (
  <Panel theme="white">
    <Container>
      <Heading element="h2" text="Background"/>
      <p className={styles.bio}>
        Hello, my name is Greg Roman and I'm a software engineer based in Jersey City, NJ.  I have years of
        experience building modern, high performing websites and applications for nationally recognized brands. If you are looking for a new website or app for your business, please 
        contact me at <a title="Email" href="mailto:gregorymichaelroman@gmail.com">gregorymichaelroman@gmail.com</a> or follow me on Twitter <a href="https://twitter.com/romanwebnet" title="Twitter" target="_blank" rel="noopener noreferrer">@romanwebnet</a>.
      </p>
      <Heading element="h2" text="Skills"/>
      <div className={`${styles.skills} flex-columns`}>
        <div className="column">
          <h3 className="font-bold">Languages</h3>
          <ul>
            <li>JavaScript (ES5/ES6)</li>
            <li>CSS/Sass</li>
            <li>HTML</li>
            <li>PHP</li>
            <li>BrightScript</li>
          </ul>
        </div>
        <div className="column">
          <h3 className="font-bold">Frameworks</h3>
          <ul>
            <li>Vue</li>
            <li>Node</li>
            <li>Laravel</li>
            <li>React</li>
            <li>Backbone</li>
            <li>Bootstrap</li>
          </ul>
        </div>
        <div className="column">
          <h3 className="font-bold">Tools</h3>
          <ul>
            <li>Bash</li>
            <li>Git</li>
            <li>npm &amp; yarn</li>
            <li>Gulp &amp; Grunt</li>
            <li>Webpack</li>
            <li>Vuex &amp; Redux</li>
          </ul>
        </div>
        <div className="column">
          <h3 className="font-bold">Design</h3>
          <ul>
            <li>Sketch</li>
            <li>Photoshop</li>
            <li>After Effects</li>
            <li>Illustrator</li>
          </ul>
        </div>
      </div>
      <Heading element="h2" text="Experience"/>      
      <div className={`${styles.experience} list`}>
      <div className="list-item">
          <div className="list-item-left">
            <h4>Peloton Interactive Inc</h4>
            <h5>Senior Software Engineer</h5>
          </div>
          <div className="h5 list-item-right"><i>2020 - Current</i></div>
        </div>           
        <div className="list-item">
          <div className="list-item-left">
            <h4>Anheuser-Busch InBev - New York, NY</h4>
            <h5>Fullstack Tech Lead</h5>
            <p>
              Tech lead for B2B applications.  Responsible for Brazil-based engineering teams building applications with React and Spring Boot microservices.
            </p>
          </div>
          <div className="h5 list-item-right"><i>2019 - 2020</i></div>
        </div>                
        <div className="list-item">
          <div className="list-item-left">
            <h4>Newell Brands - Hoboken, NJ</h4>
            <h5>Frontend Tech Lead</h5>
            <p>
              Tech lead for CMS development team.  Responsible for a distributed team of frontend developers.
            </p>
          </div>
          <div className="h5 list-item-right"><i>2018 - 2019</i></div>
        </div>    
        <div className="list-item">
            <div className="list-item-left">
              <h4>Newell Brands - Hoboken, NJ</h4>
              <h5>Senior Developer, UI</h5>
              <p>
                Senior Developer for CMS development team. Contributed foundational code for custom Drupal platform.
              </p>
            </div>
            <div className="h5 list-item-right"><i>2018</i></div>
          </div>                        
        <div className="list-item">
          <div className="list-item-left">
            <h4>AOL/Oath - New York, NY</h4>
            <h5>Senior Software Engineer</h5>
            <p>
              Front-end engineer for AOL’s research and development team.  Responsible for building various web applications for client and server, as well as native applications for Roku&reg;.
            </p>
          </div>
          <div className="h5 list-item-right"><i>2014 - 2018</i></div>
        </div>
        <div className="list-item">
          <div className="list-item-left">
            <h4>AOL - Dulles, VA</h4>
            <h5>Software Engineer</h5>
            <p>
              Front-end engineer for AOL Money &amp; Finance websites: Daily Finance, AOL Jobs and AOL Real Estate.
            </p>
          </div>
          <div className="h5 list-item-right"><i>2011-2014</i></div>
        </div>
        <div className="list-item">
          <div className="list-item-left">
            <h4>LS Advertising - Mahwah, NJ</h4>
            <h5>Developer</h5>
            <p>
              Software developer, responsible for building "web-to-print" applications for customers, as well as internal reporting and administrative tools.
            </p>
          </div>
          <div className="h5 list-item-right"><i>2008-2011</i></div>
        </div>
      </div>
    </Container>
  </Panel>
);

export default Resume;
