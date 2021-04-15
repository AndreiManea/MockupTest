import React from 'react'
import styled from 'styled-components'
import { Event } from './Event';
import Event1 from '../../assets/img/Event1.png'
import Event2 from '../../assets/img/Event2.png'
import Event3 from '../../assets/img/Event3.png'
import Author from '../../assets/img/Author.png'


export const Events: React.FC = () => {
        return (
                <EventsContainer>
                    <Event 
                    title="English Speaking Anxiety - Problems/Solutions 1st meeting"
                    eventImg={Event1}
                    author="Emilia Nilson"
                    time="Sep 13th, 10:00 am"
                    authorImg={Author}
                    type="English Lesson"
                    />
                    <Event 
                    title="English Speaking Anxiety - Problems/Solutions 1st meeting"
                    eventImg={Event2}
                    author="Emilia Nilson"
                    time="Sep 13th, 10:00 am"
                    authorImg={Author}
                    type="English Lesson"
                    />
                    <Event 
                    title="English Speaking Anxiety - Problems/Solutions 1st meeting"
                    eventImg={Event3}
                    author="Emilia Nilson"
                    time="Sep 13th, 10:00 am"
                    authorImg={Author}
                    type="English Lesson"
                    />
                    
                </EventsContainer>
        );
}

const EventsContainer = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
`;

