import React from 'react'
import home from '../../assets/img/home.svg'
import events from '../../assets/img/events.svg'
import people from '../../assets/img/people.svg'
import { SidebarLink } from '../atoms/SidebarLink'

export const SidebarLinks: React.FC = () => {
        return (
            <>
            <SidebarLink name="Home" icon={home} />
            <SidebarLink active name="Events" icon={events} />
            <SidebarLink name="People" icon={people} /> 
            </>
        );
}