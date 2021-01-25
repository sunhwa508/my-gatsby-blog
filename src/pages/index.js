import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogLink = styled(Link)`
  text-decoration: none;
`
const BlogTitle = styled.h3`
  margin-bottom: 20px;
  color: pink;
`
const CountPosts = styled.h4`
  text-align: right;
`
const BlogDate = styled.h6`
  font-size: 10px;
  text-align: right;
`
export default ({ data }) => {
  console.log("data", data)
  return (
    <Layout>
      <SEO title="Home" />
      <div>
        <h4>
          <span role="img">🦕</span>#FF0000 <span role="img">🦕</span>
        </h4>
        <CountPosts>{data.allMarkdownRemark.totalCount} Posts</CountPosts>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <BlogLink to={node.fields.slug}>
              <BlogTitle>{node.frontmatter.title}</BlogTitle>
            </BlogLink>
            <p>{node.excerpt}</p>
            <BlogDate>{node.frontmatter.date}</BlogDate>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          excerpt
          html
          id
          frontmatter {
            date
            description
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
