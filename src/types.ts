export type InfoProps = {
  title: string
  src: string
  alt: string
  subtitle: string
}

export type ProjectProps = {
  src: string
  page: string
  code: string
  title: string
  technologies: string
}

export type ProjectSectionProps = {
  imageSrc: string
}

export type AdditionalInfoProps = {
  isVisible: boolean
}

export type Project = {
  title: string
  src: string
  code: string | null
  page: string | null
  technologies: string
}

export type ProjectInfo = Project[]

export type ProjectsContainerProps = {
  projectInfo: ProjectInfo
  heading: string
}

export type SectionProps = {
  heading: string
}

export type SocialMediaProps = {
  icon: any
  address: string
}