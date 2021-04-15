import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search';

export const Searchbar: React.FC = () =>
 <SearchbarContainer>
     <SearchIconCustom/>
     <SearchbarText>Search</SearchbarText>           
 </SearchbarContainer>
 

const SearchbarContainer = styled.div`
    display: flex;
    margin-left: 32px;
    background: #F9F4F2;
    align-items: center;
    border-radius: 75px;
    height: 45px;
    width: 265px;
`

const SearchIconCustom = styled(SearchIcon)`
    fill:#939393 !important;
    margin-left: 35px;
;
`
const SearchbarText = styled.p`
    margin-left: 5px;
    color: #939393;
    padding-bottom: 3px;
`
