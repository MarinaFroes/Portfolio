import React from 'react'

import { Main } from './styles'
import About from '../components/About'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProjectsContainer from '../components/ProjectsContainer'
import { PROJECTS_INFO } from '../utils/projectInfo'
import { CHALLENGES_INFO } from '../utils/challengesInfo'

const Home = () => {
  return (
    <Main className='App'>
      <Header />
      <About />
      <ProjectsContainer heading='Projects' projectInfo={PROJECTS_INFO} />
      <ProjectsContainer
        heading='Frontend Mentor Challenges'
        projectInfo={CHALLENGES_INFO}
      />
      <Footer />
    </Main>
  )
}

export default Home
