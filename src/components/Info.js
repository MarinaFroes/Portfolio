import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;

const InfoTitle = styled.h3`
  font-size: 20px;
  color: silver;
  text-transform: uppercase;
`;

const Image = styled.img`
  height: 100px;
  width: 100px;
  padding: 10px;
`;

const InfoSubtitle = styled.p`
  font-size: 20px;
`;

const Info = ({ title, src, alt, subtitle }) => (
  <InfoContainer>
    <InfoTitle>{title}</InfoTitle>
    <Image src={src} alt={alt} />
    <InfoSubtitle>{subtitle}</InfoSubtitle>
  </InfoContainer>
);

export default Info;

Info.propTypes = {
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  subtitle: PropTypes.string.isRequired
};
