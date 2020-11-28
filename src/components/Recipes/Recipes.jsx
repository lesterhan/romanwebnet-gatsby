import React from 'react';
import { useStaticQuery } from 'gatsby';
import Panel from '../Panel';
import Container from '../Container';
import Heading from '../Heading';
import { Card, CardList } from '../Card';

const Recipes = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: {frontmatter: {categories: {in: "Recipes"}}}) {
        totalCount
        edges {
          node {
            id
            frontmatter {
              title
              date(formatString: "DD MMMM, YYYY")
            }
            excerpt
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  return (
    <Panel theme="light">
      <Container>
        <Heading element="h2" theme="dark" text="Recipes" />
        <CardList>
          {   
            data.allMarkdownRemark.edges.map(({ node }) => (
              <Card
                key={node.id}
                cta="View Recipe"
                description={node.excerpt}
                link={node.fields.slug}
                // subtext={tags}
                title={node.frontmatter.title}
              />
            )
            )}
        </CardList>
      </Container>
    </Panel>
  );
};

export default Recipes;
