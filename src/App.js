import React from 'react';
import './App.css';
import styled from 'styled-components';

import About from './components/About';
import Header from './components/Header';
import SkillsContainer from './components/Skills';
import Footer from './components/Footer';
import ProjectsContainer from './components/ProjectsContainer';
import Timeline from './components/Timeline';

const MY_LINKEDIN = 'https://www.linkedin.com/in/marina-froes-a-costa/';
const MY_GITHUB = 'https://github.com/MarinaFroes';
const MY_GMAIL = 'facosta.marina@gmail.com';

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
      <ProjectsContainer />
      <Timeline />
      <SkillsContainer />
      <Footer
        email={MY_GMAIL}
        github={MY_GITHUB}
        linkedin={MY_LINKEDIN}
      />
    </Main>
  );
}

export default App;
