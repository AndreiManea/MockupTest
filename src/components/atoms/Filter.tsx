import React, { useState } from 'react'
import styled from 'styled-components'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { Dropdown } from '../molecules/Dropdown';
interface FilterProps {
    name: string;
    first?: boolean;
}

export const Filter: React.FC<FilterProps> = ({name, first}) => {

        const [dropdown, setDropdown] = useState(false);
        

        return (
            <FilterContainer onClick={() => setDropdown(!dropdown)} style={{marginLeft: first ? '0' : "10px"}}>
                <p>{name}</p>
                <CustomArrowDropDown/>
                {dropdown && <Dropdown/> }
            </FilterContainer>   
        );
}

const FilterContainer = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    border: 1px solid #F0DACD;
    padding: 10px 16px 10px 24px;
    border-radius: 40px;
    cursor: pointer;
    >p{
        margin: 0;
    }
`

const CustomArrowDropDown = styled(ArrowDropDownIcon)`
    fill: #272727;
    margin-left: 10px;
`