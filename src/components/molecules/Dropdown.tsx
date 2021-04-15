import React from 'react'
import styled from 'styled-components'
import CheckIcon from '@material-ui/icons/Check';

export const Dropdown: React.FC = () => {
        return (
            <DropdownContainer>
                <p>Times I`m available <CheckIcon/></p>
                <p>Similar times</p>
                <p>Any time</p>
            </DropdownContainer>
        );
}

const DropdownContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 25px 10px;
    background: white;
    height: 135px;
    border-radius: 8px;
    position: absolute;
    top: 45px;
    left: 0;
    z-index: 20;
    >p:first-child{
        display: flex;
        justify-content: space-between;
        color: #D0722A;
        align-items: center;
        margin-top: 0;
        .MuiSvgIcon-root{
            margin-left: 20px;
        }
    }
    >p:hover{
        cursor: pointer;
        color: #D0722A;
    }
`