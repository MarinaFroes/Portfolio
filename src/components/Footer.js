import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaAt } from 'react-icons/fa';

import Section from './Section';
import SocialMedia from './SocialMedia';

const MY_LINKEDIN = 'https://www.linkedin.com/in/marina-froes-a-costa/';
const MY_GITHUB = 'https://github.com/MarinaFroes';
const MY_GMAIL = 'facosta.marina@gmail.com';

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

const Footer = () => (
  <Section heading="Contact">
    <Contacts>
      <p>
        <strong>Do you want to say hello?</strong>
      </p>
      <SocialMediaContainer>
        <SocialMedia icon={<FaAt />} address={`mailto:${MY_GMAIL}`} />
        <SocialMedia icon={<FaGithub />} address={MY_GITHUB} />
        <SocialMedia icon={<FaLinkedin />} address={MY_LINKEDIN} />
      </SocialMediaContainer>
    </Contacts>
  </Section>
);

export default Footer;