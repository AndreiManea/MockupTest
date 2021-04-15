import React from 'react'
import styled from 'styled-components'
import { Events } from './Events';
import { Filters } from './Filters';
import { Tabs } from './Tabs';



export const Dashboard: React.FC = () => {
        return (
            <DashboardContainer>
                <DashboardTitle>Events</DashboardTitle>
                <Tabs/>
                <Filters/>
                <Events/>
            </DashboardContainer>
        );
}

const DashboardContainer = styled.div`
    padding: 30px 65px;
`
const DashboardTitle = styled.h1`
    font-size: 32px;
    font-weight: normal;
    margin: 0;
`