import React from 'react'
import PropTypes from 'prop-types'

import { InfoContainer, InfoTitle, Image, InfoSubtitle } from './styles'

const Info = ({ title, src, alt, subtitle }) => (
  <InfoContainer>
    <InfoTitle>{title}</InfoTitle>
    <Image src={src} alt={alt} />
    <InfoSubtitle>{subtitle}</InfoSubtitle>
  </InfoContainer>
)

export default Info

Info.propTypes = {
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  subtitle: PropTypes.string.isRequired,
}
