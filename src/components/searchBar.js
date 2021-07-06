import React from 'react'
import styled from 'styled-components'

const SearchDiv = styled.div`
    display:flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom:0.8em;
`;
const SearchInput = styled.input`
    width: 30%;
    padding: .25em .5em;
    border-radius: 10px;

`

const Label = styled.label`
    font-weight: bold;
    font-size:1.5em;
    display:flex;
    justify-content: center;
    align-items: center;
    margin-right:0.1em;
`;

export default function SearchBar({ query, onChange }) {
    console.log(query, onchange)
    return (
        <SearchDiv>
            <Label htmlFor="search">🔍</Label>
            <SearchInput
                placeholder="Search..."
                id="search"
                type="search"
                value={query}
                onChange={onChange}
            />
        </SearchDiv>
    )
}