import React from 'react'
import styled from 'styled-components'
import { Filter } from '../atoms/Filter';
import view1 from '../../assets/img/view1.svg'
import view2 from '../../assets/img/view2.svg'


export const Filters: React.FC = () => {
        return (
            <FiltersRow>
                <FiltersContainer>
                    <Filter name="Times I'm available" first/>
                    <Filter name="Host by anyone"/>
                    <Filter name="All event types"/>
                </FiltersContainer>
                <IconsContainer>
                    <Icon1 src={view2}/>
                    <Icon2 src={view1}/>
                </IconsContainer>
            </FiltersRow>
            
        );
}

const FiltersRow = styled.div`
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    `;
const FiltersContainer = styled.div`
    display: flex;
`;

const IconsContainer = styled.div``;

const Icon1 = styled.img`
    width: 20px;
    height: 20px;
`;
const Icon2 = styled.img`
    width: 20px;
    height: 20px;
    margin-left: 25px;
`;