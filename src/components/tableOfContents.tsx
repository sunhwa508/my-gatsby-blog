import React, { useMemo } from 'react';
import styled from 'styled-components';


const Toc = styled.ul`
  position:fixed;
  width: 20rem;
  left: calc(50% + 450px);
  top: 120px;
  max-height: 30vh;
  margin-left:20px;
  @media screen and (max-width: 1080px) {
        display:none;
    }
`

const Title = styled.h2`
margin-bottom: 10px;
`

const ToCElement = styled.li`
margin-left:10px;
list-style: none;
&:hover{
    color:white;
    background-color: gray;
}
`

const ToCLink = styled.a`
transition: .5s ease;
text-decoration:none;
color:black;
&:hover{
    color:white;
}

`

const InnerScroll = styled.div`
  scrollbar-width: thin;
  scrollbar-color: #367ee9 rgba(48, 113, 209, 0.3);
  overflow: hidden auto;
`;

type Props = {
    headings: any;
}
export default function TableOfContents({ headings }: Props) {
    return (
        <Toc>
            <Title>Table of contents</Title>
            <InnerScroll>
                {headings.map((heading: any) => {
                    if (heading.depth > 4) {
                        return <div />
                    }
                    return (
                        <ToCElement key={heading.value}>
                            <ToCLink
                                href={`#${heading.value.replace(/\s+/g, "-").toLowerCase()}`}
                            >
                                {heading.value}
                            </ToCLink>
                        </ToCElement>
                    )
                })}
            </InnerScroll>
        </Toc>
    )

}


