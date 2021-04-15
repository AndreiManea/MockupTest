import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/img/logo.png'

export const Logo: React.FC = () => <LogoImg src={logo} alt="Logo"/>

const LogoImg = styled.img`
    width: 200px;
    height: 110px;
    padding: 32px;
    cursor: pointer;

`