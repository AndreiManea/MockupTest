import React from 'react'
import styled from 'styled-components'
import notifications from '../../assets/img/notifications.svg'

export const Notifications: React.FC = () => <NotificationsImg src={notifications} alt="Notifications"/>

const NotificationsImg = styled.img`
    width: 20px;
    height: 20px;
`