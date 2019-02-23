import React from "react";
import { StaticQuery, graphql } from "gatsby";

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query AuthQuery {
        allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/auth/" } }) {
          edges {
            node {
              frontmatter {
                title
                date
                path
              }
              html
            }
          }
        }
      }
    `}
    render={data => (
      <>
        {data.allMarkdownRemark.edges.map(({ node }, i) => (
          <div className="card" key={node.frontmatter.title}>
            <h1>{node.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: node.html }} />
          </div>
        ))}
      </>
    )}
  />
);