import React, { useState } from "react"
import { graphql, Link, PageProps } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SearchBar from '../components/searchBar'
import TagBar from '../components/tagBar'

interface Props {
  data: {
    tags: {
      allMarkdownRemark: any
      group: any
    }
    allMarkdownRemark: any
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
}

interface Data {
  target: any;
  name: any;
  tag: any;
  totalCount: number;
}

const BlogLink = styled(Link)`
  text-decoration: none;
`
const BlogTitle = styled.h3`
  margin-bottom: 20px;
  color: #999090;
`
const CountPosts = styled.h4`
  text-align: right;
`
const BlogDate = styled.h6`
  font-size: 1em;
  text-align: right;
  color: darkorange;
`
const ContentContainer = styled.div`
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1), 0 2px 2px rgba(0, 0, 0, 0.1),
    0 4px 4px rgba(0, 0, 0, 0.1), 0 8px 8px rgba(0, 0, 0, 0.1),
    0 16px 16px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  margin-bottom: 1rem;
  border-radius: 0.7rem;
  border:3px dotted transparent;
  transition: 0.5s;

  &:hover {
    border:3px dotted yellowgreen;
  }
`
const ContentExcerpt = styled.p`
  color: #000;
`
const Index = ({ data }: Props) => {
  const [searchQuery, setSearchQuery] = useState<string>("")
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const posts = data.allMarkdownRemark.edges

  function handleSearchChange({ target }: Data) {
    setSearchQuery(target.value.toLowerCase())
  }

  const filteredPosts = posts.filter(({ node }: any) => {
    return (
      (node.frontmatter.title.toLowerCase().includes(searchQuery) ||
        node.frontmatter.description.toLowerCase().includes(searchQuery)) &&
      (selectedTags.length === 0 ||
        node.frontmatter.tags.some((tag: any) => selectedTags.includes(tag)))
    )
  })

  const tags = data.tags.group
    .sort((a: Data, b: Data) => {
      if (a.totalCount === b.totalCount) return a.name > b.name ? 1 : -1
      return a.totalCount < b.totalCount ? 1 : -1
    })
    .map((tag: Data) => {
      return { ...tag, selected: selectedTags.includes(tag.name) }
    })

  function handleTagSelect({ target }: Data) {
    setSelectedTags((prevTags: any) => {
      if (prevTags.includes(target.value)) {
        return prevTags.filter((tag: Data) => target.value !== tag)
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
        <CountPosts>{data.allMarkdownRemark.totalCount} Posts </CountPosts>
        {
          filteredPosts.map(({ node }: any) => (
            <BlogLink key={node.id} to={node.fields.slug} >
              <ContentContainer key={node.id} >
                <BlogTitle>{node.frontmatter.title} </BlogTitle>
                < ContentExcerpt > {node.excerpt} </ContentExcerpt>
                < BlogDate > {node.frontmatter.date} </BlogDate>
              </ContentContainer>
            </BlogLink>
          ))
        }
      </div>
    </Layout>
  )
}

export default Index;

export const query = graphql`
      query {
        tags: allMarkdownRemark {
        group(field: frontmatter___tags) {
        name: fieldValue
      totalCount
      }
    }
      allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC }) {
        totalCount
      edges {
        node {
        excerpt
          html
      id
      frontmatter {
        date(formatString: "YYYY/MM/DD")
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
