import React, { useMemo } from 'react';
import styled from 'styled-components';

const Contents = styled.div`
    ul {
      list-style: none;
      margin-left: 20px;
      margin-bottom: 0px;
    }
    ul > li {
      line-height: 1.5rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    ul > li a.isCurrent {
      font-size: 15px;
      color: gray;
      font-weight: 600;
      
    } 
    a{
        text-decoration:none;
        color:#000;
        &hover{
            color:gray;
        }
        & .anchor {
            fill: "red";
          }
        
    }
`;
const Title = styled.h3`
    margin-bottom: 15px;
    margin-left: 20px;
    text-decoration:none;
`;
const Nav = styled.nav`
  margin-top: 80px;
  width: calc((100vw - 720px) / 2 - 50px);
  display: none;
  @media screen and (min-width: 1200px) {
    position: sticky;
    display: block;
    right:0;
    max-width: 360px;
    word-break: break-word;
    max-height: calc(100vh - 200px);
    font-size: 14px;
  }
 
`;
type Props = {
    items: any;
    currentHeaderUrl: any;
}
export default function TableOfContents({ items, currentHeaderUrl }: Props) {
    console.log("currentHeaderUrl", currentHeaderUrl)
    const replaceItems = useMemo(() => {
        if (currentHeaderUrl) {
            return items.replace(
                `"${currentHeaderUrl}"`,
                `"${currentHeaderUrl}"`
            );
        } else {
            return items;
        }
    }, [currentHeaderUrl]);
    return items ? (
        <Nav>
            <Title>TABLE OF CONTENTS</Title>
            <Contents
                dangerouslySetInnerHTML={{ __html: replaceItems }}
            />
        </Nav>
    ) : null;
}