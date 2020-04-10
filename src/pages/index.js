import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="panel-scroller">
      <section className="panel">
        <nav className="nav container">
          <a className="nav-item" href="https://medium.com/@romanwebnet" title="Blog" target="_blank" rel="noopener noreferrer">
            <svg className="icon"><use xlinkHref="#icon-rss"></use></svg>
          </a>
          <a className="nav-item" href="https://twitter.com/romanwebnet" title="Twitter" target="_blank" rel="noopener noreferrer">
            <svg className="icon"><use xlinkHref="#icon-twitter"></use></svg>
          </a>
          <a className="nav-item" href="https://github.com/groman00" title="Github" target="_blank" rel="noopener noreferrer">
            <svg className="icon"><use xlinkHref="#icon-github"></use></svg>
          </a>
          <a className="nav-item" href="https://www.linkedin.com/in/gregory-roman-8486485" title="LinkedIn" target="_blank" rel="noopener noreferrer">
            <svg className="icon"><use xlinkHref="#icon-linkedin"></use></svg>
          </a>
          <a className="nav-item" href="mailto:gregorymichaelroman@gmail.com" title="Email">
            <svg className="icon"><use xlinkHref="#icon-email"></use></svg>
          </a>
        </nav>
        <div className="home-page">
          <div className="home-blurb">
            <h1><b>G</b>regory <b>Roman</b></h1>
            <h4><b>S</b>oftware <b>E</b>ngineer</h4>
          </div>
          <h6 className="contact-info">Jersey City, NJ 07302 | gregorymichaelroman@gmail.com</h6>
          <div className="arrow-down">
            <svg className="icon bounce"><use xlinkHref="#icon-chevron-down"></use></svg>
          </div>
        </div>        
      </section>
      <section className="panel bg-white">
        <div className="container">
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
        </div>
      </section>
      <section className="panel bg-gray-lightest">
        <div className="container">
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
        </div>
      </section>
      <section className="panel bg-gray-darker">
        <footer className="footer container">
          &copy;2019 Romanwebnet.com. All rights reserved.
          <button className="fg-white back-to-top" style={{ cursor: 'pointer' }} onClick={() => { window.scroll(0, 0);return false; }}>Back to top</button>
        </footer>
      </section>
    </div>
    <div className="hide">
      <svg xmlns="http://www.w3.org/2000/svg">
        <symbol id="icon-github" viewBox="0 0 1792 1792"><g fill="currentColor"><path d="M1664 896q0 251-146.5 451.5t-378.5 277.5q-27 5-39.5-7t-12.5-30v-211q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-121-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-86-13.5q-44 113-7 204-79 85-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-40 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 89t.5 54q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"/></g></symbol>
        <symbol id="icon-soundcloud" viewBox="0 0 1792 1792"><g fill="currentColor"><path d="M528 1372l16-241-16-523q-1-10-7.5-17t-16.5-7q-9 0-16 7t-7 17l-14 523 14 241q1 10 7.5 16.5t15.5 6.5q22 0 24-23zm296-29l11-211-12-586q0-16-13-24-8-5-16-5t-16 5q-13 8-13 24l-1 6-10 579q0 1 11 236v1q0 10 6 17 9 11 23 11 11 0 20-9 9-7 9-20zm-1045-340l20 128-20 126q-2 9-9 9t-9-9l-17-126 17-128q2-9 9-9t9 9zm86-79l26 207-26 203q-2 9-10 9-9 0-9-10l-23-202 23-207q0-9 9-9 8 0 10 9zm280 453zm-188-491l25 245-25 237q0 11-11 11-10 0-12-11l-21-237 21-245q2-12 12-12 11 0 11 12zm94-7l23 252-23 244q-2 13-14 13-13 0-13-13l-21-244 21-252q0-13 13-13 12 0 14 13zm94 18l21 234-21 246q-2 16-16 16-6 0-10.5-4.5t-4.5-11.5l-20-246 20-234q0-6 4.5-10.5t10.5-4.5q14 0 16 15zm383 475zm-289-621l21 380-21 246q0 7-5 12.5t-12 5.5q-16 0-18-18l-18-246 18-380q2-18 18-18 7 0 12 5.5t5 12.5zm94-86l19 468-19 244q0 8-5.5 13.5t-13.5 5.5q-18 0-20-19l-16-244 16-468q2-19 20-19 8 0 13.5 5.5t5.5 13.5zm98-40l18 506-18 242q-2 21-22 21-19 0-21-21l-16-242 16-506q0-9 6.5-15.5t14.5-6.5q9 0 15 6.5t7 15.5zm392 742zm-198-746l15 510-15 239q0 10-7.5 17.5t-17.5 7.5-17-7-8-18l-14-239 14-510q0-11 7.5-18t17.5-7 17.5 7 7.5 18zm99 19l14 492-14 236q0 11-8 19t-19 8-19-8-9-19l-12-236 12-492q1-12 9-20t19-8 18.5 8 8.5 20zm212 492l-14 231q0 13-9 22t-22 9-22-9-10-22l-6-114-6-117 12-636v-3q2-15 12-24 9-7 20-7 8 0 15 5 14 8 16 26zm1112-19q0 117-83 199.5t-200 82.5h-786q-13-2-22-11t-9-22v-899q0-23 28-33 85-34 181-34 195 0 338 131.5t160 323.5q53-22 110-22 117 0 200 83t83 201z"/></g></symbol>
        <symbol id="icon-linkedin" viewBox="0 0 1792 1792"><g fill="currentColor"><path d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z"/></g></symbol>
        <symbol id="icon-email" viewBox="0 0 1792 1792"><g fill="currentColor"><path d="M1664 1504v-768q-32 36-69 66-268 206-426 338-51 43-83 67t-86.5 48.5-102.5 24.5h-2q-48 0-102.5-24.5t-86.5-48.5-83-67q-158-132-426-338-37-30-69-66v768q0 13 9.5 22.5t22.5 9.5h1472q13 0 22.5-9.5t9.5-22.5zm0-1051v-24.5l-.5-13-3-12.5-5.5-9-9-7.5-14-2.5h-1472q-13 0-22.5 9.5t-9.5 22.5q0 168 147 284 193 152 401 317 6 5 35 29.5t46 37.5 44.5 31.5 50.5 27.5 43 9h2q20 0 43-9t50.5-27.5 44.5-31.5 46-37.5 35-29.5q208-165 401-317 54-43 100.5-115.5t46.5-131.5zm128-37v1088q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-1088q0-66 47-113t113-47h1472q66 0 113 47t47 113z"/></g></symbol>
        <symbol id="icon-chevron-down" viewBox="0 0 1792 1792"><g fill="currentColor"><path d="M1683 808l-742 741q-19 19-45 19t-45-19l-742-741q-19-19-19-45.5t19-45.5l166-165q19-19 45-19t45 19l531 531 531-531q19-19 45-19t45 19l166 165q19 19 19 45.5t-19 45.5z"/></g></symbol>
        <symbol id="icon-twitter" viewBox="0 0 1792 1792"><g fill="currentColor"><path d="M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z"/></g></symbol>
        <symbol id="icon-rss" viewBox="0 0 1792 1792"><g fill="currentColor"><path d="M576 1344q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm512 123q2 28-17 48-18 21-47 21h-135q-25 0-43-16.5t-20-41.5q-22-229-184.5-391.5t-391.5-184.5q-25-2-41.5-20t-16.5-43v-135q0-29 21-47 17-17 43-17h5q160 13 306 80.5t259 181.5q114 113 181.5 259t80.5 306zm512 2q2 27-18 47-18 20-46 20h-143q-26 0-44.5-17.5t-19.5-42.5q-12-215-101-408.5t-231.5-336-336-231.5-408.5-102q-25-1-42.5-19.5t-17.5-43.5v-143q0-28 20-46 18-18 44-18h3q262 13 501.5 120t425.5 294q187 186 294 425.5t120 501.5z"/></g></symbol>
      </svg>
    </div>

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
