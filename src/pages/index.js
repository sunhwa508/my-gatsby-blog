import React, { useState } from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SearchBar from '../components/searchBar'
import TagBar from '../components/tagBar'

const BlogLink = styled(Link)`
  text-decoration: none;
`
const BlogTitle = styled.h3`
  margin-bottom: 20px;
  color: #999090;
  font-size:1.2em;
`
const CountPosts = styled.h4`
  text-align: right;
`
const BlogDate = styled.h6`
  font-size: 0.9em;
  text-align: right;
  color: darkorange;
`
const ContentContainer = styled.div`
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1), 0 2px 2px rgba(0, 0, 0, 0.1),
    0 4px 4px rgba(0, 0, 0, 0.1), 0 8px 8px rgba(0, 0, 0, 0.1),
    0 16px 16px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 0.7rem;
  transform: translateY(0);
  transition: 0.5s;

  &:hover {
    transform: translateY(-5%);
  }
`
const ContentExcerpt = styled.p`
  color: #000;
`
export default ({ data }) => {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedTags, setSelectedTags] = useState([])
  const posts = data.allMarkdownRemark.edges

  function handleSearchChange({ target }) {
    setSearchQuery(target.value.toLowerCase())
  }

  const filteredPosts = posts.filter(({ node }) => {
    return (
      (node.frontmatter.title.toLowerCase().includes(searchQuery) ||
        node.frontmatter.description.toLowerCase().includes(searchQuery)) &&
      (selectedTags.length === 0 ||
        node.frontmatter.tags.some(tag => selectedTags.includes(tag)))
    )
  })

  const tags = data.tags.group
    .sort((a, b) => {
      if (a.totalCount === b.totalCount) return a.name > b.name ? 1 : -1
      return a.totalCount < b.totalCount ? 1 : -1
    })
    .map(tag => {
      return { ...tag, selected: selectedTags.includes(tag.name) }
    })

  function handleTagSelect({ target }) {
    setSelectedTags(prevTags => {
      if (prevTags.includes(target.value)) {
        return prevTags.filter(tag => target.value !== tag)
      } else {
        return [...prevTags, target.value]
      }
    })
  }

  return (
    <Layout>
      <SEO title="Home" />
      <SearchBar query={searchQuery} onChange={handleSearchChange} />
      <TagBar tags={tags} onTagSelect={handleTagSelect} />
      <div>
        <CountPosts>{data.allMarkdownRemark.totalCount} Posts</CountPosts>
        {filteredPosts.map(({ node }) => (
          <BlogLink key={node.id} to={node.fields.slug}>
            <ContentContainer key={node.id}>
              <BlogTitle>{node.frontmatter.title}</BlogTitle>
              <ContentExcerpt>{node.excerpt}</ContentExcerpt>
              <BlogDate>{node.frontmatter.date}</BlogDate>
            </ContentContainer>
          </BlogLink>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    tags: allMarkdownRemark {
      group(field: frontmatter___tags) {
        name: fieldValue
        totalCount
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          excerpt
          html
          id
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            description
            title
            tags
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
