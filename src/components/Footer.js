import React from "react";
import styled from "styled-components";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

import Section from "./Section";
import SocialMedia from "./SocialMedia";

const MY_LINKEDIN = "https://www.linkedin.com/in/marina-froes-a-costa/";
const MY_GITHUB = "https://github.com/MarinaFroes";
const MY_GMAIL = "facosta.marina@gmail.com";

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

const CvLink = styled.a`
  font-size: 1rem;
  padding: 0.8rem;
  width: 10rem;
  text-align: center;
  border: 2px solid purple ;
  color: #000;
  text-decoration: none;
  margin-top: 10px;
  &:hover {
    background-color: purple;
    color: #fff;
  }
`;

const Footer = () => (
  <Section heading="Contact">
    <Contacts>
      <CvLink href="https://drive.google.com/file/d/1zzHZKeXA-ZTv2ruP7R4TwJuArrfkqelY/view?usp=sharing" download target="_blank"
        rel="noopener noreferrer">Download my CV</CvLink>
      <SocialMediaContainer>
        <SocialMedia icon={<FaEnvelope />} address={`mailto:${MY_GMAIL}`} />
        <SocialMedia icon={<FaGithub />} address={MY_GITHUB} />
        <SocialMedia icon={<FaLinkedin />} address={MY_LINKEDIN} />
      </SocialMediaContainer>
    </Contacts>
  </Section>
);

export default Footer;