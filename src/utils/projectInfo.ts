import MatchingGame from '../assets/images/MatchingGame.png'
import FroggerClone from '../assets/images/FroggerClone.png'
import WouldYouRather from '../assets/images/WouldYouRather.png'
import MyReads from '../assets/images/MyReads.png'
import EventPlanner from '../assets/images/EventPlanner.png'
import TowelShop from '../assets/images/TowelShop.png'
import { ProjectInfo } from '../types'

export const PROJECTS_INFO: ProjectInfo = [
  {
    title: 'Towel Shop',
    src: `${TowelShop}`,
    code: 'https://github.com/MarinaFroes/towelshop-frontend',
    page: 'https://sharp-curie-5f9df0.netlify.app/',
    technologies: 'React.js, Redux, Typescript, Node.js, MongoDB, Jest, docker',
  },
  {
    title: 'Event Planner',
    src: `${EventPlanner}`,
    code: 'https://github.com/MarinaFroes/Event_Planner',
    page: null,
    technologies: 'React.js, Redux, Typescript',
  },
  {
    title: 'My Reads App',
    src: `${MyReads}`,
    code: 'https://github.com/MarinaFroes/RDND-project1-MyReads/#/',
    page: 'https://marinafroes.github.io/RDND-project1-MyReads/#/',
    technologies: 'React.js',
  },
  {
    title: 'Would You Rather App',
    src: `${WouldYouRather}`,
    code: 'https://github.com/MarinaFroes/RDND-project2-WouldYouRather/#/',
    page: 'https://marinafroes.github.io/RDND-project2-WouldYouRather/#/',
    technologies: 'React.js, Redux',
  },
  {
    title: 'Frogger Clone',
    src: `${FroggerClone}`,
    code: 'https://github.com/MarinaFroes/FEND-project3-Arcade-Game-Clone/',
    page: 'https://marinafroes.github.io/FEND-project3-Arcade-Game-Clone/',
    technologies: 'JavaScript, CSS3, HTML5',
  },
  {
    title: 'Matching Game',
    src: `${MatchingGame}`,
    code: `https://github.com/MarinaFroes/FEND-project2-Matching-Game/`,
    page: 'https://marinafroes.github.io/FEND-project2-Matching-Game/',
    technologies: 'JavaScript, CSS3, HTML5',
  }
]
