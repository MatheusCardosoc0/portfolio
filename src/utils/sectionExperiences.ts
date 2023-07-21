export type Experience = {
  title: string
  description: string
  abilities: string
}

export const sectionExperiences: Experience[] = [
  {
    title: 'Criação de site institucional.',
    description:
      'Desenvolvi um site para uma empresa iniciante no ramo de marketing digital, o objetivo do site era divulgar os serviços prestados pela empresa e o contato.',
    abilities:
      'Nextjs, typescript, Tailwindcss, Clean Code, Responsividade e Engenharia de prompts para IAs.',
  },
  {
    title: 'Criação de animação para site de apostas.',
    description:
      'Fui contratado para desenvolver uma animação de um jogo de apostas para um site em reactjs.',
    abilities: 'css, javascript, html.',
  },
  {
    title: 'Criação de um sistema de quadro de atividades.',
    description:
      'Fui contratado para criar um sistema de quadro de atividades utilizando um sistema low code chamado appsheet, para um aplicativo MVC de gerenciamento de funcionários de uma empresa de construção naval.',
    abilities:
      'Logica de programação, comunicação, trabalho em equipe, trabalho remoto',
  },
]
