import React from 'react'
import styled from 'styled-components'
import { Tab } from '../atoms/Tab';



export const Tabs: React.FC = () => {
        return (
            <TabsContainer>
                <Tab name="All Events" first active/>
                <Tab name="I’m going To"/>
                <Tab name="I'm hosting"/>
                <Tab name="I went to"/>
            </TabsContainer>
        );
}

const TabsContainer = styled.div`
    display: flex;
    width: 100%;
    border-bottom: 3px solid #F0DACD
;
`