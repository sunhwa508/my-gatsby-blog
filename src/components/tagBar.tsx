import React from 'react'
import Tag from './tag'
import styled from 'styled-components'

interface Props {
    tags: any;
    onTagSelect: (target: React.ChangeEvent<HTMLInputElement>) => void;
    marginTop?: number;
}
interface TagProps {
    name: string
}

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const TagBar = ({ tags, onTagSelect, marginTop }: Props) => {
    return (
        <Wrapper>
            {tags.map((tag: TagProps) => {
                return <Tag marginTop={marginTop} key={tag.name} tag={tag} onTagSelect={onTagSelect} />
            })}
        </Wrapper>
    )
}

export default TagBar