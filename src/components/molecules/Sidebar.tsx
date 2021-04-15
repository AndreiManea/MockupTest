import React from 'react'
import styled from 'styled-components'
import bgImg from '../../assets/img/bg.svg'
import { Logo } from '../atoms/Logo'
import { SidebarLinks } from './SidebarLinks'




export const Sidebar: React.FC = () =>
 <SidebarContainer>
     <Logo/>
     <SidebarLinks/>
 </SidebarContainer>
 

const SidebarContainer = styled.div`
    display: flex;
    flex-direction: column;
    background: url(${bgImg});
    background-repeat: no-repeat;
    background-size: cover;
    flex: 0.2;
    height: 152vh;
`