import React from 'react'
import styled from 'styled-components';

interface Props {
    name: string;
}

export const Button: React.FC<Props> = ({name}) => {
        return (
        <ButtonContainer>{name}</ButtonContainer>
        );
}

const ButtonContainer = styled.button`
    background: #00583D;
    border-radius: 40px;
    color: white;
    outline: none;
    border: none;
    padding: 10px 32px;
    height: 40px;
    cursor: pointer;
`