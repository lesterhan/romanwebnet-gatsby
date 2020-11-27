import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Panel from '../Panel';
import Container from '../Container';
import Heading from '../Heading';
import { Card, CardList } from '../Card';

const Repos = () => {
  const { 
    allContentYaml: { 
      edges: [
        { 
          node: { items, title } 
        }
      ]
    } 
  } = useStaticQuery(graphql`
    query ReposQuery {
      allContentYaml(filter: {contentId: {eq: "repos"}}) {
        edges {
          node {
            items {
              slug
              title
              description
              tags
            }
            title
          }
        }
      }
    }
  `);
  return (
    <Panel theme="light">
      <Container>
        <Heading element="h2" theme="dark" text={title}/>
        <CardList>
          {   
            items.map(({
              slug,
              title,
              description,
              tags
            }) => 
              <Card
                cta="View on Github"
                description={description}
                link={`https://github.com/groman00/${slug}`}
                subtext={tags}
                title={title}
              />
            )
          }
        </CardList>
      </Container>
    </Panel>
  );
};

export default Repos;
