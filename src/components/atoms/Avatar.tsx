import React from 'react'
import styled from 'styled-components'
import avatar from '../../assets/img/avatar.svg'

export const Avatar: React.FC = () => <AvatarImg src={avatar} alt="Avatar"/>

const AvatarImg = styled.img`
    width: 50px;
    height: 50px;
`