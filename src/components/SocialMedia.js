import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Icon = styled.a`
  color: silver;
  padding: 0;
  margin: 20px;
  font-size: 30px;
  &:hover {
    color: #347B98;
  }
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