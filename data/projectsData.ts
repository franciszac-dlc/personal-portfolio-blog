interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: "Francis' Data Blog",
    description: `A personal portfolio blog for all things data. Built using Typescript, NextJS
    TailwindCSS, and MDX.`,
    imgSrc: '/static/images/title-logo.png',
    href: 'https://github.com/franciszac-dlc/personal-portfolio-blog',
  },
]

export default projectsData
