import React from 'react'
import styled from 'styled-components'
import { Button } from '../atoms/Button';

interface EventProps {
    title: string;
    eventImg: string;
    type: string;
    time: string;
    author: string;
    authorImg: string;
}

export const Event: React.FC<EventProps> = ({title, eventImg, type, time, author, authorImg}) => {
    

        return (
            <EventContainer>
                <EventImg src={eventImg}/>
                <EventDetails>
                    <EventTop>
                        <EventType>{type}</EventType>
                        <EventTime>• {time}</EventTime>
                    </EventTop>
                    <EventTitle>{title}</EventTitle>
                    <EventBottom>
                        <EventAuthor>
                            <AuthorImg src={authorImg}/>
                            <AuthorName>{author}</AuthorName>
                        </EventAuthor>
                        <Button name="I will attend"/>
                    </EventBottom>
                </EventDetails>
            </EventContainer>   
        );
}

const EventContainer = styled.div`
    display: flex;
    height: 270px;  
    background: white;
    border-radius: 12px;
    margin-top: 10px;
`

const EventImg = styled.img`
    flex: 0.3;
    object-fit: cover;
`

const EventDetails = styled.div`
    flex: 0.7;
    display: flex;
    flex-direction: column;
    padding-top: 25px;
    margin-left: 25px;
`

const EventTop = styled.div`
    display: flex;
`
const EventBottom = styled.div`
    display: flex;
`

const EventType = styled.p`
    color: #267059;
`

const EventTime = styled.p`
    color: #939393;
    margin-left: 20px;  
`

const EventTitle = styled.h1`
    color: #272727;
    font-weight: bold;
    width: 70%;
`
const EventAuthor = styled.div`
    flex: 0.9;
    display: flex;
    align-items: center;
`

const AuthorImg = styled.img`
    height: 35px;
    width: 35px;
`

const AuthorName = styled.p`
    color: #272727;
    margin-left: 15px;
`