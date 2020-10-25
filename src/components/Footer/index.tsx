import React from 'react'
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaTwitter,
  FaDev,
} from 'react-icons/fa'

import Section from '../Section'
import SocialMedia from '../SocialMedia'
import { Contacts, SocialMediaContainer } from './styles'
import { MY_GMAIL, MY_GITHUB, MY_LINKEDIN, MY_TWITTER, MY_DEV } from '../../utils/links'

const Footer = () => (
  <Section heading='Contact'>
    <Contacts>
      <SocialMediaContainer>
        <SocialMedia icon={<FaEnvelope />} address={`mailto:${MY_GMAIL}`} />
        <SocialMedia icon={<FaGithub />} address={MY_GITHUB} />
        <SocialMedia icon={<FaLinkedin />} address={MY_LINKEDIN} />
        <SocialMedia icon={<FaTwitter />} address={MY_TWITTER} />
        <SocialMedia icon={<FaDev />} address={MY_DEV} />
      </SocialMediaContainer>
    </Contacts>
  </Section>
)

export default Footer
