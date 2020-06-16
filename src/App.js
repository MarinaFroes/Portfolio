import React from 'react';
import './App.css';
import styled from 'styled-components';

import About from './components/About';
import Header from './components/Header';
import Footer from './components/Footer';
import ProjectsContainer from './components/ProjectsContainer';
import { PROJECTS_INFO } from '../src/utils/projectInfo';
import { CHALLENGES_INFO } from '../src/utils/challengesInfo';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <Main className="App">
      <Header/>
      <About />
      <ProjectsContainer
        heading="Projects"
        projectInfo={PROJECTS_INFO}
      />
      <ProjectsContainer
        heading="Frontend Mentor Challenges"
        projectInfo={CHALLENGES_INFO}
      />
      <Footer/>
    </Main>
  );
}

export default App;
