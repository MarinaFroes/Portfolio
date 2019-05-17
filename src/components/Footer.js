import React from 'react';
import Section from './Section';
import SocialMedia from './SocialMedia';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import styled from "styled-components";

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

const Footer = ({ email }) => (
  <Section heading="Contact">
    <Contacts>
      <p>
        <strong>E-mail: </strong>
        <a href={`mailto:${email}`}>{email}</a>
      </p>
      <SocialMediaContainer>
        <SocialMedia icon={<FaGithub />} address="https://github.com/MarinaFroes" />
        <SocialMedia icon={<FaLinkedin />} address="https://www.linkedin.com/in/marina-froes-a-costa/" />
      </SocialMediaContainer>
    </Contacts>
  </Section>
);


export default Footer;