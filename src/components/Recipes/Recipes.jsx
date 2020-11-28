import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Panel from '../Panel';
import Container from '../Container';
import Heading from '../Heading';
import { Card, CardList } from '../Card';

const Recipes = () => {
  const { 
    allContentYaml: { 
      edges: [
        { 
          node: { items, title } 
        }
      ]
    } 
  } = useStaticQuery(graphql`
    query RecipesQuery {
      allContentYaml(filter: {contentId: {eq: "recipes"}}) {
        edges {
          node {
            items {
              title,
              description
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
                cta="View Recipe"
                description={description}
                link={`/`}
                // subtext={tags}
                title={title}
              />
            )
          }
        </CardList>
      </Container>
    </Panel>
  );
};

export default Recipes;
