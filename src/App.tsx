import React from 'react';
import styled from 'styled-components'
import { Header } from './components/molecules/Header';
import { Sidebar } from './components/molecules/Sidebar';
import { Footer } from './components/molecules/Footer';
import { Dashboard } from './components/molecules/Dashboard';

function App() {
  return (
    <AppContainer>
      <Sidebar/>
      <Main>
        <Header/>
        <Dashboard/>
        <Footer/>
      </Main>
    </AppContainer>
  );
}

const AppContainer = styled.div`
    display: flex;
    background: #F9F4F2;
 
`
const Main = styled.div`
    display: flex;
    flex-direction: column;
    flex: 0.8;

`

export default App;
