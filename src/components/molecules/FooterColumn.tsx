import React from 'react'
import styled from 'styled-components'
import youtube from '../../assets/img/youtube.png'
import instagram from '../../assets/img/instagram.png'
import facebook from '../../assets/img/facebook.png'


interface FooterColumnProps {
   name: string;
   links: string[];
   last?: boolean;
}

export const FooterColumn: React.FC<FooterColumnProps> = ({name, links, last}) => {
        return (
            <FooterColumnContainer>
                <FooterColumnName>{name}</FooterColumnName>
                {links.map((link, i) => <FooterColumnLink key={i}>{link}</FooterColumnLink>)}
                {last && 
                <FooterColumnSocial>
                    <FooterSocialLink src={facebook}/>        
                    <FooterSocialLink src={instagram}/>        
                    <FooterSocialLink src={youtube}/>        
                </FooterColumnSocial> 
                }
            </FooterColumnContainer> 
        );
}

const FooterColumnContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 100px;
`

const FooterColumnName = styled.h3`
    color: #272727;
    font-weight: 400;
    margin: 0;
`

const FooterColumnLink = styled.a`
    color: #939393;
    text-decoration: none;
    margin-top: 1em;
    cursor: pointer;

`

const FooterColumnSocial = styled.div`
    display: flex;
    margin-top: 50px;
    > img:first-child {
        margin-left: 0;
    }
`

const FooterSocialLink = styled.img`
    width: 25px;
    height: 25px;
    margin-left: 20px;
    cursor: pointer;
`