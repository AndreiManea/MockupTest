import React from 'react'
import styled from 'styled-components';

interface Props {
    name: string;
    icon: string;
    active?: boolean;
}

export const SidebarLink: React.FC<Props> = ({name, icon, active}) => {
        return (
        <SidebarLinkContainer style={{fontWeight: active ? 'bold' : 'normal'}}>
            <img src={icon}/>
            <p style={{borderBottom: active ? '2px solid white' : 'none'}}>{name}</p>
        </SidebarLinkContainer>
        );
}

const SidebarLinkContainer = styled.div`
    display: flex;
    align-items: center;
    padding-left: 25px;
    color: white;
    cursor: pointer;
    > img {
        width: 20px;
        height: 20px;
        margin-right: 10px;
    }

    >p{
        font-size: 1.3em;
    }
`