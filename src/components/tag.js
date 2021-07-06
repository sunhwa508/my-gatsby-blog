import React from "react"
import styled from 'styled-components'

const TagStyles = styled.input`
    display:flex;
    width:100%;
    padding:10px;
    opacity: 0;
    position: absolute;
    left: -99999px;
`;

const TagSpan = styled.span`
    font-size:20px;
    border-right:1px solid black;
    padding:5px;
    border-radius: 8px;
    background-color: ${props => props.onTagSelect ? "goldenrod" : "white"};
    color: ${props => props.onTagSelect ? "white" : "black"};
`;
const TagCount = styled.div`
    font-size:20px;
    padding:0 10px;
`;
const TagLabel = styled.label`
    display:flex;
    border:0.8px solid black;
    align-items: center;
    margin: 0 10px;
    border-radius: 8px;
`;

export default function Tag({ tag, onTagSelect, marginTop = 10 }) {
    return (
        <>
            {onTagSelect && (
                <TagStyles
                    type="checkbox"
                    checked={tag.selected}
                    onChange={onTagSelect}
                    id={`tag-${tag.name}`}
                    value={tag.name}
                />
            )}
            <TagLabel
                htmlFor={onTagSelect && `tag-${tag.name}`}
                style={{ marginTop: marginTop }}
            >
                <TagSpan onTagSelect={tag.selected}>{tag.name}</TagSpan>
                {tag.totalCount && <TagCount>{tag.totalCount}</TagCount>}
            </TagLabel>
        </>
    )
}

