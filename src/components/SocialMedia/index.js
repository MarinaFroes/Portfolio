import React from 'react'
import PropTypes from 'prop-types'

import { Icon } from './styles'

const SocialMedia = ({ icon, address }) => (
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

SocialMedia.propTypes = {
  icon: PropTypes.object,
  address: PropTypes.string.isRequired,
}
