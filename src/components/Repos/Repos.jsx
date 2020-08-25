import React from 'react';
import Panel from '../Panel';
import Container from '../Container';
import Heading from '../Heading';
import styles from './repos.module.scss';
import data from './repos.yml';

const Repos = () => (
  <Panel theme="light">
    <Container>
      <Heading element="h2" theme="dark" text={data.title}/>
      <div className="list">
        {   
          data.content.map(({
            slug,
            title,
            description,
            tags
          }) => 
            <div className={`${styles.repo} list-item`}>
              <div className="list-item-left">
                <h4 className="title">
                  <a target="_blank" rel="noopener noreferrer" href={`https://github.com/groman00/${slug}`} title={title}>{title}</a>
                </h4>
                <p className="description">{description}</p>
                <h5 className="techs">{tags}</h5>
              </div>
              <h5 className={`${styles.linkout} list-item-right`}>
                <a target="_blank" rel="noopener noreferrer" href={`https://github.com/groman00/${slug}`} title="View on Github">View on Github</a>
              </h5>
            </div>
          )
        }
      </div>
    </Container>
  </Panel>
);

export default Repos;
