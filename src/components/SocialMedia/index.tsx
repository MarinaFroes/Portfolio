import React from 'react'

import { Icon } from './styles'
import { SocialMediaProps } from '../../types'

const SocialMedia = ({ icon, address }: SocialMediaProps) => (
  <Icon
    href={address}
    className='social-media'
    target='_blank'
    rel='noopener noreferrer'
  >
    {icon}
  </Icon>
)

export default SocialMedia
