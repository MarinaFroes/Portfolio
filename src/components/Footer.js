import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaAt } from 'react-icons/fa';

import Section from './Section';
import SocialMedia from './SocialMedia';

const Contacts = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

const SocialMediaContainer = styled.div`
  padding: 30px;
`;

const Footer = ({ email, github, linkedin }) => (
  <Section heading="Contact">
    <Contacts>
      <p>
        <strong>Do you want to say hello?</strong>
      </p>
      <SocialMediaContainer>
        <SocialMedia icon={<FaAt />} address={`mailto:${email}`} />
        <SocialMedia icon={<FaGithub />} address={github} />
        <SocialMedia icon={<FaLinkedin />} address={linkedin} />
      </SocialMediaContainer>
    </Contacts>
  </Section>
);

export default Footer;