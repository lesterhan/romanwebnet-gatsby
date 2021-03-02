/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

/*
  getHeadComponents: [Function: getHeadComponents],
  replaceHeadComponents: [Function: replaceHeadComponents],
  getPreBodyComponents: [Function: getPreBodyComponents],
  replacePreBodyComponents: [Function: replacePreBodyComponents],
  getPostBodyComponents: [Function: getPostBodyComponents],
  replacePostBodyComponents: [Function: replacePostBodyComponents],
  pathname: '/404.html',
  pathPrefix: ''
*/
exports.onPreRenderHTML = ({
  // getHeadComponents,
  // replaceHeadComponents,
  replacePostBodyComponents,
}) => {
  // Remove all added scripts
  replacePostBodyComponents([]);
};
