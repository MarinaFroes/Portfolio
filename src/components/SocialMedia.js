import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Icon = styled.a`
  color: silver;
  padding: 20px;
  font-size: 30px;
`

const SocialMedia = ({ icon, address }) => (
  <Icon
    href={address}
    className="social-media"
    target="_blank"
    rel="noopener noreferrer"
  >
    {icon}
  </Icon>
);

export default SocialMedia;

SocialMedia.propTypes = {
  icon: PropTypes.object,
  address: PropTypes.string.isRequired
}