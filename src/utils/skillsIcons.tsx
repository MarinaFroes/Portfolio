import React from 'react'
import { Icon, InlineIcon } from '@iconify/react'
import reduxIcon from '@iconify/icons-simple-icons/redux'
import {
  FaReact,
  FaCss3Alt,
  FaHtml5,
  FaJsSquare,
  FaNodeJs,
} from 'react-icons/fa'
import { DiMongodb } from 'react-icons/di'
import typescriptIcon from '@iconify/icons-simple-icons/typescript'

export const SKILLS = [
  {
    name: 'Redux',
    icon: <InlineIcon icon={reduxIcon} />,
  },
  {
    name: 'React',
    icon: <FaReact />,
  },
  {
    name: 'JavaScript',
    icon: <FaJsSquare />,
  },
  {
    name: 'Node.js',
    icon: <FaNodeJs />,
  },
  {
    name: 'CSS',
    icon: <FaCss3Alt />,
  },
  {
    name: 'HTML',
    icon: <FaHtml5 />,
  },
  {
    name: 'Typescript',
    icon: <Icon icon={typescriptIcon} />,
  },
  {
    name: 'Mongo Db',
    icon: <DiMongodb />,
  },
]