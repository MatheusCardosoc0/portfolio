export type SectionProjectsProps = {
  image: string
  title: string
  description: string
  linkGithub: string
  linkDeploy: string
}

export const sectionProjects: SectionProjectsProps[] = [
  {
    title: 'App-Stock',
    image: '/images/app-stock.png',
    description:
      'Este é um aplicativo web de gestão de estoque simples que fiz utilizando nextjs no front-end, nodejs no back-end e mongodb como banco de dados',
    linkDeploy: 'https://app-stock-sable.vercel.app/',
    linkGithub: 'https://github.com/MatheusCardosoc0/portfolio',
  },
]
