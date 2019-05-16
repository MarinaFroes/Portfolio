import React from 'react';
import logo from './logo.svg';
import About from './components/About';
import Header from './components/Header';
import SkillsContainer from './components/Skills';
import styled from 'styled-components';
import './App.css';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <Main className="App">
      <Header />
      <About />
      
      <SkillsContainer />
      
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </Main>
  );
}

export default App;
