import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styled from 'styled-components'
import TableOfContents from '../components/tableOfContents'
interface Props {
  data: {
    markdownRemark: any
  }
}

const Container = styled.div`
position: absolute;
top:0;
height:100%;
right: calc((100vw - 1220px) / 2 * (-1));
`

export default ({ data }: Props) => {
  const tocItems = data.markdownRemark.tableOfContents
  const isTOCVisible = tocItems.length > 0;
  const [currentHeaderUrl, setCurrentHeaderUrl] = useState(undefined);
  const post = data.markdownRemark

  const HEADER_OFFSET_Y = 100;

  useEffect(() => {
    const handleScroll = () => {
      let aboveHeaderUrl;
      const currentOffsetY = window.pageYOffset;
      const headerElements = document.querySelectorAll('.anchor-header');
      for (const elem of headerElements as any) {
        const { top } = elem.getBoundingClientRect();
        const elemTop = top + currentOffsetY;
        const isLast = elem === headerElements[headerElements.length - 1];
        if (currentOffsetY < elemTop - HEADER_OFFSET_Y) {
          aboveHeaderUrl &&
            setCurrentHeaderUrl(aboveHeaderUrl.split(location.origin)[1]);
          !aboveHeaderUrl && setCurrentHeaderUrl(undefined);
          break;
        } else {
          isLast && setCurrentHeaderUrl(elem.href.split(location.origin)[1]);
          !isLast && (aboveHeaderUrl = elem.href);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Layout>
      <h1>{post.frontmatter.title}</h1>
      {isTOCVisible && (
        <Container>
          <TableOfContents
            items={tocItems}
            currentHeaderUrl={currentHeaderUrl}
          />
        </Container>
      )}
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
      tableOfContents
    }
  }
`
