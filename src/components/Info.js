import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem;

  @media only screen and (max-width: 500px){
    margin: 0.5rem;
  }
`;

const InfoTitle = styled.h3`
  font-size: 1.2rem;
  color: silver;
  text-transform: uppercase;

  @media only screen and (max-width: 500px){
    font-size: 1rem;
  }
`;

const Image = styled.img`
  height: 8rem;
  width: 8rem;

  @media only screen and (max-width: 500px){
    height: 4rem;
    width: 4rem;
  }
`;

const InfoSubtitle = styled.p`
  font-size: 1rem;

  @media only screen and (max-width: 500px){
    font-size: 0.8rem;
  }
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
