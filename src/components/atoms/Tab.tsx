import React from 'react'
import styled from 'styled-components'

interface TabProps {
    name: string;
    active?: boolean;
    first?: boolean;
}

export const Tab: React.FC<TabProps> = ({name, active, first}) => {
    

        return (
            <TabName style={{color: active ? '#D0722A' : '#272727',
                             borderBottom: active ? '5px solid #D0722A' : " ",
                             marginLeft: first ? '0' : "25px"}}>{name}</TabName>
        );
}

const TabName = styled.p`
    padding-bottom: 20px;
    margin-bottom: -4px;
    margin-left: 25px;
    cursor: pointer;
` 