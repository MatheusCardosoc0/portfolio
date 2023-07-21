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
  {
    title: 'Pokedex',
    image: '/images/pokedex.png',
    description:
      'Este é uma aplicação web consumindo a api pokeApi, contendo todas as informações dos pokemons, neste projeto utilizei algorítimos de filtragem de dados, utilizei nextjs',
    linkDeploy: 'https://pokemon-project-liart.vercel.app/',
    linkGithub: 'https://github.com/MatheusCardosoc0/pokemon_project',
  },
  {
    title: 'Keep Soluções',
    image: '/images/keep.png',
    description:
      'Este é um site institucional de empresa de marketing digital que fiz com foco no design e apresentação da empresa',
    linkDeploy: 'https://keepsolucoes.online/',
    linkGithub: 'https://github.com/MatheusCardosoc0/keep',
  },
]
