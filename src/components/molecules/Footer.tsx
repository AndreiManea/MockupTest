import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/img/logoFooter.png'
import { FooterColumn } from './FooterColumn';




export const Footer: React.FC = () => {
        return (
            <FooterContainer>
                <FooterLeft>
                    <FooterLogo src={logo}/>
                    <FooterCopyRight>
                        Copyright © 2020 Hey Lady! All rights reserved.
                    </FooterCopyRight>
                </FooterLeft>
                <FooterRight>
                    <FooterColumn name="For Members" links={["Our Mission", "How it works", "FAQ"]} />
                    <FooterColumn name="Community" links={["About us", "Privacy Policy", "Terms of uses"]} />
                    <FooterColumn name="Need Help?" links={["Contact Us"]}  last /> 
                </FooterRight>
            </FooterContainer>
        );
}

const FooterContainer = styled.div`
    display: flex;  
    background: white;
    padding: 50px 100px;
    padding-left: 50px;
`

const FooterLeft = styled.div`
    flex: 0.3;
    display: flex;
    flex-direction: column;
`
const FooterRight = styled.div`
    flex: 0.7;
    display: flex;
    
`

const FooterLogo = styled.img`
    width: 150px;
    cursor: pointer;

`

const FooterCopyRight = styled.p`
    color: #939393;
    margin-top: 50px;
    font-weight: lighter;
`