import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Resume from "../../components/Resume";
import Repos from "../../components/Repos";

const ResumePage = () => (
  <Layout>
    <SEO title="Resume" />
    <Resume />
    <Repos />
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

export default ResumePage;
