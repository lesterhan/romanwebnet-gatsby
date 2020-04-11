import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Panel from "../components/Panel";
import Container from '../components/Container';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Panel theme="white">
      <Container>
        <h2 className="panel-heading bb-gray-lightest">Background</h2>
        <p className="bio">
          Hello, my name is Greg Roman and I'm a software engineer based in Jersey City, NJ.  I have a decade's worth of
          experience building modern, high performing websites and applications for nationally recognized brands.  I specialize in
          full-stack javascript applications, and also have experience working with PHP, Java and Roku&reg; channel development in Brightscript.  Please feel free
          to contact me at <a title="Email" href="mailto:gregorymichaelroman@gmail.com">gregorymichaelroman@gmail.com</a> or follow me on Twitter <a href="https://twitter.com/romanwebnet" title="Twitter" target="_blank" rel="noopener noreferrer">@romanwebnet</a>.
        </p>
        <h2 className="panel-heading bb-gray-lightest">Skills</h2>
        <div className="skills flex-columns">
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
        <h2 className="panel-heading bb-gray-lightest">Experience</h2>
        <div className="experience list">
          <div className="list-item">
            <div className="list-item-left">
              <h4>Anheuser-Busch InBev - New York, NY</h4>
              <h5>Fullstack Tech Lead</h5>
              <p>
                Technical lead for B2B applications.  Responsible for teams building applications with React and Spring Boot microservices.
              </p>
            </div>
            <div className="h5 list-item-right"><i>2019 - present</i></div>
          </div>                
          <div className="list-item">
            <div className="list-item-left">
              <h4>Newell Brands - Hoboken, NJ</h4>
              <h5>Frontend Tech Lead</h5>
              <p>
                Technical lead for CMS development team.  Responsible for a distributed team of frontend developers.
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
                Front-end engineer for AOL’s research and development team, AOL Alpha.  Responsible for building various web applications for client and server, as well as native applications for Roku&reg;.
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
    <Panel theme="light">
      <Container>
        <h2 className="panel-heading bb-gray-dark">Pinned Repositories</h2>
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

    {/* 
    https://www.gatsbyjs.org/docs/adding-analytics/
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-112401659-1"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'UA-112401659-1');
    </script>     
    */}
  </Layout>
)

export default IndexPage
