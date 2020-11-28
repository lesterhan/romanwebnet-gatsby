import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Recipes from "../../components/Recipes"
import { NavSpacer } from '../../components/Header';

const RecipesPage = () => (
  <Layout>
    <SEO title="Recipes" />
    <NavSpacer />
    <Recipes />
    {/* <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
    {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <a href={node.fields.slug}>{node.excerpt}</a>
          </div>
        )
      )
    }     */}
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
);

export default RecipesPage;
