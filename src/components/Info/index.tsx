import React from 'react'

import { InfoContainer, InfoTitle, Image, InfoSubtitle } from './styles'
import { InfoProps } from '../../types'

const Info = ({ title, src, alt, subtitle }: InfoProps) => (
  <InfoContainer>
    <InfoTitle>{title}</InfoTitle>
    <Image src={src} alt={alt} />
    <InfoSubtitle>{subtitle}</InfoSubtitle>
  </InfoContainer>
)

export default Info
