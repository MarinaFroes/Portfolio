import React from 'react';
import './App.css';
import styled from 'styled-components';

import About from './components/About';
import Header from './components/Header';
import SkillsContainer from './components/Skills';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Timeline from './components/Timeline';

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
      <Projects />
      <Timeline />
      <SkillsContainer />
      <Footer />
    </Main>
  );
}

export default App;
