import React from 'react'
import styled from 'styled-components'
import { Avatar } from '../atoms/Avatar'
import { Button } from '../atoms/Button'
import { Notifications } from '../atoms/Notifications'
import { Searchbar } from '../atoms/Searchbar'


export const Header: React.FC = () =>
 <HeaderContainer>
     <HeaderLeft>
        <Searchbar/>
     </HeaderLeft>
     <HeaderRight>
        <Button name="Create Event"/>
        <Notifications/>
        <Avatar/>
     </HeaderRight>
 </HeaderContainer>
 

const HeaderContainer = styled.div`
    display: flex;
    height: 72px;
    justify-content: space-between;
    background: white;
`

const HeaderLeft = styled.div`
    display: flex;
    align-items: center;
`

const HeaderRight = styled.div`
    display: flex;
    align-items: center;
    margin-right: 35px;
    justify-content: space-evenly;
    width: 300px;
`