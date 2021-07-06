import React from 'react'
import styled from 'styled-components'

const SearchInput = styled.input`
    width: 100%;
    padding: .25em .5em;
    border-radius: 10px;
    margin-bottom:1em;
`

const Label = styled.label`
    font-weight: bold;
    font-size:1em;
`;

export default function SearchBar({ query, onChange }) {
    return (
        <>
            <Label htmlFor="search">Search</Label>
            <SearchInput
                id="search"
                type="search"
                value={query}
                onChange={onChange}
            />
        </>
    )
}