import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import Container from '../../components/Container';
import styles from './blogPost.module.scss';
import SEO from '../../components/seo';

const BreadCrumb = ({ title }) => (
  <div className={styles.breadcrumb}>
    <a href="/recipes">Recipes</a> 
    <span className={styles.breadcrumbSpacer}>{'>'}</span> 
    <span>{title}</span>
  </div>
);

const BlogPost = ({ data }) => {
  const post = data.markdownRemark
  const { title } = post.frontmatter;
  return (  
    <Layout>
      <SEO 
        title={title} 
        description={post.excerpt}
      />
      <article className={styles.article}>
        <Container>
          <BreadCrumb title={title} />          
          <h1 className={styles.title}>{title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </Container>
      </article>
    </Layout>
  );
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title,
      }
      excerpt
    }
  }
`
export default BlogPost;